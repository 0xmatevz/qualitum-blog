/* =========================================================================
   Qualitum BLOG build — blog.qualitum.ai (root).
   Content = Markdown files in /posts/*.md (frontmatter + body).
   Add an article: drop a .md file in /posts and rebuild. That's it.
   Run:  node seo/build.mjs
   ========================================================================= */
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { BLOG } from './site.config.mjs';
import { markdown, extractFaq, slugify, fmtDate, esc, readingTime, autoExcerpt } from './lib/render.mjs';

const O = BLOG.origin, M = BLOG.mainOrigin;
const abs = (u) => !u ? u : (/^https?:/.test(u) ? u : O + (u.startsWith('/') ? u : '/' + u));

/* If a post's cover is a base64 data URI, decode it to a real cached image file
   (assets/posts/<slug>.<ext>) so og:image + browser caching work. The .md stays
   the single source; the served site gets a proper image URL. */
function rehydrateCover(post) {
  const u = post.cover && post.cover.url;
  if (!u || !/^data:image\//.test(u)) return;
  const m = u.match(/^data:image\/([a-zA-Z0-9.+-]+);base64,(.+)$/s);
  if (!m) return;
  const ext = (m[1] === 'jpeg' ? 'jpg' : m[1]).toLowerCase();
  mkdirSync('assets/posts', { recursive: true });
  const rel = `assets/posts/${post.slug}.${ext}`;
  writeFileSync(rel, Buffer.from(m[2], 'base64'));
  post.cover.url = '/' + rel;
  post.seo.ogImage = '/' + rel;
}

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

/* ---- frontmatter parser (no dependencies) ---- */
function parseFrontmatter(raw) {
  const m = raw.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    const k = line.slice(0, i).trim();
    if (!k || k.startsWith('#')) continue;          // allow # comments in frontmatter
    let v = line.slice(i + 1).trim();
    if (/^\[.*\]$/.test(v)) {                        // simple [a, b] arrays
      v = v.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else {
      v = v.replace(/^["']|["']$/g, '');
    }
    data[k] = v;
  }
  return { data, body: m[2] };
}

/* ---- load posts from /posts/*.md ---- */
function loadPosts() {
  const dir = 'posts';
  if (!existsSync(dir)) { console.log('• No /posts folder found.'); return []; }
  const files = readdirSync(dir).filter(f => f.toLowerCase().endsWith('.md'));
  const posts = files.map(f => {
    const { data, body } = parseFrontmatter(readFileSync(`${dir}/${f}`, 'utf8'));
    const slug = (data.slug || f.replace(/\.md$/i, '')).toLowerCase().trim();
    const date = data.date || new Date().toISOString().slice(0, 10);
    const cover = data.cover ? { url: data.cover, alt: data.coverAlt || data.alt || '' } : null;
    return {
      title: data.title || f.replace(/\.md$/i, ''),
      slug,
      subtitle: data.subtitle || '',
      author: data.author || 'Qualitum',
      publishedDate: date,
      updatedDate: data.updated || date,
      cover,
      seo: {
        title: data.metaTitle || '',
        description: data.description || autoExcerpt(body),
        canonical: data.canonical || '',
        noindex: String(data.noindex) === 'true',
        nofollow: false,
        ogImage: cover ? cover.url : '',
      },
      bodyHtml: markdown(body),
      plain: autoExcerpt(body, 300),
      faq: extractFaq(body),
      related: [],
    };
  });
  posts.forEach(rehydrateCover);
  posts.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
  console.log(`• Loaded ${posts.length} post(s) from /posts.`);
  return posts;
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
  const ogImg = abs(post.seo.ogImage || post.cover?.url || (O + BLOG.ogImage));
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

(() => {
  const posts = loadPosts();
  const ch = chrome();
  let faq = 0;
  posts.forEach(p => { faq += renderArticle(p, ch); console.log(`  → /${p.slug}.html`); });
  renderIndex(posts, ch);
  meta(posts);
  console.log(`\n✓ Blog built: ${posts.length} post(s), ${faq} FAQ block(s), index, rss, sitemap, robots, llms.`);
})();
