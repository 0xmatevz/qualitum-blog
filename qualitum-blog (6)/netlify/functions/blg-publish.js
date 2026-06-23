// netlify/functions/blg-publish.js
// Receives a BabyLoveGrowth webhook -> commits posts/<slug>.md to GitHub
// -> Netlify rebuilds from source -> the post is live in ~1 minute.
//
// Writes ONLY posts/<slug>.md (cover passed as a URL; the build caches it onto
// blog.qualitum.ai at build time). Never commits HTML — your source-only repo
// rule stays intact. Zero dependencies (Node 18+ global fetch/Buffer).
//
// Required Netlify env vars:
//   GITHUB_TOKEN        fine-grained PAT, repo qualitum-blog, Contents: Read+Write
//   BLG_WEBHOOK_SECRET  shared secret; BabyLoveGrowth sends it as a Bearer token
// Optional:
//   BLG_PAUSED=1        drops incoming articles (pause switch)

const REPO   = "0xmatevz/qualitum-blog";
const BRANCH = "main";
const GH     = "https://api.github.com";

function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "post";
}
// frontmatter values are single-line in this build; collapse whitespace.
const clean = (s) => String(s == null ? "" : s).replace(/\s+/g, " ").trim();

async function gh(path, opts = {}) {
  return fetch(`${GH}${path}`, {
    ...opts,
    headers: {
      "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
      "Accept": "application/vnd.github+json",
      "User-Agent": "qualitum-blog-blg",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(opts.headers || {}),
    },
  });
}

async function putFile(repoPath, contentBase64, message) {
  let sha;
  const head = await gh(`/repos/${REPO}/contents/${repoPath}?ref=${BRANCH}`);
  if (head.status === 200) sha = (await head.json()).sha;   // update if it exists (BLG re-publishes by slug)
  const res = await gh(`/repos/${REPO}/contents/${repoPath}`, {
    method: "PUT",
    body: JSON.stringify({ message, content: contentBase64, branch: BRANCH, ...(sha ? { sha } : {}) }),
  });
  if (!res.ok) throw new Error(`GitHub PUT ${repoPath}: ${res.status} ${await res.text()}`);
  return res.json();
}

export const handler = async (event) => {
  try {
    if (process.env.BLG_PAUSED === "1") return { statusCode: 202, body: "paused" };
    if (event.httpMethod === "GET")  return { statusCode: 200, body: "ok" };           // ping / connectivity test
    if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };

    // auth: BabyLoveGrowth sends "Authorization: Bearer <secret>"
    const auth  = event.headers.authorization || event.headers.Authorization || "";
    const token = auth.replace(/^Bearer\s+/i, "").trim();
    if (!process.env.BLG_WEBHOOK_SECRET || token !== process.env.BLG_WEBHOOK_SECRET)
      return { statusCode: 401, body: "Unauthorized" };

    const p = JSON.parse(event.body || "{}");

    const title       = clean(p.title || "Untitled");
    const slug        = slugify(p.slug || p.title);
    const body        = p.content_markdown || p.contentMarkdown || p.content_html || p.contentHtml || "";
    const description = clean(p.metaDescription || p.meta_description || p.description || "");
    const cover       = clean(p.heroImageUrl || p.hero_image_url || p.coverImageUrl || p.featuredImageUrl || "");
    const coverAlt    = clean(p.heroImageAlt || p.imageAlt || p.coverAlt || "");
    const rawTags     = Array.isArray(p.tags) ? p.tags : (p.tags ? String(p.tags).split(",") : []);
    const tags        = rawTags.map(clean).filter(Boolean);
    const date        = new Date().toISOString().slice(0, 10);

    // frontmatter — exactly the fields seo/build.mjs reads, unquoted single-line values
    const fm = [
      "---",
      `title: ${title}`,
      `date: ${date}`,
      description ? `description: ${description}` : null,
      "author: Qualitum",
      cover ? `cover: ${cover}` : null,
      coverAlt ? `coverAlt: ${coverAlt}` : null,
      tags.length ? `tags: [${tags.join(", ")}]` : null,
      "---",
    ].filter(Boolean).join("\n");

    const file = `${fm}\n\n${String(body).trim()}\n`;   // guaranteed blank line after frontmatter

    await putFile(
      `posts/${slug}.md`,
      Buffer.from(file, "utf8").toString("base64"),
      `post: ${title}`
    );

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true, slug, url: `https://blog.qualitum.ai/${slug}.html` }),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: `Error: ${err.message}` };
  }
};
