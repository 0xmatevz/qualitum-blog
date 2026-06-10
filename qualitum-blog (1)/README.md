# Qualitum — BLOG site (blog.qualitum.ai)

Standalone blog, served at the **root** of the subdomain (posts at
`blog.qualitum.ai/<slug>.html`). Nav/footer link back to the main site
(`qualitum.ai`). Content comes from Contentful using the **`pageBlogPost`**
model (the official Contentful blog template). Until the token is set, it
builds 3 sample posts so you can preview.

## Content model (already created in your space — `pageBlogPost`)
The build reads these fields and resolves the linked references automatically:

| Field (API id) | Type | Used for |
|---|---|---|
| `title` | Short text | H1, og:title |
| `slug` | Short text | URL → `/<slug>.html` |
| `shortDescription` | Long text | subtitle/deck + card + meta fallback |
| `content` | **Rich Text** | the article body (headings, lists, quotes, tables, links, images) |
| `featuredImage` | Media | cover image + og:image fallback |
| `author` → `componentAuthor` | Reference | byline (reads `name`) |
| `seoFields` → `componentSeo` | Reference | meta/SEO overrides (see below) |
| `publishedDate` | Date & time | date + ordering |
| `relatedBlogPosts` → `pageBlogPost[]` | References | "Related" links at the foot |

**SEO component (`componentSeo`)** — optional but recommended. The build reads,
if present: `pageTitle`, `pageDescription`, `canonicalUrl`, `noindex`,
`nofollow`, and the first of `shareImages` (used as og:image). Anything missing
falls back to the post's own title/subtitle/featured image.

**Embedded images** in Rich Text (`componentRichImage`) render as figures with
captions; set `fullWidth` for a wide image.

**FAQ for AI answer engines:** add a Rich-Text **Heading "FAQ"**, then each
question as a deeper heading (e.g. Heading 3) followed by its answer paragraph.
Those become `FAQPage` structured data automatically. (Or let the optional AI
step generate them.)

## Deploy (Netlify — a separate site from the main one)
1. Put this folder in its own Git repo.
2. Netlify → Add new site → Import from Git → pick it. It runs `npm run build`.
3. Add custom domain **blog.qualitum.ai** (Netlify → Domain settings → add a
   subdomain → create the CNAME it shows you at your DNS provider).
4. Add environment variables on THIS Netlify site:
   - `CONTENTFUL_CDA_TOKEN` = your Content Delivery API token  ← the only secret
   - `CONTENTFUL_SPACE_ID` is pre-filled (`85x44rfg9ere`) but you can override it
   - optional `CONTENTFUL_ENV` (default `master`)
   - optional `ANTHROPIC_API_KEY` (+ `QUALITUM_AI_MODEL`) for AI auto-SEO on publish
5. Auto-publish: Netlify → Build hooks → create one; Contentful → Settings →
   Webhooks → paste the hook URL, trigger on Entry Publish/Unpublish. Publishing
   now rebuilds the blog in ~1 min.
6. Submit `https://blog.qualitum.ai/sitemap.xml` to Search Console + Bing.

## Security
Keep `CONTENTFUL_CDA_TOKEN` in Netlify env vars only — do not commit it. It is
read-only, but since it was shared in a screenshot, consider rotating it in
Contentful (Settings → API keys) once everything works.
