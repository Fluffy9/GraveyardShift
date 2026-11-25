// GRAVEYARD SHIFT - minimal playable web demo.
// Models sculpted with ink-studio and exported to GLB; rendered with three.js at a low-res buffer, nearest upscale.
import * as THREE from 'three';
import { renderer, rt, postScene, postCam, scene, camera } from './render.js';
import { loadAll } from './assets.js';
import { buildLevel, buildPlayer } from './level.js';
import { buildSets, showSet } from './sets.js';
import { S, world, isFrozen } from './state.js';
import { spawnEnemy, spawnProjectile, removeEnemy } from './entities.js';
import { update, startGame, finish, cross, dismissTip, setNextSeed } from './game.js';
import { campaign, chooseRelic, loadLevel, retryLevel, snapshot as campaignSnap } from './campaign.js';
import { director } from './director.js';
import { LEVEL1 } from './levels/level1.js';
import { TUNING } from './tuning.js';
import { clock, createStepper } from './sim/clock.js';
import { createRng, seedRun } from './sim/rng.js';
import { on, history } from './sim/events.js';
import { updateVisuals } from './visuals.js';
import { updateHud, tickNote, setOverlay, worldToScreen } from './hud.js';
import { preloadMenuClips } from './menu.js';
import { Sfx } from './sfx.js';
import { DASH_DISTANCE, ARENA_X, ARENA_Z } from './config.js';
import { copy, fmt, kbTc, applyShellCopy } from './copy.js';
import './input.js';
import { showTitle, openModeSelect, move as msMove, confirm as msConfirm, selectedMode, MODES } from './modeselect.js';

// ---------- main loop ----------
// Live play: real frame time feeds a fixed-step stepper, so gameplay runs in constant 1/60 s slices regardless of display
// refresh rate; visuals and rendering still run once per displayed frame. Tests / GIF capture use manual stepping instead.
let last = performance.now();
let manual = false, simTime = 0;
const stepper = createStepper();
// One simulation step. Returns the effective dt (hit-stop slows both the sim and the visuals, as before).
function simStep(dt) {
  clock.tick++;
  if (S.state === 'playing') {
    if (S.hitStop > 0) { S.hitStop -= dt; dt *= TUNING.hitStop.timeScale; }
    update(dt);
    if (S.state === 'playing') { updateHud(); tickNote(dt); }
    else if (S.state === 'tutorial') updateHud();   // a tip can open on a run's first tick: keep the HUD current under it
  }
  return dt;
}
function render(dt, t) {
  updateVisuals(isFrozen() ? 0 : dt, t);
  renderer.setRenderTarget(rt); renderer.render(scene, camera);
  renderer.setRenderTarget(null); renderer.render(postScene, postCam);
}
function frame(now) {
  requestAnimationFrame(frame);
  if (manual) return;
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  const slow = S.state === 'playing' && S.hitStop > 0;          // hit-stop slow-mo also applies to visuals
  stepper.feed(dt, simStep);
  render(slow ? dt * TUNING.hitStop.timeScale : dt, now / 1000);
}
// manual = deterministic stepping: each sub-step is one simulation step of dt/sub (any dt) plus a render.
// Simulation only (no visuals, no render): fast deterministic stepping for tests. Gameplay state never depends on rendering.
function stepSim(dt, n = 1) { manual = true; for (let i = 0; i < n; i++) simStep(dt); }
function stepManual(dt, sub = 4) { manual = true; for (let i = 0; i < sub; i++) { simTime += dt / sub; render(simStep(dt / sub), simTime); } }

// ---------- boot ----------
(async () => {
  applyShellCopy();
  await Promise.all([loadAll(), Sfx.preloadMusic()]);
  buildLevel(); buildSets(); buildPlayer();
  // title scene: a few idle ghosts for vibes
  spawnEnemy({ wisp: false, realm: 0, pos: new THREE.Vector2(-3.5, -2) });
  spawnEnemy({ wisp: false, realm: 1, pos: new THREE.Vector2(3.8, -3.2) });
  spawnEnemy({ wisp: true, realm: 1, pos: new THREE.Vector2(6, 1.5) });
  world.enemies.forEach(e => e.spawn = 0);
  showTitle();
  document.body.classList.add('ready');
  preloadMenuClips();
  updateHud();
  requestAnimationFrame(frame);
  // test / GIF-capture hooks
  window.__GS = { S, get enemies() { return world.enemies; }, get projectiles() { return world.projectiles; },
    startGame, finish, cross, sfx: Sfx, stepManual, stepSim, dismissTip, director, LEVEL1,
    campaign, chooseRelic, loadLevel, retryLevel, campaignSnap,
    modeSelect: { open: openModeSelect, move: msMove, confirm: msConfirm, selected: () => selectedMode().id, MODES, showTitle }, TUNING, events: { history, on }, setNextSeed,
    sim: { createStepper, createRng, seedRun, tick: () => clock.tick }, DASH_DISTANCE, ARENA_X, ARENA_Z, toScreen: (x, z) => worldToScreen(x, 0.9, z),
    // deterministic-test helpers: place an active (already-spawned) enemy / projectile at exact coordinates
    addEnemy: (x, z, realm, wisp = false) => { const e = spawnEnemy({ wisp, realm, pos: new THREE.Vector2(x, z) }); e.spawn = 0; return e; },
    clearEnemies: () => [...world.enemies].forEach(removeEnemy),
    removeEnemies: pred => [...world.enemies].filter(pred).forEach(removeEnemy),
    addProjectile: (x, z, dx, dz, realm) => spawnProjectile(new THREE.Vector2(x, z), new THREE.Vector2(dx, dz), realm) };
})();
