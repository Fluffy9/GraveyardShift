// The bag: a pause-style menu listing the five found items (3 of each). Number keys 1-5 also use an item straight from play.
import { S } from './state.js';
import { copy } from './copy.js';
import { setOverlay } from './hud.js';
import { loot, ITEM_ORDER, useItem } from './loot.js';
import { emitEvent } from './sim/events.js';
import { TUNING } from './tuning.js';
import { isTouchUI } from './config.js';

let sel = 0;

function render() {
  const L = copy.bag;
  const rows = ITEM_ORDER.map((id, i) => {
    const n = loot.inv[id], it = copy.items[id];
    return `<button type="button" class="kit-btn bag-row${i === sel ? ' on' : ''}" data-item="${id}"${n ? '' : ' disabled'}>
      <span class="bag-n">${i + 1}</span><span class="bag-txt">${it.name}</span><b class="bag-c">${n}/${TUNING.items.cap}</b></button>`;
  }).join('');
  setOverlay(`
    <div class="kit-panel res-panel compact bag-panel" role="dialog" aria-label="${L.title}">
      <div class="kit-head"><span class="kit-divider"></span><h2>${L.title}</h2><span class="kit-divider"></span></div>
      <p class="bag-desc" id="bagdesc">${copy.items[ITEM_ORDER[sel]].desc}</p>
      <div class="res-actions bag-list">${rows}<button type="button" class="kit-btn ghost bag-close" data-bag-close>${L.close}</button></div>
      <p class="tiny menu-hint">${isTouchUI() ? L.hintTc : L.hint}</p>
    </div>`, { interactive: true, cls: 'results' });
  document.querySelectorAll('[data-item]').forEach(b => {
    b.addEventListener('click', () => use(b.dataset.item));
    b.addEventListener('mouseenter', () => { const el = document.getElementById('bagdesc'); if (el) el.textContent = copy.items[b.dataset.item].desc; });
  });
  document.querySelector('[data-bag-close]')?.addEventListener('click', closeBag);
}
export function openBag() {
  if (S.state !== 'playing') return false;
  S.state = 'bag';
  sel = Math.max(0, ITEM_ORDER.findIndex(id => loot.inv[id] > 0));
  render(); emitEvent('bag_opened', {});
  return true;
}
export function closeBag() {
  if (S.state !== 'bag') return false;
  S.state = 'playing'; setOverlay(null); return true;
}
function use(id) {
  if (!(loot.inv[id] > 0)) return;
  closeBag(); useItem(id);
}
export function bagKey(code) {
  if (code === 'Escape' || code === 'KeyI' || code === 'Tab' || code === 'KeyP') return closeBag();
  if (code === 'ArrowUp' || code === 'KeyW') { sel = (sel + ITEM_ORDER.length - 1) % ITEM_ORDER.length; render(); return; }
  if (code === 'ArrowDown' || code === 'KeyS') { sel = (sel + 1) % ITEM_ORDER.length; render(); return; }
  if (code === 'Enter' || code === 'Space') return use(ITEM_ORDER[sel]);
  const m = /^Digit([1-5])$/.exec(code); if (m) use(ITEM_ORDER[+m[1] - 1]);
}
