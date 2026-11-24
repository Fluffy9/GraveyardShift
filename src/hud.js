// DOM HUD: hearts, clock, lantern bar, realm tag, score, combo, toast/tutorial note, overlays, popups.
import * as THREE from 'three';
import { TOTAL_TIME, DASH_COOLDOWN, TIP_DISMISS_MS } from './config.js';
import { canvas, camera } from './render.js';
import { S } from './state.js';
import { copy, fmt, kbTc } from './copy.js';

const $ = id => document.getElementById(id);
export const hud = { hearts: $('hearts'), clock: $('clock'), phase: $('phase'), bar: $('barfill'), lantern: $('lanternbox'),
  realm: $('realm'), score: $('score'), combo: $('combo'), overlay: $('overlay'), note: $('note'), pops: $('pops'),
  pause: $('pausebtn'), cross: $('crossbtn') };

// ---------- overlays ----------
let overlayAt = 0;
export const overlayAge = () => (performance.now() - overlayAt) / 1000;
export function setOverlay(html, { interactive = false } = {}) {
  overlayAt = performance.now();
  hud.overlay.innerHTML = html || '';
  hud.overlay.classList.toggle('show', !!html);
  hud.overlay.classList.toggle('interactive', !!html && interactive);
  document.body.classList.toggle('menu', !!html);
}
export const stats = () => {
  const s = copy.stats;
  return `<div class="stats"><div><span>${s.score}</span><b>${S.score}</b></div><div><span>${s.souls}</span><b>${S.banished}</b></div><div><span>${s.bestChain}</span><b>x${S.maxCombo}</b></div><div><span>${s.highScore}</span><b>${S.best}</b></div></div>`;
};

// ---------- note: a timed toast, or a blocking tutorial tip (no timer, shows a continue prompt) ----------
let noteTimer = 0;
let tipPromptTimer = 0;
export function toast(html, secs = 4) {
  clearTimeout(tipPromptTimer);
  hud.note.innerHTML = html; hud.note.classList.add('show'); noteTimer = secs;
}
export function showTip(html) {
  const h = copy.hud;
  clearTimeout(tipPromptTimer);
  // Hold the continue prompt until dismiss is allowed so players don't mash through unread tips.
  hud.note.innerHTML = html + `<div class="blink tip-prompt" hidden>${kbTc(h.continueKey, h.continueTap, h.continueSuffix)}</div>`;
  hud.note.classList.add('show'); noteTimer = 0;
  tipPromptTimer = setTimeout(() => {
    const p = hud.note.querySelector('.tip-prompt');
    if (p) p.hidden = false;
  }, TIP_DISMISS_MS);
}
export function hideNote() {
  clearTimeout(tipPromptTimer);
  hud.note.classList.remove('show'); noteTimer = 0;
}
export function tickNote(dt) { if (noteTimer > 0 && (noteTimer -= dt) <= 0) hud.note.classList.remove('show'); }

// ---------- clock & phases ----------
export function clockText() {
  const mins = (TOTAL_TIME - S.timeLeft) / TOTAL_TIME * 180; // 9:00 PM -> 12:00 AM
  let h = 9 + Math.floor(mins / 60), m = Math.floor(mins % 60);
  const ap = h >= 12 ? 'AM' : 'PM'; if (h > 12) h -= 12;
  return `${h}:${String(m).padStart(2, '0')} ${ap}`;
}
const PHASES = copy.phases.map(p => [p.until, p.label]);

// ---------- world-anchored popups ----------
const v3 = new THREE.Vector3();
export function worldToScreen(x, y, z) {
  v3.set(x, y, z).project(camera);
  const r = canvas.getBoundingClientRect();
  return [r.left + (v3.x * .5 + .5) * r.width, r.top + (-v3.y * .5 + .5) * r.height];
}
export function popup(pos, html, big) {
  const el = document.createElement('div'); el.className = 'pop' + (big ? ' big' : ''); el.innerHTML = html;
  const [x, y] = worldToScreen(pos.x, 1.8, pos.y); el.style.left = x + 'px'; el.style.top = y + 'px';
  hud.pops.appendChild(el); setTimeout(() => el.remove(), 900);
}

// ---------- per-frame HUD refresh (DOM is only touched when a value changes) ----------
let lastHp = -1, lastSegs = -1, lastRealm = -1;
const spr = name => `<span class="spr-${name}"></span>`;
export function updateHud() {
  if (lastHp !== S.hp) {
    hud.hearts.innerHTML = [0, 1, 2].map(i => spr(i < S.hp ? 'heart' : 'heart_empty')).join('');
    if (lastHp > S.hp) hud.hearts.classList.remove('shake'), void hud.hearts.offsetWidth, hud.hearts.classList.add('shake');
    lastHp = S.hp;
  }
  hud.clock.textContent = clockText();
  hud.phase.textContent = PHASES.find(p => S.elapsed < p[0])[1];
  const ready = S.dashCd <= 0 && S.dashRemaining <= 0;
  const charge = 1 - S.dashCd / DASH_COOLDOWN;
  const segs = Math.round(6 * charge);   // whole pixel segments, not a smooth fill
  if (segs !== lastSegs) { lastSegs = segs; hud.bar.innerHTML = Array.from({ length: 6 }, (_, i) => spr(i < segs ? 'seg_on' : 'seg_off')).join(''); }
  hud.lantern.classList.toggle('ready', ready);
  hud.cross.classList.toggle('ready', ready);
  hud.cross.style.setProperty('--cd', charge * 360 + 'deg');
  hud.cross.classList.toggle('spirit', S.realm === 1);
  if (lastRealm !== S.realm) { lastRealm = S.realm; hud.realm.innerHTML = spr(S.realm ? 'tag_spirit' : 'tag_living'); }
  hud.score.textContent = String(S.score).padStart(6, '0');
  hud.combo.textContent = fmt(copy.hud.chain, { n: S.combo });
  hud.combo.classList.toggle('show', S.combo > 1);
}
