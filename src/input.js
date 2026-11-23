// Input: keyboard, floating-joystick touch controls with double-tap cross (and aim assist).
import * as THREE from 'three';
import { DASH_DISTANCE } from './config.js';
import { canvas, camera } from './render.js';
import { S, world, keys, touch } from './state.js';
import { Sfx } from './sfx.js';
import { hud, overlayAge } from './hud.js';
import { cross, startGame, pause, resume, togglePause, dismissTip } from './game.js';

window.addEventListener('keydown', e => {
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  if (e.repeat) return;
  Sfx.unlock();
  if (e.code === 'KeyM') { Sfx.toggleMute(); return; }
  if (/^(Shift|Control|Alt|Meta)/.test(e.code)) return;
  if (S.state === 'tutorial') { dismissTip(); return; }     // swallow the key so it can't also cross/move
  keys.add(e.code);
  if (S.state === 'playing') {
    if (e.code === 'Space') cross();
    if (e.code === 'KeyR') startGame();
    if (e.code === 'KeyP' || e.code === 'Escape') pause();
  } else if (S.state === 'paused') {
    if (e.code === 'KeyP' || e.code === 'Escape' || e.code === 'Enter') resume();
    if (e.code === 'KeyR') startGame();
  } else if (e.code === 'Enter' || e.code === 'Space' || e.code === 'KeyR') startGame();
});
window.addEventListener('keyup', e => keys.delete(e.code));
window.addEventListener('blur', () => { keys.clear(); if (!S.botInput) pause(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && !S.botInput) pause(); });
// touch: drag anywhere = floating joystick; double-tap anywhere = CROSS.
// Double-tapping on a dim ghost aims the dash straight at it; otherwise you dash the way you're facing.
const stick = document.getElementById('stick'), tapFx = document.getElementById('tapfx');
let stickId = null, stickO = null;
const TAP_MS = 230, TAP_MOVE = 16, DOUBLE_MS = 320, DOUBLE_DIST = 80;
const touchInfo = new Map(); // id -> { t, x, y, moved }
let lastTap = null;          // { t, x, y }
const raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2(), aimPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.7), hitP = new THREE.Vector3();
function screenToGround(cx, cy) {
  const r = canvas.getBoundingClientRect();
  ndc.set((cx - r.left) / r.width * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  return raycaster.ray.intersectPlane(aimPlane, hitP) ? new THREE.Vector2(hitP.x, hitP.z) : null;
}
function doubleTapCross(cx, cy) {
  // aim at a dim ghost if the double-tap landed on (or near) one in dash range
  const g = screenToGround(cx, cy);
  let aimed = false;
  if (g) {
    let best = null, bd = 2.2;
    for (const e of world.enemies) {
      if (e.realm === S.realm || e.spawn > 0) continue;
      const d = e.pos.distanceTo(g);
      if (d < bd && e.pos.distanceTo(S.pos) < DASH_DISTANCE + 2.5) { bd = d; best = e; }
    }
    if (best) { const to = best.pos.clone().sub(S.pos); if (to.lengthSq() > 0.01) { S.facing.copy(to.normalize()); aimed = true; } }
  }
  S.touchCross = !aimed; cross(); S.touchCross = false;
  hud.cross.classList.remove('press'); void hud.cross.offsetWidth; hud.cross.classList.add('press');
  tapFx.style.left = cx + 'px'; tapFx.style.top = cy + 'px';
  tapFx.classList.remove('go'); void tapFx.offsetWidth; tapFx.classList.add('go');
  tapFx.classList.toggle('spirit', S.realm === 1);
}
function onTouchStart(e) {
  Sfx.unlock();
  if (!document.body.classList.contains('touch')) document.body.classList.add('touch');
  if (e.target.closest && e.target.closest('#pausebtn')) return;
  e.preventDefault();
  if (S.state === 'tutorial') { dismissTip(); return; }
  if (S.state === 'paused') {
    // Touches on the pause menu are handled there; ignore the rest so we don't accidental-resume.
    if (e.target.closest && e.target.closest('#overlay.interactive, .menu-panel, #pausebtn')) return;
    return;
  }
  if (S.state !== 'playing') { if (overlayAge() > 0.6) startGame(); return; }
  const now = performance.now();
  for (const t of e.changedTouches) {
    // second tap of a double-tap: fire on touch-down for zero latency
    if (lastTap && now - lastTap.t < DOUBLE_MS && Math.hypot(t.clientX - lastTap.x, t.clientY - lastTap.y) < DOUBLE_DIST) {
      lastTap = null;
      touchInfo.set(t.identifier, { t: now, x: t.clientX, y: t.clientY, moved: true, consumed: true });
      doubleTapCross(t.clientX, t.clientY);
      continue;
    }
    touchInfo.set(t.identifier, { t: now, x: t.clientX, y: t.clientY, moved: false });
    if (stickId === null) {
      stickId = t.identifier; stickO = [t.clientX, t.clientY];
      stick.style.left = t.clientX + 'px'; stick.style.top = t.clientY + 'px';
      stick.style.setProperty('--dx', '0px'); stick.style.setProperty('--dy', '0px');
    }
  }
}
function onTouchMove(e) {
  e.preventDefault();
  for (const t of e.changedTouches) {
    const info = touchInfo.get(t.identifier);
    if (info && !info.moved && Math.hypot(t.clientX - info.x, t.clientY - info.y) > TAP_MOVE) info.moved = true;
    if (t.identifier !== stickId) continue;
    const dx = t.clientX - stickO[0], dy = t.clientY - stickO[1], l = Math.hypot(dx, dy);
    const R = 44;
    if (l > 8) stick.classList.add('on'); // only show the stick once it's actually a drag
    if (l > R * 1.6) { stickO[0] = t.clientX - dx / l * R * 1.6; stickO[1] = t.clientY - dy / l * R * 1.6; stick.style.left = stickO[0] + 'px'; stick.style.top = stickO[1] + 'px'; }
    touch.active = l > 8; touch.x = dx / Math.max(l, 1); touch.y = dy / Math.max(l, 1);
    touch.mag = Math.min(1, l / R);
    stick.style.setProperty('--dx', Math.min(l, R) * touch.x + 'px'); stick.style.setProperty('--dy', Math.min(l, R) * touch.y + 'px');
  }
}
function onTouchEnd(e) {
  const now = performance.now();
  for (const t of e.changedTouches) {
    const info = touchInfo.get(t.identifier); touchInfo.delete(t.identifier);
    if (info && !info.moved && !info.consumed && now - info.t < TAP_MS) lastTap = { t: now, x: t.clientX, y: t.clientY };
    if (t.identifier === stickId) { stickId = null; touch.active = false; stick.classList.remove('on'); }
  }
}
window.addEventListener('touchstart', onTouchStart, { passive: false });
window.addEventListener('touchmove', onTouchMove, { passive: false });
window.addEventListener('touchend', onTouchEnd); window.addEventListener('touchcancel', onTouchEnd);
function onPauseButton(e) {
  e.preventDefault();
  e.stopPropagation();
  Sfx.unlock();
  if (!document.body.classList.contains('touch')) document.body.classList.add('touch');
  if (S.state === 'tutorial') dismissTip();
  else togglePause();
}
// touchend fires reliably on mobile; click alone is easy to lose to drag/gesture handlers
hud.pause.addEventListener('click', onPauseButton);
hud.pause.addEventListener('touchend', onPauseButton, { passive: false });
