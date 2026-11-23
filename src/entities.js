// Ghost, wisp and projectile spawning.
import * as THREE from 'three';
import { COL, ARENA_X, ARENA_Z } from './config.js';
import { scene } from './render.js';
import { PROTOS, cloneMaterials, addOutline, blob } from './assets.js';
import { emit } from './particles.js';
import { S, world } from './state.js';
import { Sfx } from './sfx.js';

const REALM_TINT = [new THREE.Color(0xffe2b8), new THREE.Color(0xc9b2ff)];
function makeRealmRing(realm) {
  const g = new THREE.RingGeometry(0.62, 0.78, 16);
  const m = new THREE.MeshBasicMaterial({ color: realm ? COL.lavender : COL.amber, transparent: true, depthWrite: false });
  const r = new THREE.Mesh(g, m); r.rotation.x = -Math.PI / 2; r.position.y = 0.045; return r;
}
function spawnEnemy(opts = {}) {
  const isWisp = opts.wisp ?? (S.elapsed > 60 && Math.random() < 0.27);
  const realm = opts.realm ?? (Math.random() < 0.5 ? 0 : 1);
  let pos = opts.pos;
  if (!pos) {
    for (let tries = 0; tries < 20; tries++) {
      const edge = Math.floor(Math.random() * 4);
      pos = new THREE.Vector2((Math.random() * 2 - 1) * (ARENA_X - 1), (Math.random() * 2 - 1) * (ARENA_Z - 0.5));
      if (edge === 0) pos.x = -ARENA_X + 0.8; else if (edge === 1) pos.x = ARENA_X - 0.8;
      else if (edge === 2) pos.y = -ARENA_Z + 0.6; else pos.y = ARENA_Z - 0.6;
      if (pos.distanceTo(S.pos) > 5.5) break;
    }
  }
  const node = new THREE.Group();
  const body = cloneMaterials(PROTOS[isWisp ? 'wisp' : 'wanderer'].clone(true));
  body.traverse(o => { if (o.isMesh) { o.castShadow = false; o.material.transparent = true; } });
  if (!isWisp) body.scale.setScalar(1.0);
  node.add(body);
  const outline = addOutline(body);
  const ring = makeRealmRing(realm); node.add(ring);
  const sh = blob(1.4); node.add(sh);
  scene.add(node);
  const mats = []; body.traverse(o => { if (o.isMesh && !o.userData.outline) mats.push({ m: o.material, base: o.material.color.clone(), em: o.material.emissive.clone() }); });
  const e = { node, body, outline, ring, mats, pos, realm, wisp: isWisp, shoot: 1.2 + Math.random() * 1.1, bob: Math.random() * 6.28,
    spawn: 0.8, dead: false, targeted: false, vis: -1, charge: 0 };
  node.position.set(pos.x, 0, pos.y);
  world.enemies.push(e);
  emit(pos.x, 0.2, pos.y, { n: 14, color: realm ? COL.lavender : COL.parchment, speed: 1.2, up: 2.5, life: 0.9, grav: 0.5 });
  return e;
}
function spawnGroup() {
  // a short aligned line of same-realm ghosts: invites a multi-kill
  const realm = Math.random() < 0.5 ? 0 : 1;
  const n = 2 + (S.elapsed > 70 ? Math.floor(Math.random() * 2) : 0);
  const horizontal = Math.random() < 0.5;
  const base = new THREE.Vector2((Math.random() * 2 - 1) * 5, (Math.random() * 2 - 1) * 4);
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

function spawnProjectile(pos, dir, realm) {
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 0), new THREE.MeshBasicMaterial({ color: COL.violet }));
  const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(0.11, 0), new THREE.MeshBasicMaterial({ color: 0xf3e6ff }));
  core.position.y = inner.position.y = 0.7; g.add(core, inner);
  const sh = blob(0.5); g.add(sh);
  scene.add(g);
  world.projectiles.push({ node: g, pos: pos.clone(), dir: dir.clone(), realm, life: 5 });
  Sfx.zap();
}

export { REALM_TINT, spawnEnemy, spawnGroup, removeEnemy, spawnProjectile };
