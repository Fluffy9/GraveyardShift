// Title screen and the play-style (mode) select screen. TITLE --Enter/tap--> SELECT --Enter/click--> run.
// The select screen is drawn on the HUD pixel grid (--hs) from hud/ui sprites (tools/build_mode_select.py).
import { S } from './state.js';
import { setOverlay } from './hud.js';
import { copy, fmt, kbTc } from './copy.js';
import { startGame } from './game.js';
import { Sfx } from './sfx.js';
import { LEVEL1 } from './levels/level1.js';
import { loadBest, loadMode, saveMode, loadTier, saveTier } from './progress.js';
import { setTier } from './difficulty.js';

// Display order on screen. `mode` is the run mode passed to startGame; locked entries can't be started.
export const MODES = [
  { id: 'night', mode: 'night', art: 'mode_night' },
  { id: 'quick', mode: null, art: 'mode_quick', locked: true },   // BUILD_SPEC "Quick Shift": not built yet
  { id: 'endless', mode: 'endless', art: 'mode_overtime' },
];

let sel = 0;              // highlighted card index
let touchArmed = -1;      // touch: card index tapped once (second tap starts)
let tier = 3;             // chosen difficulty tier 1..5 (Night Shift only; remembered)

// ---------------------------------------------------------------- title
const TITLE_HTML = () => {
  const t = copy.titleScreen;
  const best = loadBest('endless');
  return `
    <span class="ui-corner_l ms-corner l"></span><span class="ui-corner_r ms-corner r"></span>
    <span class="spr-logo title-logo" role="img" aria-label="${t.ariaLabel}"></span>
    <div class="kit-head title-rule"><span class="kit-divider"></span><span class="ui-pip"></span><span class="kit-divider"></span></div>
    <p class="flavor">${t.flavor}</p>
    <div class="howto title-chips">
      <span class="kit-tile kb">${t.moveKb}</span><span class="kit-tile kb">${t.crossKb}</span>
      <span class="kit-tile tc">${t.moveTc}</span><span class="kit-tile tc">${t.crossTc}</span>
      <div class="sub">${t.howto}<span class="tc"><br>${t.howtoTouch}</span>${t.howtoEnd ? `<br>${t.howtoEnd}` : ''}</div>
    </div>
    <button type="button" class="kit-btn on title-start" data-start><span class="title-start-text">${kbTc(t.startKb, t.startTc, t.startSuffix)}</span></button>
    <p class="tiny"><span class="kb">${t.hints}</span>${best ? ` | ${fmt(t.best, { n: best })}` : ''}</p>`;
};
export function showTitle() {
  S.state = 'title';
  Sfx.theme(true);
  setOverlay(TITLE_HTML(), { interactive: true, cls: 'title' });
  root().querySelector('[data-start]')?.addEventListener('click', () => { Sfx.unlock(); openModeSelect(); });
}

// ---------------------------------------------------------------- select screen
function cardHtml(m, i) {
  const c = copy.modeSelect.modes[m.id];
  const vars = { rounds: LEVEL1.rounds.length, best: loadBest(m.mode || 'endless') || '-' };
  const lines = c.lines.map(([icon, text]) => `<span class="ms-line"><span class="ui-icon_${icon}"></span>${fmt(text, vars)}</span>`).join('');
  const art = m.locked ? `${m.art}_locked` : m.art;
  return `<button type="button" class="ms-card${m.locked ? ' locked' : ''}" data-i="${i}" role="option" aria-label="${c.name}${m.locked ? ` (${copy.modeSelect.locked})` : ''}">
      <span class="ms-pip t"></span><span class="ms-pip b"></span><span class="ms-pip l"></span><span class="ms-pip r"></span>
      <span class="ui-spark ms-spark a"></span><span class="ui-spark_s ms-spark b"></span>
      <span class="ms-art"><span class="ui-${art}"></span></span>
      <span class="ms-name">${c.name}</span>
      <span class="ms-rule"><span class="ui-${m.locked ? 'pip_lock' : 'pip'}"></span></span>
      ${m.locked ? `<span class="ms-line ms-locked"><span class="ui-icon_lock"></span>${copy.modeSelect.locked}</span>` : lines}
    </button>`;
}
function selectHtml() {
  const t = copy.modeSelect;
  return `
    <span class="ui-corner_l ms-corner l"></span><span class="ui-corner_r ms-corner r"></span>
    <div class="ms-head"><span class="ms-divider"></span><h2 class="ms-title">${t.title}</h2><span class="ms-divider"></span></div>
    <div class="ms-cards" role="listbox" aria-label="${t.title}">${MODES.map(cardHtml).join('')}</div>
    <div class="ms-bar">
      <button type="button" class="ms-arrow l" data-step="-1" aria-label="Previous"><span class="ui-arrow_l"></span></button>
      <p class="ms-desc"></p>
      <button type="button" class="ms-arrow r" data-step="1" aria-label="Next"><span class="ui-arrow_r"></span></button>
    </div>
    <div class="ms-diff" role="group" aria-label="${t.difficulty.label}">
      <button type="button" class="ms-darrow l" data-tier="-1" aria-label="Easier"><span class="ui-arrow_l"></span></button>
      <span class="ms-diff-label">${t.difficulty.label}</span>
      <span class="ms-diff-name"></span>
      <span class="ms-diff-pips">${[1, 2, 3, 4, 5].map(() => '<span class="ui-dot_off"></span>').join('')}</span>
      <button type="button" class="ms-darrow r" data-tier="1" aria-label="Harder"><span class="ui-arrow_r"></span></button>
      <span class="ms-hint kb ms-diff-keys">${t.difficulty.keys}</span>
    </div>
    <div class="ms-foot">
      <span class="ms-hint kb"><span class="spr-key_esc"></span> ${t.back}</span>
      <span class="ms-dots">${MODES.map(() => '<span class="ui-dot_off"></span>').join('')}</span>
      <span class="ms-hint kb"><span class="spr-key_enter"></span> ${t.clockIn}</span>
      <span class="ms-hint tc ms-taphint"></span>
    </div>`;
}

const root = () => document.getElementById('overlay');
function refresh() {
  const el = root(); if (!el) return;
  el.querySelectorAll('.ms-card').forEach((c, i) => {
    c.classList.toggle('sel', i === sel);
    c.setAttribute('aria-selected', i === sel ? 'true' : 'false');
  });
  el.querySelectorAll('.ms-dots > span').forEach((d, i) => { d.className = i === sel ? 'ui-dot_on' : 'ui-dot_off'; });
  const m = MODES[sel], t = copy.modeSelect;
  const armed = touchArmed === sel && !m.locked;
  // on touch, the armed card's prompt replaces the description (the footer is hidden on short screens)
  el.querySelector('.ms-desc').textContent = armed && document.body.classList.contains('touch') ? t.tapAgain : t.modes[m.id].desc;
  el.querySelector('.ms-taphint').textContent = armed ? t.tapAgain : t.tapCard;
  // difficulty applies to Night Shift only; the row keeps its space (hidden) on the other cards
  const d = el.querySelector('.ms-diff'), usesTier = m.mode === 'night';
  d.classList.toggle('off', !usesTier);
  d.querySelector('.ms-diff-name').textContent = t.difficulty.tiers[tier - 1];
  d.querySelectorAll('.ms-diff-pips > span').forEach((p, i) => { p.className = i < tier ? 'ui-dot_on' : 'ui-dot_off'; });
  fit();
}
// Size flags in art pixels: narrow screens show one card at a time; short ones drop the footer.
export function fit() {
  const el = root(); if (!el || !el.classList.contains('modesel')) return;
  const hs = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hs')) || 2;
  const aw = window.innerWidth / hs, ah = window.innerHeight / hs;
  el.classList.toggle('ms-narrow', aw < 336);
  el.classList.toggle('ms-short', ah < 212);
  el.classList.toggle('ms-tiny', ah < 206);   // landscape phones: drop the heading to make room for the difficulty row
  el.style.setProperty('--bgk', String(Math.max(1, Math.ceil(Math.max(aw / 480, ah / 270)))));
}
window.addEventListener('resize', fit);

export function openModeSelect() {
  S.state = 'select';
  Sfx.theme(true);
  const remembered = loadMode();
  const idx = MODES.findIndex(m => m.mode && m.mode === (remembered || 'night'));
  sel = idx >= 0 ? idx : 0;
  touchArmed = -1;
  tier = loadTier();
  setOverlay(selectHtml(), { interactive: true, cls: 'modesel' });
  const el = root();
  el.querySelectorAll('.ms-card').forEach(c => {
    const i = +c.dataset.i;
    c.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse' && sel !== i) { sel = i; Sfx.blip(); refresh(); } });
    c.addEventListener('click', e => choose(i, e.pointerType || 'mouse'));
  });
  el.querySelectorAll('.ms-arrow').forEach(a => a.addEventListener('click', () => move(+a.dataset.step)));
  el.querySelectorAll('.ms-darrow').forEach(a => a.addEventListener('click', () => stepTier(+a.dataset.tier)));
  refresh();
}
export function move(step) {
  sel = (sel + step + MODES.length) % MODES.length;
  touchArmed = -1;
  Sfx.blip(step > 0); refresh();
}
export function stepTier(d) {
  if (MODES[sel].mode !== 'night') return;
  const n = Math.min(5, Math.max(1, tier + d));
  if (n === tier) { Sfx.deny(); return; }
  tier = n; saveTier(tier); Sfx.blip(d > 0); refresh();
}
export const selectedTier = () => tier;
// Click: mouse starts at once (hover already highlighted it). Touch: first tap highlights, second starts.
function choose(i, pointerType) {
  if (pointerType === 'touch' && (sel !== i || touchArmed !== i)) {
    if (sel !== i) Sfx.blip();
    sel = i; touchArmed = i; refresh(); return;
  }
  sel = i; confirm();
}
export function confirm() {
  const m = MODES[sel];
  if (m.locked) {
    Sfx.deny();
    const c = root()?.querySelector(`.ms-card[data-i="${sel}"]`);
    if (c) { c.classList.remove('nope'); void c.offsetWidth; c.classList.add('nope'); }
    return false;
  }
  saveMode(m.mode);
  setTier(m.mode === 'night' ? tier : 3);          // Overtime always plays the untouched numbers
  startGame({ mode: m.mode });
  return true;
}
export const selectedMode = () => MODES[sel];

// Keyboard while S.state === 'select'.
export function selectKey(code) {
  if (code === 'ArrowLeft' || code === 'KeyA') move(-1);
  else if (code === 'ArrowRight' || code === 'KeyD') move(1);
  else if (code === 'ArrowUp' || code === 'KeyW') stepTier(1);
  else if (code === 'ArrowDown' || code === 'KeyS') stepTier(-1);
  else if (code === 'Enter' || code === 'Space') confirm();
  else if (code === 'Escape' || code === 'Backspace') showTitle();
}
