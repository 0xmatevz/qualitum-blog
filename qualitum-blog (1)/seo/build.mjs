/* =========================================================================
   Qualitum BLOG bundle build — blog.qualitum.ai (root).
   Content model: pageBlogPost (Contentful blog template) with Rich Text body
   and linked author / seoFields / featuredImage / componentRichImage.
   Run:  node seo/build.mjs
   Env: CONTENTFUL_CDA_TOKEN (required for live content; samples used if absent),
        CONTENTFUL_SPACE_ID (optional override), CONTENTFUL_ENV (default master),
        ANTHROPIC_API_KEY + QUALITUM_AI_MODEL (optional AI auto-SEO).
   ========================================================================= */
import { readFileSync, writeFileSync } from 'node:fs';
import { BLOG } from './site.config.mjs';
import { SAMPLE_POSTS } from './sample-posts.mjs';
import { markdown, extractFaq, slugify, fmtDate, esc, readingTime, autoExcerpt } from './lib/render.mjs';
import { renderRichText, richTextToPlain, extractFaqFromDoc } from './lib/richtext.mjs';

const O = BLOG.origin, M = BLOG.mainOrigin;

/* ---- nav + footer, links pointed at the main site ---- */
function chrome() {
  const [navRaw, footRaw] = readFileSync('seo/chrome.html', 'utf8').split('<!--SPLIT-->');
  const fix = (html) => html.replace(/(href|src)="([^"]+)"/g, (m, a, v) => {
    if (a === 'src') return m;
    if (/^(https?:|mailto:|tel:|#)/.test(v)) return m;
    const clean = v.replace(/^(\.\/|\.\.\/)+/, '');
    if (clean === 'blog.html') return `href="/"`;
    if (clean === 'index.html') return `href="${M}/"`;
    if (clean.startsWith('assets/')) return `href="${clean}"`;
    return `href="${M}/${clean}"`;
  });
  return { nav: fix(navRaw), footer: fix(footRaw) };
}

/* ---- reference resolution helpers ---- */
const firstString = (fields, keys) => { for (const k of keys) if (typeof fields?.[k] === 'string' && fields[k].trim()) return fields[k]; return ''; };
function assetFromLink(link, assets) { const id = link?.sys?.id; return id ? assets.get(id) : null; }

/* ---- load + normalise posts ---- */
async function loadPosts() {
  const space = process.env.CONTENTFUL_SPACE_ID || BLOG.spaceId;
  const token = process.env.CONTENTFUL_CDA_TOKEN;
  const env = process.env.CONTENTFUL_ENV || 'master';
  if (!token) { console.log('• CONTENTFUL_CDA_TOKEN not set → using sample posts.'); return SAMPLE_POSTS.map(normalizeSample); }

  const url = `https://cdn.contentful.com/spaces/${space}/environments/${env}/entries`
    + `?access_token=${token}&content_type=${BLOG.contentType}&order=-fields.publishedDate&include=3`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Contentful ${res.status}: ${await res.text()}`);
  const data = await res.json();

  const assets = new Map();
  (data.includes?.Asset || []).forEach(a => {
    const f = a.fields || {};
    if (f.file?.url) assets.set(a.sys.id, { url: 'https:' + f.file.url, alt: f.description || f.title || '', title: f.title || '', contentType: f.file.contentType || '' });
  });
  const entries = new Map();
  [...(data.items || []), ...(data.includes?.Entry || [])].forEach(e =>
    entries.set(e.sys.id, { contentTypeId: e.sys.contentType?.sys?.id, fields: e.fields || {} }));
  const ctx = { assets, entries };

  console.log(`• Loaded ${data.items?.length || 0} posts from Contentful (space ${space}).`);
  return (data.items || []).map(it => {
    const f = it.fields || {};
    const cover = assetFromLink(f.featuredImage, assets);
    const authorE = entries.get(f.author?.sys?.id);
    const author = authorE ? (firstString(authorE.fields, ['name', 'fullName', 'internalName']) || 'Qualitum') : 'Qualitum';
    const seoE = entries.get(f.seoFields?.sys?.id);
    const seoF = seoE?.fields || {};
    const shareImg = Array.isArray(seoF.shareImages) ? assetFromLink(seoF.shareImages[0], assets)
                   : assetFromLink(seoF.shareImages || seoF.ogImage || seoF.image, assets);
    const related = (f.relatedBlogPosts || []).map(l => entries.get(l?.sys?.id))
      .filter(Boolean).map(e => ({ title: firstString(e.fields, ['title', 'internalName']) || 'Post', slug: e.fields.slug }))
      .filter(r => r.slug);
    return {
      title: f.title || f.internalName || 'Untitled',
      slug: f.slug || slugify(f.title) || it.sys.id,
      subtitle: f.shortDescription || '',
      author,
      publishedDate: f.publishedDate || it.sys.createdAt,
      updatedDate: it.sys.updatedAt,
      cover: cover ? { url: cover.url, alt: cover.alt } : null,
      seo: {
        title: firstString(seoF, ['pageTitle', 'title']),
        description: firstString(seoF, ['pageDescription', 'description', 'metaDescription']),
        canonical: firstString(seoF, ['canonicalUrl', 'canonical']),
        noindex: !!seoF.noindex, nofollow: !!seoF.nofollow,
        ogImage: shareImg?.url || '',
      },
      bodyHtml: renderRichText(f.content, ctx),
      plain: richTextToPlain(f.content),
      faq: extractFaqFromDoc(f.content),
      related,
    };
  });
}

/* sample posts (markdown) -> same normalised shape */
function normalizeSample(p) {
  return {
    title: p.title, slug: p.slug, subtitle: p.excerpt || '', author: p.author || 'Qualitum',
    publishedDate: p.publishedDate, updatedDate: p.publishedDate,
    cover: p.cover ? { url: p.cover, alt: '' } : null,
    seo: { title: '', description: p.excerpt || '', canonical: '', noindex: false, nofollow: false, ogImage: '' },
    bodyHtml: markdown(p.body), plain: autoExcerpt(p.body), faq: extractFaq(p.body), related: [],
  };
}

/* ---- optional AI auto-SEO ---- */
async function enrich(post) {
  if (!process.env.ANTHROPIC_API_KEY) return post;
  const needs = !post.seo.description || !post.subtitle || (post.cover && !post.cover.alt) || !post.faq.length;
  if (!needs) return post;
  const model = process.env.QUALITUM_AI_MODEL || 'claude-sonnet-4-5';
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model, max_tokens: 800,
        system: 'You are an SEO/AEO editor for Qualitum, a private agentic AI platform for life-sciences validation/compliance. Return ONLY minified JSON.',
        messages: [{ role: 'user', content: `Return JSON {"metaDescription"(<=155 chars),"subtitle"(1 sentence),"coverAlt"(or ""),"faq":[{"q","a"}](<=3, answers<=320 chars, grounded only in the post)}. Title: ${post.title}\n\nContent:\n${post.plain}\n${post.bodyHtml.replace(/<[^>]+>/g,' ').slice(0,5000)}` }] }) });
    if (!res.ok) { console.warn(`  ⚠ AI skip (${res.status})`); return post; }
    const data = await res.json();
    const j = JSON.parse((data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('').replace(/```json|```/g,'').trim());
    post.seo.description ||= j.metaDescription || ''; post.subtitle ||= j.subtitle || '';
    if (post.cover && !post.cover.alt) post.cover.alt = j.coverAlt || '';
    if (!post.faq.length && Array.isArray(j.faq)) post.faq = j.faq.filter(x=>x.q&&x.a);
    console.log(`  ✦ AI-enriched: ${post.slug}`);
  } catch (e) { console.warn(`  ⚠ AI error ${post.slug}: ${e.message}`); }
  return post;
}

const headCommon = `<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#082218" />
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/assets/qualitum.css" />
<link rel="stylesheet" href="/assets/blog.css" />`;

function descOf(p) { return p.seo.description || p.subtitle || p.plain || ''; }

/* ---- article page ---- */
function renderArticle(post, ch) {
  const desc = descOf(post);
  const url = post.seo.canonical || `${O}/${post.slug}.html`;
  const ogImg = post.seo.ogImage || post.cover?.url || (O + BLOG.ogImage);
  const rt = readingTime(post.plain + ' ' + post.bodyHtml.replace(/<[^>]+>/g, ' '));
  const robots = post.seo.noindex ? 'noindex' : 'index' ; const follow = post.seo.nofollow ? 'nofollow' : 'follow';
  const ld = [
    { '@context':'https://schema.org','@type':'BlogPosting', headline:post.title, description:desc, image:ogImg,
      datePublished:new Date(post.publishedDate).toISOString(), dateModified:new Date(post.updatedDate||post.publishedDate).toISOString(),
      author:{'@type':'Person',name:post.author}, publisher:{'@type':'Organization',name:'Qualitum',logo:{'@type':'ImageObject',url:M+'/assets/qualitum-logo.png'}},
      mainEntityOfPage:{'@type':'WebPage','@id':url}, inLanguage:'en' },
    { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:M+'/'},
      {'@type':'ListItem',position:2,name:'Blog',item:O+'/'},
      {'@type':'ListItem',position:3,name:post.title,item:`${O}/${post.slug}.html`} ] },
  ];
  if (post.faq.length) ld.push({ '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: post.faq.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})) });
  const cover = post.cover
    ? `<div class="article-cover" style="background:url('${esc(post.cover.url)}') center/cover" role="img" aria-label="${esc(post.cover.alt||post.title)}"></div>`
    : `<div class="article-cover is-placeholder bc-media"></div>`;
  const deck = post.subtitle ? `<p class="article-deck">${esc(post.subtitle)}</p>` : '';
  const related = post.related.length ? `<div class="article-related"><h3>Related</h3><ul>${
    post.related.map(r=>`<li><a href="/${esc(r.slug)}.html">${esc(r.title)}</a></li>`).join('')}</ul></div>` : '';
  const html = `<!DOCTYPE html><html lang="en"><head>
<title>${esc(post.seo.title || post.title)} · Qualitum blog</title>
<meta name="description" content="${esc(desc)}" />
<link rel="canonical" href="${esc(url)}" />
<meta name="robots" content="${robots},${follow},max-image-preview:large,max-snippet:-1" />
<meta property="og:type" content="article" /><meta property="og:site_name" content="Qualitum" />
<meta property="og:title" content="${esc(post.seo.title || post.title)}" /><meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${esc(`${O}/${post.slug}.html`)}" /><meta property="og:image" content="${esc(ogImg)}" />
<meta property="article:published_time" content="${new Date(post.publishedDate).toISOString()}" />
<meta name="twitter:card" content="summary_large_image" /><meta name="twitter:site" content="${esc(BLOG.twitter)}" />
<meta name="twitter:title" content="${esc(post.title)}" /><meta name="twitter:image" content="${esc(ogImg)}" />
${headCommon}
${ld.map(o=>`<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
</head><body>
<div class="hero-wrap"><header class="hero-dark subpage" style="padding-bottom:56px;">
<div class="vlines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
${ch.nav}
<div class="hero-inner" style="display:block;max-width:820px;margin:0 auto;text-align:center;padding-top:18px;">
<div class="hero-kicker reveal in" style="justify-content:center;"><span class="kdot"></span>Blog</div></div>
</header></div>
<main><section class="section blog-wrap" style="padding-top:0;"><div class="container" style="margin-top:-28px;position:relative;z-index:3;">
<article class="article reveal in">
<a class="back" href="/"><span>&larr;</span> All posts</a>
<div class="blog-meta"><span>${esc(fmtDate(post.publishedDate))}</span><span class="dot"></span><span class="author">${esc(post.author)}</span><span class="dot"></span><span>${rt} min read</span></div>
<h1>${esc(post.title)}</h1>${deck}${cover}
<div class="article-body">${post.bodyHtml}</div>
${related}
<div class="article-foot"><a class="read-more" href="/"><span>&larr;</span>&nbsp; Back to all posts</a></div>
</article></div></section></main>
${ch.footer}</body></html>`;
  writeFileSync(`${post.slug}.html`, html);
  return post.faq.length;
}

/* ---- listing (index.html) ---- */
function renderIndex(posts, ch) {
  const card = (p, feat) => {
    const href = `/${p.slug}.html`;
    const media = p.cover ? `style="background-image:url('${esc(p.cover.url)}')"` : '';
    const cls = p.cover ? '' : ' is-placeholder';
    const tag = p.cover ? '' : `<span class="media-tag">Cover image</span>`;
    const meta = `<div class="blog-meta"><span>${esc(fmtDate(p.publishedDate))}</span><span class="dot"></span><span class="author">${esc(p.author)}</span></div>`;
    const exc = esc(p.subtitle || descOf(p));
    return feat
      ? `<a class="blog-featured reveal in" href="${href}"><div class="bf-media${cls}" ${media}>${tag}</div><div class="bf-body">${meta}<h2>${esc(p.title)}</h2><p>${exc}</p><span class="read-more">Read the post <span>&rarr;</span></span></div></a>`
      : `<a class="blog-card reveal in" href="${href}"><div class="bc-media${cls}" ${media}>${tag}</div><div class="bc-body">${meta}<h3>${esc(p.title)}</h3><p>${exc}</p><span class="read-more">Read <span>&rarr;</span></span></div></a>`;
  };
  const [feat, ...rest] = posts;
  const list = posts.length ? card(feat,true)+(rest.length?`<div class="blog-grid">${rest.map(p=>card(p,false)).join('')}</div>`:'') : `<div class="blog-state">No posts yet.</div>`;
  const itemList = { '@context':'https://schema.org','@type':'ItemList', itemListElement: posts.map((p,i)=>({'@type':'ListItem',position:i+1,url:`${O}/${p.slug}.html`,name:p.title})) };
  const html = `<!DOCTYPE html><html lang="en"><head>
<title>Blog · Qualitum</title>
<meta name="description" content="Field notes on private agentic AI for life-sciences validation, quality, and compliance." />
<link rel="canonical" href="${O}/" />
<meta name="robots" content="index,follow,max-image-preview:large" />
<meta property="og:type" content="website" /><meta property="og:site_name" content="Qualitum" />
<meta property="og:title" content="Qualitum Blog" /><meta property="og:url" content="${O}/" />
<meta property="og:description" content="Field notes on private agentic AI for validation, quality, and compliance." />
<meta property="og:image" content="${O}${BLOG.ogImage}" />
<meta name="twitter:card" content="summary_large_image" /><meta name="twitter:site" content="${esc(BLOG.twitter)}" />
${headCommon}
<link rel="alternate" type="application/rss+xml" title="Qualitum Blog" href="/rss.xml" />
<script type="application/ld+json">${JSON.stringify(itemList)}</script>
</head><body>
<div class="hero-wrap"><header class="hero-dark subpage" style="padding-bottom:72px;">
<div class="vlines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
${ch.nav}
<div class="hero-inner" style="display:block;max-width:960px;margin:0 auto;text-align:center;padding-top:24px;">
<div class="hero-kicker reveal in" style="justify-content:center;"><span class="kdot"></span>Blog</div>
<h1 class="hero-title reveal in" style="font-size:clamp(40px,6vw,60px);line-height:1.05;letter-spacing:-0.02em;margin:18px 0;text-align:center;">Notes from the <span class="accent">validated&nbsp;edge.</span></h1>
<p class="hero-lede reveal in" style="max-width:640px;margin:0 auto;text-align:center;">Field notes on private agentic AI for life-sciences validation, quality, and compliance.</p>
</div></header></div>
<main><section class="section blog-wrap" style="padding-top:0;"><div class="container" style="margin-top:-36px;position:relative;z-index:3;">
<div id="blog-root" data-static="1">${list}</div>
</div></section></main>
${ch.footer}
<script src="/assets/blog.js"></script></body></html>`;
  writeFileSync('index.html', html);
}

/* ---- robots / sitemap / rss / llms / manifest ---- */
function meta(posts) {
  writeFileSync('robots.txt',
`User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: CCBot
Allow: /

Sitemap: ${O}/sitemap.xml
`);
  const today = new Date().toISOString().slice(0,10);
  const idx = posts.filter(p => !p.seo.noindex);
  const urls = [`  <url><loc>${O}/</loc><lastmod>${today}</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>`]
    .concat(idx.map(p=>`  <url><loc>${O}/${p.slug}.html</loc><lastmod>${new Date(p.updatedDate||p.publishedDate).toISOString().slice(0,10)}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`));
  writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
  const items = idx.map(p=>`    <item><title>${esc(p.title)}</title><link>${O}/${p.slug}.html</link><guid isPermaLink="true">${O}/${p.slug}.html</guid><pubDate>${new Date(p.publishedDate).toUTCString()}</pubDate><description>${esc(descOf(p))}</description></item>`).join('\n');
  writeFileSync('rss.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>\n  <title>Qualitum Blog</title>\n  <link>${O}/</link>\n  <description>Field notes on private agentic AI for validation, quality, and compliance.</description>\n  <language>en</language>\n${items}\n</channel></rss>\n`);
  writeFileSync('site.webmanifest', JSON.stringify({ name:'Qualitum Blog', short_name:'Qualitum', start_url:'/', display:'standalone', background_color:'#082218', theme_color:'#082218', icons:[{src:'/assets/qt-logo-square.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}] }, null, 2));
  writeFileSync('llms.txt',
`# Qualitum Blog

> Field notes on private agentic AI for life-sciences validation, quality, and compliance. Published by Qualitum (${M}), a private, LLM-agnostic agentic AI platform for regulated industries.

## Posts
${idx.map(p=>`- [${p.title}](${O}/${p.slug}.html): ${descOf(p).slice(0,140)}`).join('\n')}

## About
- [Qualitum (main site)](${M}/): The private agentic AI platform for life sciences.
- [Platform](${M}/platform/): The four agentic systems.
`);
}

(async () => {
  let posts = await loadPosts();
  for (const p of posts) await enrich(p);
  const ch = chrome();
  let faq = 0;
  posts.forEach(p => { faq += renderArticle(p, ch); console.log(`  → /${p.slug}.html`); });
  renderIndex(posts, ch);
  meta(posts);
  console.log(`\n✓ Blog built: ${posts.length} post(s), ${faq} FAQ block(s), index, rss, sitemap, robots, llms.`);
})();
