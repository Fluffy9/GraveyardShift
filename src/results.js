// Shift Complete / Shift Failed results panel, built on the shared pixel UI kit (.kit-*).
// Buttons: [again] (highlighted by default) and [change shift]. Keys: Left/Right pick, Enter/Space confirm,
// R replays, Esc changes shift. Taps outside the buttons replay, as before.
import { S } from './state.js';
import { setOverlay } from './hud.js';
import { copy, fmt } from './copy.js';
import { director, roundsTotal } from './director.js';

let sel = 0;              // 0 = again, 1 = change shift
let actions = { again: () => {}, modes: () => {} };

const tile = (icon, label, value) => `
  <div class="kit-tile res-stat">
    <span class="${icon}"></span>
    <span class="res-label">${label}</span>
    <b class="res-value">${value}</b>
  </div>`;

function modeChip() {
  const name = copy.modeSelect.modes[S.mode === 'night' ? 'night' : 'endless'].name;
  const extra = S.mode === 'night' && director.level ? ` - ${fmt(copy.rounds.label, { n: director.round + 1, total: roundsTotal() })}` : '';
  return `<span class="kit-tab res-mode">${name}${extra}</span>`;
}

// won: bool; flavor: html line; newBest: score beat the stored best for this mode
export function showResults({ won, flavor, newBest, again, modes }) {
  actions = { again, modes }; sel = 0;
  const t = won ? copy.win : copy.lose, st = copy.results, ms = copy.modeSelect;
  const flag = newBest ? `<span class="kit-tab on res-flag">${copy.results.newBest}</span>` : '';
  setOverlay(`
    <div class="kit-panel res-panel${won ? ' hl' : ''}" role="dialog" aria-label="${t.title}">
      <div class="kit-head"><span class="kit-divider"></span><h2 class="res-title${won ? '' : ' bad'}">${t.title}</h2><span class="kit-divider"></span></div>
      <div class="res-chips">${modeChip()}${flag}</div>
      <p class="res-flavor">${flavor}</p>
      <div class="res-stats">
        ${tile('ui-icon_chart', st.score, S.score)}
        ${tile('spr-icon_ghost', st.souls, S.banished)}
        ${tile('ui-icon_lightning', st.chain, `x${S.maxCombo}`)}
        ${tile('ui-icon_trophy', st.best, S.best)}
      </div>
      <div class="res-actions">
        <button type="button" class="kit-btn" data-res="again"><span class="kb"><span class="spr-key_enter"></span></span>${t.againSuffix}</button>
        <button type="button" class="kit-btn" data-res="modes"><span class="kb"><span class="spr-key_esc"></span></span>${ms.change}</button>
      </div>
    </div>`, { interactive: true, cls: 'results' });
  document.querySelectorAll('[data-res]').forEach((b, i) => {
    b.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { sel = i; mark(); } });
    b.addEventListener('click', () => (b.dataset.res === 'again' ? actions.again() : actions.modes()));
  });
  mark(); fitResults();
}
// Short screens (e.g. 640x360): drop the flavor line, put both buttons on one row without key icons.
export function fitResults() {
  const p = document.querySelector('.res-panel'); if (!p) return;
  p.classList.remove('compact');
  if (p.getBoundingClientRect().height > window.innerHeight - 8) p.classList.add('compact');
}
window.addEventListener('resize', fitResults);
function mark() { document.querySelectorAll('[data-res]').forEach((b, i) => b.classList.toggle('on', i === sel)); }
// Keyboard on a results screen. Returns true if handled.
export function resultsKey(code) {
  if (code === 'ArrowLeft' || code === 'ArrowRight' || code === 'KeyA' || code === 'KeyD' || code === 'Tab') { sel = 1 - sel; mark(); return true; }
  if (code === 'Enter' || code === 'Space') { (sel === 0 ? actions.again : actions.modes)(); return true; }
  if (code === 'KeyR') { actions.again(); return true; }
  if (code === 'Escape') { actions.modes(); return true; }
  return false;
}
