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

## How articles get written
In a chat with Claude: paste the cover image + topic → Claude drafts/iterates →
hands back the finished `.md` (image embedded). You drop it in `/posts`. That's it.

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
