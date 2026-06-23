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
  .replace(/\*(\S(?:[^*\n]*?\S)?)\*/g, '<em>$1</em>')
  .replace(/(^|[\s(])_(\S(?:[^_\n]*?\S)?)_(?=$|[\s).,!?;:])/g, '$1<em>$2</em>')
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/!\[([^\]]*)\]\(((?:https?:|data:|\/)[^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" />')
  .replace(/\[([^\]]+)\]\(((?:https?:|\/)[^)]+)\)/g, '<a href="$2" rel="noopener">$1</a>');

/* Markdown -> HTML. Adds id="" anchors to headings (helps AEO deep-linking). */
export function markdown(md) {
  const lines = String(md || '').replace(/\r\n/g, '\n').split('\n');
  let html = '', list = null;
  const closeList = () => { if (list) { html += `</${list}>`; list = null; } };
  const isTableSep = (s) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(s || '');
  const cells = (s) => s.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    // fenced code block:  ``` ... ```
    if (/^```/.test(line)) {
      closeList();
      const lang = line.replace(/^```+/, '').trim();
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i].trim())) { buf.push(lines[i]); i++; }
      html += `<pre><code${lang ? ` class="language-${esc(lang)}"` : ''}>${esc(buf.join('\n'))}</code></pre>`;
      continue;
    }

    if (!line) { closeList(); continue; }

    // GFM table:  header row  +  |---|---| separator  +  body rows
    if (line.includes('|') && isTableSep(lines[i + 1])) {
      closeList();
      const head = cells(line);
      i++; // skip separator
      const rows = [];
      while (i + 1 < lines.length && lines[i + 1].includes('|') && lines[i + 1].trim() && !/^#{1,6}\s/.test(lines[i + 1].trim())) {
        rows.push(cells(lines[i + 1])); i++;
      }
      const thead = `<thead><tr>${head.map(h => `<th>${inline(h)}</th>`).join('')}</tr></thead>`;
      const tbody = `<tbody>${rows.map(r => `<tr>${head.map((_, c) => `<td>${inline(r[c] || '')}</td>`).join('')}</tr>`).join('')}</tbody>`;
      html += `<div class="table-wrap"><table>${thead}${tbody}</table></div>`;
      continue;
    }

    let m;
    if ((m = line.match(/^(#{1,6})\s+(.*)/))) {       // headings; H1 demoted to H2 (page title is the only H1)
      closeList();
      let lvl = m[1].length; if (lvl === 1) lvl = 2;
      const t = m[2];
      html += `<h${lvl} id="${slugify(t)}">${inline(t)}</h${lvl}>`;
    }
    else if (/^([-*_])\1{2,}$/.test(line)) { closeList(); html += '<hr />'; }   // --- *** ___
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
