/* =========================================================================
   Outrank webhook receiver.
   Outrank → (this endpoint) → writes posts/<slug>.md into your GitHub repo →
   Netlify auto-rebuilds → article live. No manual step.

   Endpoint after deploy:  https://blog.qualitum.ai/.netlify/functions/outrank
   Paste that URL (and your chosen token) into Outrank → Integrations → Webhook.

   Required environment variables (Netlify → Site configuration → Env vars):
     OUTRANK_TOKEN   a secret you invent; paste the SAME value into Outrank
     GITHUB_TOKEN    a GitHub token with Contents read/write on this repo
     GITHUB_REPO     owner/repo, e.g. 0xmatevz/qualitum-blog
     GITHUB_BRANCH   optional, defaults to main
   ========================================================================= */

const json = (status, obj) => ({
  statusCode: status,
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(obj),
});

const slugify = (s) => String(s || '').toLowerCase().trim()
  .replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 80);

const yamlEscape = (s) => String(s == null ? '' : s).replace(/"/g, '\\"');

function toMarkdown(a) {
  const slug = slugify(a.slug || a.title);
  const date = (a.created_at || new Date().toISOString()).slice(0, 10);
  const tags = Array.isArray(a.tags) && a.tags.length ? `\ntags: [${a.tags.map(t => slugify(t)).join(', ')}]` : '';
  const cover = a.image_url ? `\ncover: ${a.image_url}` : '';
  const desc = a.meta_description ? `"${yamlEscape(a.meta_description)}"` : '""';
  const fm = `---
title: "${yamlEscape(a.title)}"
date: ${date}
description: ${desc}
author: Qualitum${cover}${tags}
source: outrank
---

${a.content_markdown || ''}\n`;
  return { slug, md: fm };
}

async function gh(path, opts = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'qualitum-blog-outrank',
      ...(opts.headers || {}),
    },
  });
  return res;
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  // ---- verify the request really came from Outrank ----
  const expected = process.env.OUTRANK_TOKEN;
  const auth = event.headers.authorization || event.headers.Authorization || '';
  const headerToken = auth.replace(/^Bearer\s+/i, '').trim();
  let bodyObj = {};
  try { bodyObj = JSON.parse(event.body || '{}'); } catch { return json(400, { error: 'Invalid JSON' }); }
  const bodyToken = bodyObj.access_token || event.headers['x-outrank-token'] || '';
  if (!expected || (headerToken !== expected && bodyToken !== expected)) {
    return json(401, { error: 'Unauthorized' });
  }

  if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_REPO) {
    return json(500, { error: 'Server not configured (GITHUB_TOKEN / GITHUB_REPO missing)' });
  }

  const articles = bodyObj?.data?.articles || bodyObj?.articles || [];
  if (!articles.length) return json(200, { ok: true, written: 0, note: 'No articles in payload' });

  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';
  const written = [];

  for (const a of articles) {
    const { slug, md } = toMarkdown(a);
    if (!slug) continue;
    const apiPath = `/repos/${repo}/contents/posts/${slug}.md`;
    // does it already exist? (need sha to update)
    let sha;
    const head = await gh(`${apiPath}?ref=${branch}`);
    if (head.ok) { try { sha = (await head.json()).sha; } catch {} }
    const put = await gh(apiPath, {
      method: 'PUT',
      body: JSON.stringify({
        message: `Outrank: ${sha ? 'update' : 'add'} ${slug}`,
        content: Buffer.from(md, 'utf8').toString('base64'),
        branch,
        ...(sha ? { sha } : {}),
      }),
    });
    if (put.ok) written.push(slug);
    else return json(502, { error: 'GitHub write failed', slug, detail: await put.text() });
  }

  return json(200, { ok: true, written: written.length, slugs: written });
};
