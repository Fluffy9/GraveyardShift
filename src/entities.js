// Ghost, wisp and projectile spawning.
import * as THREE from 'three';
import { COL, ARENA_X, ARENA_Z } from './config.js';
import { scene } from './render.js';
import { PROTOS, cloneMaterials, addOutline, blob } from './assets.js';
import { emit } from './particles.js';
import { S, world } from './state.js';
import { Sfx } from './sfx.js';
import { TUNING } from './tuning.js';
import { rng, fx } from './sim/rng.js';
import { emitEvent } from './sim/events.js';
import { SPIRITS } from './spirits.js';
import { blocked } from './stage.js';

// enemy kinds drawn with a spirit rig (src/spirits.js) instead of the wanderer / wisp models
export const RIGGED = { moth: 'moth', bell: 'bell', bloom: 'bloom', choir: 'choir' };

let nextId = 1;   // stable entity ids, reset each run
export const resetIds = () => { nextId = 1; };

const REALM_TINT = [new THREE.Color(0xffe2b8), new THREE.Color(0xc9b2ff)];
function makeRealmRing(realm) {
  const g = new THREE.RingGeometry(0.62, 0.78, 16);
  const m = new THREE.MeshBasicMaterial({ color: realm ? COL.lavender : COL.amber, transparent: true, depthWrite: false });
  const r = new THREE.Mesh(g, m); r.rotation.x = -Math.PI / 2; r.position.y = 0.045; return r;
}
function spawnEnemy(opts = {}) {
  const isWisp = opts.wisp ?? (S.elapsed > TUNING.pacing.wispAfter && rng.chance(TUNING.pacing.wispChance));
  const realm = opts.realm ?? (rng.chance(0.5) ? 0 : 1);
  let pos = opts.pos;
  if (!pos) {
    for (let tries = 0; tries < 20; tries++) {
      const edge = rng.int(4);
      pos = new THREE.Vector2(rng.range(-1, 1) * (ARENA_X - 1), rng.range(-1, 1) * (ARENA_Z - 0.5));
      if (edge === 0) pos.x = -ARENA_X + 0.8; else if (edge === 1) pos.x = ARENA_X - 0.8;
      else if (edge === 2) pos.y = -ARENA_Z + 0.6; else pos.y = ARENA_Z - 0.6;
      if (pos.distanceTo(S.pos) > TUNING.enemy.spawnMinDist && !blocked(pos, realm, 0.5)) break;
    }
  }
  const kind = opts.kind && RIGGED[opts.kind] ? opts.kind : (isWisp ? 'wisp' : 'wanderer');
  const node = new THREE.Group();
  let rig = null, body;
  if (RIGGED[kind]) { rig = SPIRITS[RIGGED[kind]].build(n => PROTOS[n].clone(true), fx() * 20); body = cloneMaterials(rig.root); }
  else body = cloneMaterials(PROTOS[isWisp ? 'wisp' : 'wanderer'].clone(true));
  body.traverse(o => { if (o.isMesh) { o.castShadow = false; o.material.transparent = true; } });
  if (!isWisp) body.scale.setScalar(1.0);
  node.add(body);
  const outline = addOutline(body);
  const ring = makeRealmRing(realm); node.add(ring);
  if (!rig) { const sh = blob(1.4); node.add(sh); }
  scene.add(node);
  const mats = []; body.traverse(o => { if (o.isMesh && !o.userData.outline && o.material.emissive) mats.push({ m: o.material, base: o.material.color.clone(), em: o.material.emissive.clone() }); });
  const e = { id: nextId++, node, body, outline, ring, mats, pos, realm, wisp: isWisp, shoot: 1.2 + rng() * 1.1, bob: fx() * 6.28,
    spawn: TUNING.enemy.spawnWindup, dead: false, targeted: false, vis: -1, charge: 0,
    kind, rig, shield: kind === 'choir' ? TUNING.spirits.choir.shield : 0, pulse: null, zig: kind === 'moth' ? rng() * 6.28 : 0 };
  if (kind === 'bell') e.shoot = 1.5 + rng() * 1.2;
  if (kind === 'bloom') e.shoot = 1.0 + rng() * 1.2;
  node.position.set(pos.x, 0, pos.y);
  world.enemies.push(e);
  emitEvent('enemy_spawned', { id: e.id, wisp: isWisp, realm, kind });
  emit(pos.x, 0.2, pos.y, { n: 14, color: realm ? COL.lavender : COL.parchment, speed: 1.2, up: 2.5, life: 0.9, grav: 0.5 });
  return e;
}
function spawnGroup() {
  // a short aligned line of same-realm ghosts: invites a multi-kill
  const realm = rng.chance(0.5) ? 0 : 1;
  const n = 2 + (S.elapsed > TUNING.pacing.bigGroupAfter ? rng.int(2) : 0);
  const horizontal = rng.chance(0.5);
  const base = new THREE.Vector2(rng.range(-1, 1) * 5, rng.range(-1, 1) * 4);
  if (base.distanceTo(S.pos) < 5) base.set(-base.x, -base.y);
  if (base.distanceTo(S.pos) < 4) base.y += base.y > S.pos.y ? 3 : -3;
  for (let i = 0; i < n; i++) {
    const off = (i - (n - 1) / 2) * 1.5;
    const p = new THREE.Vector2(base.x + (horizontal ? off : 0), base.y + (horizontal ? 0 : off));
    p.x = THREE.MathUtils.clamp(p.x, -ARENA_X + 1, ARENA_X - 1); p.y = THREE.MathUtils.clamp(p.y, -ARENA_Z + 1, ARENA_Z - 1);
    spawnEnemy({ realm, wisp: false, pos: p });
  }
}
function removeEnemy(e) { e.dead = true; scene.remove(e.node); world.enemies = world.enemies.filter(x => x !== e); }

function spawnProjectile(pos, dir, realm, color = COL.violet) {
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 0), new THREE.MeshBasicMaterial({ color }));
  const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), new THREE.MeshBasicMaterial({ color: 0xf3e6ff }));
  core.position.y = inner.position.y = 0.7; g.add(core, inner);
  const sh = blob(0.5); g.add(sh);
  scene.add(g);
  world.projectiles.push({ node: g, pos: pos.clone(), dir: dir.clone(), realm, life: TUNING.projectile.life });
  Sfx.zap();
}

export { REALM_TINT, spawnEnemy, spawnGroup, removeEnemy, spawnProjectile };
