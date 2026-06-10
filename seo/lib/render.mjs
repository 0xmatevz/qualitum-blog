/* Shared rendering helpers for the blog build (and reused conceptually by blog.js). */

export const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const slugify = (s) => String(s || '').toLowerCase().trim()
  .replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

export function readingTime(md) {
  const words = String(md || '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function fmtDate(d) {
  if (!d) return '';
  const date = new Date(d);
  if (isNaN(date)) return '';
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

const inline = (t) => esc(t)
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/!\[([^\]]*)\]\(((?:https?:|data:)[^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" />')
  .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" rel="noopener">$1</a>');

/* Markdown -> HTML. Adds id="" anchors to headings (helps AEO deep-linking). */
export function markdown(md) {
  const lines = String(md || '').replace(/\r\n/g, '\n').split('\n');
  let html = '', list = null;
  const closeList = () => { if (list) { html += `</${list}>`; list = null; } };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { closeList(); continue; }
    let m;
    if ((m = line.match(/^###\s+(.*)/)))      { closeList(); const t = m[1]; html += `<h3 id="${slugify(t)}">${inline(t)}</h3>`; }
    else if ((m = line.match(/^##\s+(.*)/)))  { closeList(); const t = m[1]; html += `<h2 id="${slugify(t)}">${inline(t)}</h2>`; }
    else if ((m = line.match(/^>\s+(.*)/)))   { closeList(); html += `<blockquote>${inline(m[1])}</blockquote>`; }
    else if ((m = line.match(/^[-*]\s+(.*)/))){ if (list !== 'ul') { closeList(); html += '<ul>'; list = 'ul'; } html += `<li>${inline(m[1])}</li>`; }
    else if ((m = line.match(/^\d+\.\s+(.*)/))){ if (list !== 'ol') { closeList(); html += '<ol>'; list = 'ol'; } html += `<li>${inline(m[1])}</li>`; }
    else { closeList(); html += `<p>${inline(line)}</p>`; }
  }
  closeList();
  return html;
}

/* Pull Q/A pairs out of a "## FAQ" section for FAQPage schema (great for AEO).
   Convention: a "## FAQ" heading, then each "### Question?" followed by answer text. */
export function extractFaq(md) {
  const text = String(md || '').replace(/\r\n/g, '\n');
  const faqIdx = text.search(/^##\s+FAQ\s*$/im);
  if (faqIdx === -1) return [];
  const section = text.slice(faqIdx).split(/\n##\s+(?!#)/)[0]; // until next H2
  const parts = section.split(/^###\s+/m).slice(1);
  const out = [];
  for (const p of parts) {
    const nl = p.indexOf('\n');
    const q = (nl === -1 ? p : p.slice(0, nl)).trim();
    const a = (nl === -1 ? '' : p.slice(nl + 1)).trim().replace(/\n+/g, ' ');
    if (q && a) out.push({ q, a });
  }
  return out;
}

/* Plain-text excerpt fallback from body. */
export function autoExcerpt(md, max = 155) {
  const t = String(md || '').replace(/[#>*`_\-]/g, '').replace(/\[(.*?)\]\(.*?\)/g, '$1').replace(/\s+/g, ' ').trim();
  return t.length > max ? t.slice(0, max - 1).trimEnd() + '…' : t;
}
