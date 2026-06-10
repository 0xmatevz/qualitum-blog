# Qualitum Blog — paste-and-publish Markdown (blog.qualitum.ai)

**One article = one Markdown file in `/posts`.** No CMS, no logins. Add a file → it's live.

## The normal way you'll add articles (with Claude)
In a chat with Claude:
1. Say **"new Qualitum article"** and **paste the image** you want as the cover.
2. Claude asks a couple of quick questions (title/angle, key points), drafts the
   article, and you iterate until you're happy.
3. Claude hands back **one finished Markdown block** — the image is embedded inside
   it as base64, so there's nothing separate to host.
4. On GitHub → `posts` folder → **Add file → Create new file** → name it
   `your-slug.md` → paste → **Commit**. Live in ~1 minute.

The embedded image is automatic: when the site builds, that base64 cover is decoded
into a real cached image file (`/assets/posts/<slug>.jpg`) so the in-page hero AND
the LinkedIn/Google share preview both work. You never touch image hosting.

## Write an article by hand (easiest)

1. Create a file in the **`posts/`** folder named after the URL you want, e.g.
   `posts/annex-11-readiness.md` → lives at `blog.qualitum.ai/annex-11-readiness.html`.
2. Paste this template and write below the second `---`:

```markdown
---
title: Your headline here
date: 2026-06-10
description: One sentence for Google and social cards (under ~155 chars).
author: Qualitum
# cover: https://link-to-an-image.jpg     # optional featured image
# tags: [validation, gxp]                  # optional
---

## A heading

Your text in **Markdown**. Bullet lists, > quotes, [links](https://qualitum.ai),
and ![image alt](https://image-url.jpg) all work.

## FAQ
### A question someone might ask?
The answer. (A "FAQ" heading with question sub-headings becomes Google FAQ rich results automatically.)
```

3. Only `title`, `date`, and `description` really matter — the rest is optional.
4. On GitHub: open the repo → `posts` folder → **Add file → Create new file** (or
   **Upload files**) → paste/drag → **Commit**. Netlify rebuilds in ~1 min and it's live.

To edit or delete a post later, just edit or delete its `.md` file. To unpublish
without deleting, add `noindex: true` to the frontmatter or remove the file.

---

## Auto-publish from Outrank (hands-off SEO articles)

Outrank writes SEO articles and sends each one to a webhook. A small function in
this repo (`netlify/functions/outrank.mjs`) catches it, drops the `.md` into
`/posts`, and the site rebuilds itself.

**One-time setup**

1. **GitHub token** — GitHub → Settings → Developer settings → *Fine-grained
   tokens* → generate one with **Contents: Read and write** on the `qualitum-blog`
   repo. Copy it.
2. **Netlify env vars** (Site configuration → Environment variables) — add:
   - `GITHUB_TOKEN` = the token from step 1
   - `GITHUB_REPO` = `0xmatevz/qualitum-blog`
   - `GITHUB_BRANCH` = `main`
   - `OUTRANK_TOKEN` = any secret you make up (e.g. a long random string)
3. **Redeploy** once so the function picks up the variables.
4. **Outrank** → Integrations → **Webhook**:
   - URL: `https://blog.qualitum.ai/.netlify/functions/outrank`
   - Access token: the same value you used for `OUTRANK_TOKEN`
   - Save, then use Outrank's “send test / publish” to confirm a post appears.

After that, every article Outrank publishes lands in `/posts` and goes live on its
own. You can still edit any of them by hand afterwards — they're just `.md` files.

**Recommended:** run Outrank in **draft / review mode** and give pieces a quick
edit before publishing. Fully-automated AI content can fall foul of Google's
"scaled content" guidance; a light human touch keeps quality and rankings safe.

---

## Deploy notes
- This folder is the site root. When you put it in GitHub, the files
  (`index.html`, `posts/`, `assets/`, `seo/`, `netlify.toml`…) must sit at the
  **repo root** — not inside a sub-folder. (If they end up nested, set Netlify →
  Build settings → **Base directory** to that sub-folder.)
- Build command `npm run build` (pure Node, runs `seo/build.mjs`). Publish dir `.`.
- Contentful is no longer used — you can delete its webhook and any
  `CONTENTFUL_*` environment variables.
