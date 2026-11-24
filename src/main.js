// GRAVEYARD SHIFT - minimal playable web demo.
// Models sculpted with ink-studio and exported to GLB; rendered with three.js at a low-res buffer, nearest upscale.
import * as THREE from 'three';
import { renderer, rt, postScene, postCam, scene, camera } from './render.js';
import { loadAll } from './assets.js';
import { buildLevel, buildPlayer } from './level.js';
import { S, world, isFrozen } from './state.js';
import { spawnEnemy, spawnProjectile, removeEnemy } from './entities.js';
import { update, startGame, cross, dismissTip } from './game.js';
import { updateVisuals } from './visuals.js';
import { updateHud, tickNote, setOverlay, worldToScreen } from './hud.js';
import { preloadMenuClips } from './menu.js';
import { DASH_DISTANCE, ARENA_X, ARENA_Z } from './config.js';
import { copy, fmt, kbTc, applyShellCopy } from './copy.js';
import './input.js';

// ---------- main loop ----------
let last = performance.now();
let manual = false, simTime = 0;    // manual = deterministic stepping for tests / GIF capture
function frame(now) {
  requestAnimationFrame(frame);
  if (manual) return;
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  tick(dt, now / 1000);
}
function tick(dt, t) {
  if (S.state === 'playing') {
    if (S.hitStop > 0) { S.hitStop -= dt; dt *= 0.08; }
    update(dt);
    if (S.state === 'playing') { updateHud(); tickNote(dt); }
  }
  updateVisuals(isFrozen() ? 0 : dt, t);
  renderer.setRenderTarget(rt); renderer.render(scene, camera);
  renderer.setRenderTarget(null); renderer.render(postScene, postCam);
}
function stepManual(dt, sub = 4) { manual = true; for (let i = 0; i < sub; i++) { simTime += dt / sub; tick(dt / sub, simTime); } }

// ---------- boot ----------
const TITLE_HTML = () => {
  const t = copy.titleScreen;
  const best = S.best ? ` | ${fmt(t.best, { n: S.best })}` : '';
  return `
    <span class="spr-logo title-logo" role="img" aria-label="${t.ariaLabel}"></span>
    <p class="flavor">${t.flavor}</p>
    <div class="howto">
      <div class="kb">${t.moveKb}</div>
      <div class="kb">${t.crossKb}</div>
      <div class="tc">${t.moveTc}</div>
      <div class="tc">${t.crossTc}</div>
      <div class="sub">${t.howto}<span class="tc"><br>${t.howtoTouch}</span><br>${t.howtoEnd}</div>
    </div>
    <p class="blink">${kbTc(t.startKb, t.startTc, t.startSuffix)}</p>
    <p class="tiny"><span class="kb">${t.hints}</span>${best}</p>`;
};

(async () => {
  try { S.best = +localStorage.getItem('gs_best') || 0; } catch (e) {}
  applyShellCopy();
  await loadAll();
  buildLevel(); buildPlayer();
  // title scene: a few idle ghosts for vibes
  spawnEnemy({ wisp: false, realm: 0, pos: new THREE.Vector2(-3.5, -2) });
  spawnEnemy({ wisp: false, realm: 1, pos: new THREE.Vector2(3.8, -3.2) });
  spawnEnemy({ wisp: true, realm: 1, pos: new THREE.Vector2(6, 1.5) });
  world.enemies.forEach(e => e.spawn = 0);
  setOverlay(TITLE_HTML());
  document.body.classList.add('ready');
  preloadMenuClips();
  updateHud();
  requestAnimationFrame(frame);
  // test / GIF-capture hooks
  window.__GS = { S, get enemies() { return world.enemies; }, get projectiles() { return world.projectiles; },
    startGame, cross, stepManual, dismissTip, DASH_DISTANCE, ARENA_X, ARENA_Z, toScreen: (x, z) => worldToScreen(x, 0.9, z),
    // deterministic-test helpers: place an active (already-spawned) enemy / projectile at exact coordinates
    addEnemy: (x, z, realm, wisp = false) => { const e = spawnEnemy({ wisp, realm, pos: new THREE.Vector2(x, z) }); e.spawn = 0; return e; },
    clearEnemies: () => [...world.enemies].forEach(removeEnemy),
    addProjectile: (x, z, dx, dz, realm) => spawnProjectile(new THREE.Vector2(x, z), new THREE.Vector2(dx, dz), realm) };
})();
