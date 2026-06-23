# Qualitum Blog — source-only, auto-building (blog.qualitum.ai)

**You only ever touch `/posts`.** One article = one Markdown file. Commit it to GitHub →
Netlify rebuilds the whole site → live in ~1 minute. You never open the Netlify dashboard.

This repo contains **source only** — no pre-built HTML. Netlify runs `npm run build`
(pure Node, no dependencies) which turns `/posts/*.md` into the full static site with
the green Qualitum design, full SEO + AEO/GEO (schema.org, sitemap, RSS, `llms.txt`,
`llms-full.txt`, AI-crawler robots). Because nothing is pre-built, a stale page can
never be served.

## Add an article
1. Create `posts/my-url-slug.md`.
2. Use this header, then write below it:

```markdown
---
title: Your headline
date: 2026-06-10
description: One sentence for Google + AI engines + social cards (~155 chars).
author: Qualitum
coverAlt: Describe the image for accessibility + SEO
tags: [validation, gxp]
cover: data:image/jpeg;base64,...    # Claude embeds this for you
---

## A heading
Body in **Markdown**. Lists, > quotes, [links](https://qualitum.ai), images.

## FAQ
### A question?
An answer.  (Becomes Google FAQ rich-results + feeds AI engines.)
```

3. Commit to GitHub. Done.

The base64 `cover:` is decoded at build time into a real cached image
(`/assets/posts/<slug>.jpg`) so the in-page hero AND the LinkedIn/Google share
preview both use a real URL.

A `cover:` can be **either** a base64 data URI (pasted images) **or** a plain
`https://…` image URL. Both are fetched/decoded at build time into a real cached
image on this domain (`/assets/posts/<slug>.<ext>`) so share previews always work.

## Markdown supported
Headings `#`–`######` (a body `#` is auto-demoted to `<h2>`, since the page title
is the only `<h1>`), **bold**, *italics* / _italics_, `inline code`, fenced ```code```
blocks, `> quotes`, bullet/numbered lists, `---` rules, links, images, and GFM
tables (`| a | b |` + `|---|---|`). A `## FAQ` section with `### Question?`
sub-headings becomes Google FAQ rich-results automatically.

## How articles get written

**By hand / with Claude:** paste the cover image + topic → Claude drafts/iterates →
hands back the finished `.md` (image embedded). You drop it in `/posts`. That's it.

**Automatically, via BabyLoveGrowth:** the Netlify Function at
`netlify/functions/blg-publish.js` receives BabyLoveGrowth's webhook and commits
`posts/<slug>.md` for you — no manual step. It writes **only** to `/posts` (never
HTML), so the source-only rule holds. Setup:

1. **GitHub token** — fine-grained PAT, repo `qualitum-blog`, *Contents: Read and write*.
2. **Netlify env vars** — `GITHUB_TOKEN` (the PAT) and `BLG_WEBHOOK_SECRET`
   (any long random string). Optional `BLG_PAUSED=1` to pause publishing.
3. **Deploy**, then point BabyLoveGrowth's generic **Webhook Integration** at
   `https://blog.qualitum.ai/.netlify/functions/blg-publish` with the same
   `BLG_WEBHOOK_SECRET` as the Bearer token, format **Markdown**, status **Publish**.

BabyLoveGrowth fields map straight onto the frontmatter: `title`→title,
`slug`→filename, `metaDescription`→description, `heroImageUrl`→cover (cached
locally at build), `tags`→tags, `content_markdown`→body.

## SEO / AEO / GEO built in
- Per-article **BlogPosting + BreadcrumbList + FAQPage** schema; **Organization +
  WebSite + Blog + ItemList** on the index.
- Canonical, Open Graph (article tags, published/modified time), Twitter cards, keywords.
- `sitemap.xml`, `rss.xml`, `robots.txt` (explicitly allows GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, etc.).
- `llms.txt` (index for AI engines) + `llms-full.txt` (full article text so engines
  can quote you accurately).

## Netlify settings (set once)
- Build command: `npm run build`  ·  Publish directory: `.`  ·  Base directory: empty
- Auto-publishing: **on** (so commits go live automatically).
