// Overtime: an endless shift that drifts between the six locations in an order the player can't predict.
// A shuffled bag of locations (own rng stream, so gameplay rng is untouched) is dealt out; the first stop is always the Old Churchyard.
// Each stop lasts 45-75 s, with a warning before the world shifts. A shift clears the floor, moves the player to the new start point and
// gives a short grace period. The clock is atmospheric only: the run ends when the player falls.
import { LEVELS } from './levels/registry.js';
import { TUNING as T } from './tuning.js';
import { S, world } from './state.js';
import { createRng } from './sim/rng.js';
import { setStage } from './stage.js';
import { showSet } from './sets.js';
import { clearLootField } from './loot.js';
import { removeEnemy } from './entities.js';
import { scene } from './render.js';
import { copy, fmt } from './copy.js';

export const overtime = { on: false, loc: null, left: 0, warned: false, bag: [], rng: null, shifts: 0 };

const OT = { first: [45, 60], span: [45, 75], warn: 4, grace: 1.5 };
export const OT_TUNING = OT;

function deal() {
  const ids = LEVELS.map(l => l.id);
  for (let i = ids.length - 1; i > 0; i--) { const j = overtime.rng.int(i + 1); [ids[i], ids[j]] = [ids[j], ids[i]]; }
  // never repeat the stop we're standing in back to back
  if (ids[0] === overtime.loc?.id) ids.push(ids.shift());
  overtime.bag = ids;
}
const pickDuration = ([a, b]) => a + overtime.rng() * (b - a);

export function resetOvertime(seed) {
  Object.assign(overtime, { on: false, loc: null, left: 0, warned: false, bag: [], shifts: 0, rng: createRng((seed ^ 0x07e57a1) >>> 0) });
}

export function beginOvertime() {
  overtime.on = true;
  enter(LEVELS[0], true);
  overtime.left = pickDuration(OT.first);
}
export function endOvertime() { overtime.on = false; overtime.loc = null; setStage(null); }

function enter(lv, first = false) {
  overtime.loc = lv; overtime.warned = false;
  setStage(lv); showSet(lv.id);
  if (!first) {
    [...world.enemies].forEach(removeEnemy);
    for (const p of world.projectiles) scene.remove(p.node);
    world.projectiles = [];
    clearLootField();
    S.pos.set(lv.start[0], lv.start[1]); S.facing.set(lv.facing[0], lv.facing[1]);
    S.realm = 0; S.dashRemaining = 0; S.dashCd = 0; S.dashHit.clear();
    S.invuln = Math.max(S.invuln, OT.grace); S.spawnClock = 1.2; S.shake = Math.max(S.shake, 0.5);
    overtime.shifts++;
  }
}

// Returns a toast line when the player should be told something, otherwise null.
export function tickOvertime(dt) {
  if (!overtime.on) return null;
  overtime.left -= dt;
  if (!overtime.warned && overtime.left <= OT.warn) {
    overtime.warned = true; S.shake = Math.max(S.shake, 0.2);
    if (!overtime.bag.length) deal();
    const next = LEVELS.find(l => l.id === overtime.bag[0]);
    return fmt(copy.overtime.warn, { place: next.name });
  }
  if (overtime.left <= 0) {
    if (!overtime.bag.length) deal();
    const id = overtime.bag.shift(), lv = LEVELS.find(l => l.id === id);
    enter(lv);
    overtime.left = pickDuration(OT.span);
    return fmt(copy.overtime.arrive, { place: lv.name });
  }
  return null;
}
