// netlify/functions/blg-publish.js
// BabyLoveGrowth webhook -> commit posts/<slug>.md -> Netlify rebuilds -> live.
// Cleans BabyLoveGrowth's body (removes the duplicated title + hero image), and
// converts their FAQ structured data into a "## FAQ" section for rich results.
// Writes ONLY posts/<slug>.md. ESM (repo is type:module). Zero dependencies.

const REPO   = "0xmatevz/qualitum-blog";
const BRANCH = "main";
const GH     = "https://api.github.com";

function slugify(s) {
  return String(s || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80) || "post";
}
const clean = (s) => String(s == null ? "" : s).replace(/\s+/g, " ").trim();

async function gh(path, opts = {}) {
  return fetch(`${GH}${path}`, { ...opts, headers: {
    "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
    "Accept": "application/vnd.github+json",
    "User-Agent": "qualitum-blog-blg",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(opts.headers || {}),
  }});
}

async function putFile(repoPath, contentBase64, message) {
  let sha;
  const head = await gh(`/repos/${REPO}/contents/${repoPath}?ref=${BRANCH}`);
  if (head.status === 200) sha = (await head.json()).sha;
  const res = await gh(`/repos/${REPO}/contents/${repoPath}`, {
    method: "PUT",
    body: JSON.stringify({ message, content: contentBase64, branch: BRANCH, ...(sha ? { sha } : {}) }),
  });
  if (!res.ok) throw new Error(`GitHub PUT ${repoPath}: ${res.status} ${await res.text()}`);
  return res.json();
}

// Remove the duplicated title + hero image that BabyLoveGrowth repeats in the body,
// because our template already shows the frontmatter title (as the page H1) and the
// cover image (as the hero). Prevents the double-title / double-image you saw.
function cleanBody(md, title, heroUrl) {
  let lines = String(md || "").replace(/\r\n/g, "\n").split("\n");
  const titleSlug = slugify(title);
  // drop leading blank lines
  while (lines.length && !lines[0].trim()) lines.shift();
  // drop a leading "# Title" (or any leading H1) that repeats the article title
  if (lines.length && /^#\s+/.test(lines[0].trim())) {
    const h = lines[0].trim().replace(/^#\s+/, "");
    if (!title || slugify(h) === titleSlug || /^#\s+/.test(lines[0].trim())) lines.shift();
  }
  // remove any standalone image lines pointing at the hero image (the duplicate)
  lines = lines.filter(l => {
    const t = l.trim();
    const img = t.match(/^!\[[^\]]*\]\(([^)]+)\)$/);
    if (img && heroUrl && img[1].trim() === heroUrl.trim()) return false;
    return true;
  });
  // drop leading blank lines again
  while (lines.length && !lines[0].trim()) lines.shift();
  return lines.join("\n").trim();
}

// Turn BabyLoveGrowth's faqJsonLd (schema.org FAQPage) into a "## FAQ" section.
function faqSection(faqJsonLd) {
  try {
    const faqs = faqJsonLd?.mainEntity;
    if (!Array.isArray(faqs) || !faqs.length) return "";
    const items = faqs.map(f => {
      const q = clean(f?.name);
      const a = clean(f?.acceptedAnswer?.text);
      return q && a ? `### ${q}\n${a}` : "";
    }).filter(Boolean);
    return items.length ? `\n\n## FAQ\n${items.join("\n\n")}` : "";
  } catch { return ""; }
}

export const handler = async (event) => {
  try {
    if (process.env.BLG_PAUSED === "1") return { statusCode: 202, body: "paused" };
    if (event.httpMethod === "GET")  return { statusCode: 200, body: "ok" };
    if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };

    const auth  = event.headers.authorization || event.headers.Authorization || "";
    const token = auth.replace(/^Bearer\s+/i, "").trim();
    if (!process.env.BLG_WEBHOOK_SECRET || token !== process.env.BLG_WEBHOOK_SECRET)
      return { statusCode: 401, body: "Unauthorized" };

    const p = JSON.parse(event.body || "{}");

    const title       = clean(p.title || "Untitled");
    const slug        = slugify(p.slug || p.title);
    const description = clean(p.metaDescription || p.meta_description || p.description || "");
    const cover       = clean(p.heroImageUrl || p.hero_image_url || p.coverImageUrl || p.featuredImageUrl || "");
    const coverAlt    = clean(p.heroImageAlt || p.imageAlt || p.coverAlt || title);
    const rawTags     = Array.isArray(p.tags) ? p.tags : (p.tags ? String(p.tags).split(",") : []);
    const tags        = rawTags.map(clean).filter(Boolean);
    const date        = new Date().toISOString().slice(0, 10);

    const rawBody = p.content_markdown || p.contentMarkdown || p.content_html || p.contentHtml || "";
    const body    = cleanBody(rawBody, title, cover);
    const faq     = faqSection(p.faqJsonLd || p.faq_json_ld);

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

    const file = `${fm}\n\n${body}${faq}\n`;
    await putFile(`posts/${slug}.md`, Buffer.from(file, "utf8").toString("base64"), `post: ${title}`);

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
