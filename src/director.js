// EncounterDirector: runs a level's authored rounds. ROUND_ACTIVE -> (all enemies in both realms gone) -> round_cleared
// -> INTERMISSION -> next round, ... -> level_cleared. Every transition is guarded by `phase`, so each event fires once.
import * as THREE from 'three';
import { TUNING as T } from './tuning.js';
import { S, world } from './state.js';
import { spawnEnemy } from './entities.js';
import { emitEvent } from './sim/events.js';
import { scaleSpawns } from './difficulty.js';

export const director = { level: null, round: 0, phase: 'idle', waited: 0 };
export const roundsTotal = () => director.level?.rounds.length ?? 0;

export function resetDirector() { Object.assign(director, { level: null, round: 0, phase: 'idle', waited: 0 }); }
export function startLevel(level) {
  Object.assign(director, { level, round: 0, phase: 'idle', waited: 0 });
  startRound(0);
}

// Authored point, clamped into bounds and pushed out to at least `spawnMinDist` from the player (deterministic).
function spawnPoint([x, z]) {
  const pad = T.arena.enemyPad + 0.4, min = T.night.spawnMinDist;
  const clamp = p => { p.x = THREE.MathUtils.clamp(p.x, -T.arena.x + pad, T.arena.x - pad); p.y = THREE.MathUtils.clamp(p.y, -T.arena.z + pad, T.arena.z - pad); return p; };
  const p = clamp(new THREE.Vector2(x, z));
  if (p.distanceTo(S.pos) >= min) return p;
  const away = p.clone().sub(S.pos);
  if (away.lengthSq() < 1e-6) away.set(-S.pos.x || 1, -S.pos.y || 0);     // on top of the player: push toward centre
  clamp(p.copy(S.pos).addScaledVector(away.normalize(), min + 0.01));
  if (p.distanceTo(S.pos) < min) clamp(p.set(-p.x, -p.y));                  // pinned in a corner: mirror across centre
  return p;
}

function startRound(i) {
  director.round = i; director.phase = 'active'; director.waited = 0;
  const ids = scaleSpawns(director.level.rounds[i].spawns, i).map(sp => spawnEnemy({ wisp: sp.kind === 'wisp', kind: sp.kind, realm: sp.realm, pos: spawnPoint(sp.pos) }).id);
  emitEvent('round_started', { round: i + 1, total: roundsTotal(), ids });
}

// Returns 'complete' on the tick the final round is cleared, otherwise null.
export function updateDirector(dt) {
  if (director.phase === 'active') {
    if (world.enemies.length > 0) return null;
    emitEvent('round_cleared', { round: director.round + 1, total: roundsTotal() });
    if (director.round + 1 >= roundsTotal()) {
      director.phase = 'complete';
      emitEvent('level_cleared', { level: director.level.id });
      return 'complete';
    }
    director.phase = 'intermission'; director.waited = 0;
    emitEvent('intermission_started', { next: director.round + 2, seconds: T.night.intermission });
  } else if (director.phase === 'intermission') {
    director.waited += dt;
    if (director.waited >= T.night.intermission - 1e-9) startRound(director.round + 1);
  }
  return null;
}
export const inIntermission = () => director.phase === 'intermission';
