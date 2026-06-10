/* =========================================================================
   Qualitum blog — Contentful integration
   -------------------------------------------------------------------------
   HOW TO CONNECT (one-time, ~3 minutes):

   1. In Contentful, create a Content model called "Blog Post" (API id:
      blogPost) with these fields — names must match exactly:

        title         Short text
        slug          Short text   (unique — used in the URL, e.g. ?slug=my-post)
        excerpt       Short text   (the card description, 1–2 lines)
        coverImage    Media        (one image — the card / hero picture)
        author        Short text
        publishedDate Date & time
        body          Long text    (the article — written in Markdown)

   2. In Contentful → Settings → API keys, copy your Space ID and the
      Content Delivery API "access token", and paste them below.

   3. Publish a few entries. That's it — this page reads them live.

   Until you fill CONFIG in, the page shows built-in sample posts so you can
   see the layout. As soon as real keys are present, it switches to Contentful.
   ========================================================================= */

const CONFIG = {
  spaceId:     'YOUR_CONTENTFUL_SPACE_ID',   // <-- paste Space ID
  accessToken: 'YOUR_CONTENT_DELIVERY_TOKEN', // <-- paste CDA access token
  environment: 'master',
  contentType: 'blogPost',
};

/* ---- Built-in sample posts (shown only until CONFIG is filled) ---- */
const SAMPLE_POSTS = [
  {
    title: 'Why validation evidence belongs in a system, not a document',
    slug: 'evidence-not-documents',
    excerpt: 'The validation record is the most valuable, least structured data in a pharma quality org. Here is what changes when it becomes live data inside your tenant.',
    author: 'Qualitum',
    publishedDate: '2026-05-12',
    cover: null,
    body: '## The document is the bottleneck\n\nEvery regulated therapy ships on a mountain of validation evidence. Almost all of it lives in Word and PDF — authored by hand, reviewed by committee, and frozen the moment it is signed.\n\nThat freezing is the problem. The moment a system changes, the evidence is stale, and the only way to know is to read it.\n\n## What changes\n\nWhen the evidence becomes **live data** inside your own tenant:\n\n- The traceability matrix is a query, not a controlled document.\n- Audit-trail review runs continuously, not once a quarter.\n- Inspection readiness is a state you are always in.\n\n> The artifact stops being the output. The validated state becomes the output.\n\nThat is the shift Qualitum is built around.',
  },
  {
    title: 'A practical read of Annex 11 §4 in a private-tenant deployment',
    slug: 'annex-11-private-tenant',
    excerpt: 'Validation of the platform vs. validation of your configuration — where the line sits, and why private deployment makes the answer cleaner.',
    author: 'Qualitum',
    publishedDate: '2026-04-28',
    cover: null,
    body: '## Two layers, two owners\n\nAnnex 11 §4 asks for validation appropriate to risk. In a private-tenant deployment that resolves into two clean layers.\n\n### The platform layer\n\nValidated as a GAMP 5 Category 4 baseline. This is our responsibility, evidenced in the platform validation pack.\n\n### The configuration layer\n\nYour site-specific configuration is validated as part of your own CSV lifecycle — with the platform pack as the input.\n\nThe private boundary is what keeps the two from blurring.',
  },
  {
    title: 'Audit trails that reconstruct the sequence of activities',
    slug: 'audit-trails-reconstruct',
    excerpt: 'Computer-generated, time-sequenced, tamper-evident — and reviewed continuously. What a regulator-grade audit log actually requires.',
    author: 'Qualitum',
    publishedDate: '2026-04-10',
    cover: null,
    body: '## More than a log\n\nA compliant audit trail is not a log file. It has to reconstruct the sequence of activities with enough detail to satisfy an inspector, and it has to be tamper-evident.\n\n- Time-stamped by an authoritative clock, not the app server.\n- Cryptographically chained, append-only.\n- Exportable to your SIEM.\n\nThat is the bar, and it is the default.',
  },
];

/* ---- Helpers ---- */
const isConfigured = () =>
  CONFIG.spaceId && !CONFIG.spaceId.startsWith('YOUR_') &&
  CONFIG.accessToken && !CONFIG.accessToken.startsWith('YOUR_');

function fmtDate(d) {
  if (!d) return '';
  const date = new Date(d);
  if (isNaN(date)) return '';
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* Minimal, safe-enough Markdown -> HTML for the article body.
   Supports: ## / ### headings, - / 1. lists, > quotes, **bold**, `code`,
   [text](url) links, and blank-line paragraphs. */
function markdown(md) {
  const lines = String(md || '').replace(/\r\n/g, '\n').split('\n');
  let html = '', list = null;
  const inline = (t) => esc(t)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  const closeList = () => { if (list) { html += `</${list}>`; list = null; } };

  for (let raw of lines) {
    const line = raw.trim();
    if (!line) { closeList(); continue; }
    let m;
    if ((m = line.match(/^###\s+(.*)/))) { closeList(); html += `<h3>${inline(m[1])}</h3>`; }
    else if ((m = line.match(/^##\s+(.*)/))) { closeList(); html += `<h2>${inline(m[1])}</h2>`; }
    else if ((m = line.match(/^>\s+(.*)/))) { closeList(); html += `<blockquote>${inline(m[1])}</blockquote>`; }
    else if ((m = line.match(/^[-*]\s+(.*)/))) { if (list !== 'ul') { closeList(); html += '<ul>'; list = 'ul'; } html += `<li>${inline(m[1])}</li>`; }
    else if ((m = line.match(/^\d+\.\s+(.*)/))) { if (list !== 'ol') { closeList(); html += '<ol>'; list = 'ol'; } html += `<li>${inline(m[1])}</li>`; }
    else { closeList(); html += `<p>${inline(line)}</p>`; }
  }
  closeList();
  return html;
}

/* ---- Contentful fetch + normalise ---- */
async function fetchPosts() {
  if (!isConfigured()) return SAMPLE_POSTS.slice();

  const base = `https://cdn.contentful.com/spaces/${CONFIG.spaceId}/environments/${CONFIG.environment}/entries`;
  const url = `${base}?access_token=${CONFIG.accessToken}&content_type=${CONFIG.contentType}&order=-fields.publishedDate&include=2`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Contentful responded ${res.status}`);
  const data = await res.json();

  const assets = {};
  (data.includes && data.includes.Asset || []).forEach(a => {
    const f = a.fields || {};
    if (f.file && f.file.url) assets[a.sys.id] = 'https:' + f.file.url;
  });

  return (data.items || []).map(item => {
    const f = item.fields || {};
    let cover = null;
    if (f.coverImage && f.coverImage.sys && assets[f.coverImage.sys.id]) cover = assets[f.coverImage.sys.id];
    return {
      title: f.title || 'Untitled',
      slug: f.slug || item.sys.id,
      excerpt: f.excerpt || '',
      author: f.author || 'Qualitum',
      publishedDate: f.publishedDate || item.sys.createdAt,
      cover,
      body: typeof f.body === 'string' ? f.body : '',
    };
  });
}

/* ---- Renderers ---- */
function mediaStyle(cover) {
  return cover ? ` style="background-image:url('${esc(cover)}')"` : '';
}
function mediaClass(cover) {
  return cover ? '' : ' is-placeholder';
}
function metaRow(post) {
  return `<div class="blog-meta"><span>${esc(fmtDate(post.publishedDate))}</span><span class="dot"></span><span class="author">${esc(post.author)}</span></div>`;
}

function renderList(posts) {
  const root = document.getElementById('blog-root');
  if (!posts.length) { root.innerHTML = `<div class="blog-state">No posts yet. Publish an entry in Contentful and it will appear here.</div>`; return; }

  const [feat, ...rest] = posts;
  const placeholderTag = (post) => post.cover ? '' : `<span class="media-tag">Cover image</span>`;

  const featuredHTML = `
    <a class="blog-featured reveal" href="?slug=${encodeURIComponent(feat.slug)}">
      <div class="bf-media${mediaClass(feat.cover)}"${mediaStyle(feat.cover)}>${placeholderTag(feat)}</div>
      <div class="bf-body">
        ${metaRow(feat)}
        <h2>${esc(feat.title)}</h2>
        <p>${esc(feat.excerpt)}</p>
        <span class="read-more">Read the post <span>&rarr;</span></span>
      </div>
    </a>`;

  const cardsHTML = rest.map(post => `
    <a class="blog-card reveal" href="?slug=${encodeURIComponent(post.slug)}">
      <div class="bc-media${mediaClass(post.cover)}"${mediaStyle(post.cover)}>${placeholderTag(post)}</div>
      <div class="bc-body">
        ${metaRow(post)}
        <h3>${esc(post.title)}</h3>
        <p>${esc(post.excerpt)}</p>
        <span class="read-more">Read <span>&rarr;</span></span>
      </div>
    </a>`).join('');

  root.innerHTML = featuredHTML + (cardsHTML ? `<div class="blog-grid">${cardsHTML}</div>` : '');
  observeReveals();
}

function renderArticle(post) {
  const root = document.getElementById('blog-root');
  document.title = `${post.title} · Qualitum blog`;
  root.innerHTML = `
    <article class="article reveal">
      <a class="back" href="blog.html"><span>&larr;</span> All posts</a>
      ${metaRow(post)}
      <h1>${esc(post.title)}</h1>
      ${post.cover ? `<div class="article-cover" style="background:url('${esc(post.cover)}') center/cover"></div>` : `<div class="article-cover is-placeholder bc-media"></div>`}
      <div class="article-body">${markdown(post.body)}</div>
      <div class="article-foot">
        <a class="read-more" href="blog.html"><span>&larr;</span>&nbsp; Back to all posts</a>
      </div>
    </article>`;
  observeReveals();
}

function showError(err) {
  const root = document.getElementById('blog-root');
  root.innerHTML = `<div class="blog-state is-error">
    Couldn&rsquo;t load posts from Contentful.<br/>
    <code>${esc(err.message || err)}</code><br/><br/>
    Check the Space ID, access token, and that entries are published.
  </div>`;
}

let _io;
function observeReveals() {
  // Reveal synchronously — rAF/IO can be throttled in background tabs, leaving
  // dynamically-rendered content stuck at opacity:0.
  document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
}

/* ---- Boot ---- */
(async function () {
  observeReveals(); // reveal the hero immediately, before any fetch resolves
  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');
  try {
    const posts = await fetchPosts();
    if (slug) {
      const post = posts.find(p => p.slug === slug);
      if (post) renderArticle(post);
      else document.getElementById('blog-root').innerHTML =
        `<div class="blog-state">Post not found. <a class="read-more" href="blog.html" style="display:inline-flex">Back to all posts</a></div>`;
    } else {
      renderList(posts);
    }
  } catch (err) {
    showError(err);
  }
})();
