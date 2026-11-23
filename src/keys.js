// Pixel keyboard icons (Szatanik Studio) with accessible names.

const KEYS = {
  w: { spr: 'key_w', label: 'W' },
  a: { spr: 'key_a', label: 'A' },
  s: { spr: 'key_s', label: 'S' },
  d: { spr: 'key_d', label: 'D' },
  p: { spr: 'key_p', label: 'P' },
  r: { spr: 'key_r', label: 'R' },
  m: { spr: 'key_m', label: 'M' },
  space: { spr: 'key_space', label: 'Space' },
  esc: { spr: 'key_esc', label: 'Escape' },
  enter: { spr: 'key_enter', label: 'Enter' },
  up: { spr: 'key_up', label: 'Up arrow' },
  down: { spr: 'key_down', label: 'Down arrow' },
  left: { spr: 'key_left', label: 'Left arrow' },
  right: { spr: 'key_right', label: 'Right arrow' },
};

const ALIASES = {
  spacebar: 'space',
  ' ': 'space',
  escape: 'esc',
  arrows: 'arrows',
  wasd: 'wasd',
};

function resolveId(raw) {
  const t = String(raw).trim();
  const lower = t.toLowerCase();
  if (KEYS[lower]) return lower;
  if (ALIASES[lower]) return ALIASES[lower];
  if (t.length === 1 && KEYS[lower]) return lower;
  return null;
}

/** Single key glyph with visually-hidden accessible label. */
export function keyIcon(id) {
  const meta = KEYS[id];
  if (!meta) return '';
  return `<kbd class="keyicon" title="${meta.label}"><span class="spr-${meta.spr}" aria-hidden="true"></span><span class="vh">${meta.label}</span></kbd>`;
}

export function keysRow(ids, sep = '') {
  return ids.map(keyIcon).filter(Boolean).join(sep);
}

const CONTROL_KEYS = {
  'WASD / ARROWS': () => `${keysRow(['w', 'a', 's', 'd'])} / ${keysRow(['up', 'left', 'down', 'right'])}`,
  SPACE: () => keyIcon('space'),
  'P / ESC': () => `${keyIcon('p')} / ${keyIcon('esc')}`,
  R: () => keyIcon('r'),
  M: () => keyIcon('m'),
};

/** Controls-table "keys" cell → icon HTML (touch gestures stay as text). */
export function controlKeysHtml(keys) {
  const fn = CONTROL_KEYS[String(keys).trim()];
  return fn ? fn() : String(keys);
}

/** Replace <kbd>…</kbd> (and a few plain tokens) with icon markup. */
export function enrichKeys(html) {
  return String(html).replace(/<kbd>([^<]*)<\/kbd>/gi, (_, raw) => {
    const id = resolveId(raw);
    if (id === 'wasd') return keysRow(['w', 'a', 's', 'd']);
    if (id === 'arrows') return keysRow(['up', 'left', 'down', 'right']);
    if (id && KEYS[id]) return keyIcon(id);
    return `<kbd>${raw}</kbd>`;
  });
}

function enrichValue(v) {
  if (typeof v === 'string') return enrichKeys(v);
  if (Array.isArray(v)) return v.map(enrichValue);
  if (v && typeof v === 'object') {
    const out = {};
    for (const [k, val] of Object.entries(v)) out[k] = enrichValue(val);
    return out;
  }
  return v;
}

/** Deep-walk copy blobs so every <kbd> becomes an icon. */
export function enrichCopy(obj) {
  return enrichValue(obj);
}
