// Player-facing strings for tests. Keep assertions tied to src copy, not literals.
const path = require('path');

function deepMerge(a, b) {
  if (Array.isArray(b)) return b.slice();
  if (!b || typeof b !== 'object') return b;
  const out = { ...(a && typeof a === 'object' && !Array.isArray(a) ? a : {}) };
  for (const [k, v] of Object.entries(b)) {
    out[k] = (v && typeof v === 'object' && !Array.isArray(v) && out[k] && typeof out[k] === 'object' && !Array.isArray(out[k]))
      ? deepMerge(out[k], v)
      : deepMerge(undefined, v);
  }
  return out;
}

const ui = require(path.join(__dirname, '..', 'src', 'ui.json'));
const instructions = require(path.join(__dirname, '..', 'src', 'instructions.gen.json'));
const copy = deepMerge(ui, instructions);

/** Visible plaintext from copy that may include HTML / kbd markup. */
function plain(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

/** Distinctive single-line snippet for toContainText. */
function snippet(html, max = 40) {
  const line = plain(html).split(/\n+/)[0].trim();
  return line.length <= max ? line : line.slice(0, max).trim();
}

const MENU_TAB_IDS = ['pause', 'howto', 'controls', 'settings', 'credits'];

module.exports = {
  copy,
  plain,
  snippet,
  menuTabs: () => MENU_TAB_IDS.map(id => copy.menu.tabs[id]),
  menuTab: id => copy.menu.tabs[id],
};
