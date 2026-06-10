/* Contentful Rich Text -> HTML, with reference resolution.
   Handles: headings (with anchor ids), paragraphs, lists, blockquote, hr,
   hyperlink / entry-hyperlink / asset-hyperlink, embedded asset & entry
   (componentRichImage), tables, and bold/italic/underline/code marks. */
import { esc, slugify } from './render.mjs';

const MARK = { bold: ['<strong>','</strong>'], italic: ['<em>','</em>'], underline: ['<u>','</u>'], code: ['<code>','</code>'] };

export function nodeText(node) {
  if (!node) return '';
  if (node.nodeType === 'text') return node.value || '';
  return (node.content || []).map(nodeText).join('');
}

function firstAsset(fields, ctx) {
  for (const k of Object.keys(fields || {})) {
    const v = fields[k];
    if (v && v.sys && v.sys.linkType === 'Asset') { const a = ctx.assets.get(v.sys.id); if (a) return a; }
  }
  return null;
}
function firstString(fields, keys) {
  for (const k of keys) if (typeof fields?.[k] === 'string' && fields[k].trim()) return fields[k];
  return '';
}

function renderImage(asset, caption, fullWidth) {
  if (!asset) return '';
  const cls = fullWidth ? ' class="full"' : '';
  const cap = caption ? `<figcaption>${esc(caption)}</figcaption>` : '';
  return `<figure${cls}><img src="${esc(asset.url)}" alt="${esc(caption || asset.alt || '')}" loading="lazy" />${cap}</figure>`;
}

function renderText(node) {
  let open = '', close = '';
  for (const m of node.marks || []) { const t = MARK[m.type]; if (t) { open += t[0]; close = t[1] + close; } }
  return open + esc(node.value || '') + close;
}

function renderNodes(nodes, ctx) { return (nodes || []).map(n => renderNode(n, ctx)).join(''); }

function renderNode(node, ctx) {
  const t = node.nodeType;
  switch (t) {
    case 'document': return renderNodes(node.content, ctx);
    case 'paragraph': { const inner = renderNodes(node.content, ctx); return inner.trim() ? `<p>${inner}</p>` : ''; }
    case 'heading-1': case 'heading-2': case 'heading-3':
    case 'heading-4': case 'heading-5': case 'heading-6': {
      const lvl = t.slice(-1); const txt = nodeText(node);
      return `<h${lvl} id="${slugify(txt)}">${renderNodes(node.content, ctx)}</h${lvl}>`;
    }
    case 'unordered-list': return `<ul>${renderNodes(node.content, ctx)}</ul>`;
    case 'ordered-list': return `<ol>${renderNodes(node.content, ctx)}</ol>`;
    case 'list-item': return `<li>${renderNodes(node.content, ctx)}</li>`;
    case 'blockquote': return `<blockquote>${renderNodes(node.content, ctx)}</blockquote>`;
    case 'hr': return '<hr/>';
    case 'hyperlink': return `<a href="${esc(node.data?.uri || '#')}" rel="noopener">${renderNodes(node.content, ctx)}</a>`;
    case 'entry-hyperlink': {
      const e = ctx.entries.get(node.data?.target?.sys?.id);
      const href = e && e.contentTypeId === 'pageBlogPost' && e.fields?.slug ? `/${e.fields.slug}.html` : '#';
      return `<a href="${esc(href)}">${renderNodes(node.content, ctx)}</a>`;
    }
    case 'asset-hyperlink': {
      const a = ctx.assets.get(node.data?.target?.sys?.id);
      return `<a href="${esc(a?.url || '#')}" rel="noopener">${renderNodes(node.content, ctx)}</a>`;
    }
    case 'embedded-asset-block': {
      const a = ctx.assets.get(node.data?.target?.sys?.id);
      return a && /^image\//.test(a.contentType || '') ? renderImage(a, a.alt, false) : '';
    }
    case 'embedded-entry-block': case 'embedded-entry-inline': {
      const e = ctx.entries.get(node.data?.target?.sys?.id);
      if (!e) return '';
      // componentRichImage (or anything carrying an image asset)
      const asset = firstAsset(e.fields, ctx);
      const caption = firstString(e.fields, ['caption']);
      const fullWidth = !!e.fields?.fullWidth;
      return renderImage(asset, caption, fullWidth);
    }
    case 'table': return `<table>${renderNodes(node.content, ctx)}</table>`;
    case 'table-row': return `<tr>${renderNodes(node.content, ctx)}</tr>`;
    case 'table-cell': return `<td>${renderNodes(node.content, ctx)}</td>`;
    case 'table-header-cell': return `<th>${renderNodes(node.content, ctx)}</th>`;
    case 'text': return renderText(node);
    default: return renderNodes(node.content, ctx);
  }
}

export function renderRichText(doc, ctx) {
  if (!doc || doc.nodeType !== 'document') return '';
  return renderNode(doc, ctx);
}

export function richTextToPlain(doc, max = 160) {
  const txt = (doc?.content || [])
    .filter(n => n.nodeType === 'paragraph')
    .map(nodeText).join(' ').replace(/\s+/g, ' ').trim();
  return txt.length > max ? txt.slice(0, max - 1).trimEnd() + '…' : txt;
}

/* FAQ: find a heading whose text is "FAQ", then each following deeper heading
   is a question and the paragraphs under it are the answer. */
export function extractFaqFromDoc(doc) {
  const top = doc?.content || [];
  let i = top.findIndex(n => /^heading-[1-6]$/.test(n.nodeType) && /^faq$/i.test(nodeText(n).trim()));
  if (i === -1) return [];
  const faqLevel = +top[i].nodeType.slice(-1);
  const out = []; let cur = null;
  for (let j = i + 1; j < top.length; j++) {
    const n = top[j];
    if (/^heading-[1-6]$/.test(n.nodeType)) {
      const lvl = +n.nodeType.slice(-1);
      if (lvl <= faqLevel) break;                 // new top-level section -> stop
      if (cur) out.push(cur);
      cur = { q: nodeText(n).trim(), a: '' };
    } else if (cur) {
      const txt = nodeText(n).trim();
      if (txt) cur.a = (cur.a ? cur.a + ' ' : '') + txt;
    }
  }
  if (cur && cur.a) out.push(cur);
  return out.filter(p => p.q && p.a).map(p => ({ q: p.q, a: p.a.slice(0, 320) }));
}
