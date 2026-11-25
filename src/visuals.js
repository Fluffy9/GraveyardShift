// Per-frame visuals: post uniforms, lighting, player/enemy animation, camera shake.
import * as THREE from 'three';
import { COL, PS, ES, DASH_DISTANCE, ARENA_X, ARENA_Z } from './config.js';
import { post, camera, hemi, moon, CAM_POS } from './render.js';
import { updateParticles, emit } from './particles.js';
import { rig, lights } from './level.js';
import { REALM_TINT } from './entities.js';
const RIG_SCALE = { moth: 1.3, bell: 1.15, bloom: 1.35, choir: 1.2 };
const RIG_MOTE = { moth: COL.amber, bell: COL.blue, bloom: COL.pink, choir: COL.parchment };
import { S, world } from './state.js';
import { lightProfile } from './sets.js';
import { fx } from './sim/rng.js';

const v3 = new THREE.Vector3();
const tmpC = new THREE.Color();
function updateVisuals(dt, t) {
  S.realmVis += ((S.realm) - S.realmVis) * Math.min(1, dt * 7);
  const rv = S.realmVis;
  post.uniforms.realm.value = rv;
  post.uniforms.time.value = t;
  S.flash = Math.max(0, S.flash - dt * 2.2); post.uniforms.flash.value = S.flash;
  S.hurt = Math.max(0, S.hurt - dt * 2.5); post.uniforms.hurt.value = S.hurt;
  if (S.ripple >= 0) {
    S.ripple += dt * 1.8; if (S.ripple > 1) S.ripple = -1;
    v3.set(S.pos.x, 0.8, S.pos.y).project(camera);
    post.uniforms.ripple.value.set(v3.x * .5 + .5, v3.y * .5 + .5, S.ripple);
  } else post.uniforms.ripple.value.z = -1;
  hemi.color.setHex(lightProfile.hemi).lerp(tmpC.setHex(0x8f95ff), rv);
  hemi.intensity = lightProfile.hemiI + rv * 0.25;
  moon.color.setHex(lightProfile.moon); moon.intensity = lightProfile.moonI + rv * 0.6;
  const flick = 0.92 + Math.sin(t * 13) * 0.04 + Math.sin(t * 7.3) * 0.04;
  for (const L of lights.lamps) L.intensity = (L.distance > 6 ? 14 : 8) * (1 - rv * 0.6) * flick;
  lights.chapel.intensity = 18 * (1 - rv * 0.5) * flick;
  rig.lanternLight.color.setHex(COL.amber).lerp(tmpC.setHex(COL.lavender), rv);
  rig.lanternLight.intensity = 10 * flick * (S.dashRemaining > 0 ? 2 : 1);

  // player
  rig.player.position.set(S.pos.x, 0, S.pos.y);
  const targetYaw = Math.atan2(S.facing.x, S.facing.y);
  let dy = targetYaw - rig.body.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
  rig.body.rotation.y += dy * Math.min(1, dt * 18);
  const dashing = S.dashRemaining > 0;
  const bob = Math.abs(Math.sin(S.step)) * 0.12 * S.moving;
  rig.body.position.y = bob + Math.sin(t * 2) * 0.02;
  const sq = dashing ? 1.25 : 1 + Math.sin(S.step * 2) * 0.04 * S.moving;
  rig.body.scale.set(PS / Math.sqrt(sq), PS * (dashing ? 0.85 : 1), PS * sq);
  rig.body.rotation.x = (dashing ? 0.35 : 0.12 * S.moving);
  rig.lantern.rotation.x = -Math.sin(S.step) * 0.4 * S.moving - (dashing ? 0.6 : 0);
  rig.player.visible = S.invuln <= 0 || dashing || Math.floor(t * 12) % 2 === 0;
  rig.outline.uniforms.color.value.setHex(rv > 0.5 ? 0xd8c8ff : 0x120e1a);
  rig.shadow.position.set(S.pos.x, 0.03, S.pos.y);

  // dash guide
  const ready = S.dashCd <= 0 && !dashing && S.state === 'playing';
  rig.dashGuide.visible = ready;
  if (ready) {
    const end = S.pos.clone().addScaledVector(S.facing, DASH_DISTANCE);
    end.x = THREE.MathUtils.clamp(end.x, -ARENA_X + 0.6, ARENA_X - 0.6); end.y = THREE.MathUtils.clamp(end.y, -ARENA_Z + 0.6, ARENA_Z - 0.6);
    const kids = rig.dashGuide.children;
    for (let i = 0; i < kids.length - 1; i++) {
      const f = (i + 1 + ((t * 3) % 1)) / kids.length;
      kids[i].position.set(S.pos.x + (end.x - S.pos.x) * f, 0.05, S.pos.y + (end.y - S.pos.y) * f);
    }
    const tip = kids[kids.length - 1]; tip.position.set(end.x, 0.05, end.y); tip.rotation.z = t * 2;
    rig.dashGuideMat.color.setHex(S.realm ? COL.amber : COL.lavender);
    rig.dashGuideMat.opacity = 0.55 + Math.sin(t * 8) * 0.2;
  }

  // world.enemies
  for (const e of world.enemies) {
    const active = e.realm === S.realm;
    const sp = e.spawn > 0 ? 1 - e.spawn / 0.8 : 1;
    e.node.position.set(e.pos.x, 0, e.pos.y);
    if (e.rig) {
      // spirit rigs animate themselves; wind-ups (bell, bloom) swell the body
      e.rig.tick(t);
      e.body.position.y = 0.05;
      const s = ES * sp * (RIG_SCALE[e.kind] || 1) * (1 + e.charge * 0.18 + (e.charge > 0.6 ? Math.sin(t * 40) * 0.03 : 0));
      e.body.scale.setScalar(s);
    } else {
      e.body.position.y = 0.15 + Math.sin(e.bob) * 0.12;
      const s = ES * sp * (e.wisp ? 1 + Math.sin(t * 9 + e.bob) * 0.06 + e.charge * 0.25 : 1);
      e.body.scale.set(s, s * (e.wisp ? 1 : 1 + Math.sin(e.bob * 2) * 0.04), s);
    }
    const face = Math.atan2(S.pos.x - e.pos.x, S.pos.y - e.pos.y);
    let d = face - e.body.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); e.body.rotation.y += d * Math.min(1, dt * 5);
    e.body.rotation.z = Math.sin(e.bob * 0.7) * 0.08;
    const op = active ? 1 : (e.targeted ? 0.8 : 0.5);
    for (const { m, base, em } of e.mats) {
      if (e.wisp || e.rig) { m.color.copy(base); if (!active) m.color.lerp(REALM_TINT[e.realm], 0.3).multiplyScalar(0.7); m.emissive.copy(em).multiplyScalar(active ? 1 + e.charge : 0.45); }
      else { m.color.copy(base).multiply(REALM_TINT[e.realm]); if (!active) m.color.multiplyScalar(0.7); }
      m.opacity = op * sp;
      m.depthWrite = active;
    }
    e.outline.uniforms.color.value.setHex(e.targeted ? (Math.floor(t * 10) % 2 ? 0xffffff : COL.amber) : active ? 0x120e1a : 0x2a2040);
    e.outline.uniforms.opacity.value = (active || e.targeted ? 1 : 0.55) * sp;
    e.outline.uniforms.thick.value = e.targeted ? 0.08 : 0.045;
    e.ring.material.opacity = (active ? 0.9 : 0.35) * sp;
    e.ring.scale.setScalar(e.targeted ? 1.15 + Math.sin(t * 12) * 0.1 : 1);
    if (e.rig && active && fx() < dt * 6) emit(e.pos.x, 0.9 + fx() * 0.5, e.pos.y, { n: 1, color: RIG_MOTE[e.kind], speed: 0.3, up: 1, life: 0.5, grav: 1 });
    if (e.wisp && active && fx() < dt * 14) emit(e.pos.x, 1.2 + fx() * 0.4, e.pos.y, { n: 1, color: fx() < .5 ? COL.blue : COL.violet, speed: 0.3, up: 1.2, life: 0.5, grav: 1 });
  }
  for (const b of world.projectiles) {
    b.node.position.set(b.pos.x, 0, b.pos.y);
    b.node.visible = b.realm === S.realm;
    b.node.children[0].rotation.y += dt * 8;
  }

  // ambient motes
  if (fx() < dt * 6) {
    const x = (fx() - .5) * 24, z = (fx() - .5) * 18;
    emit(x, 0.3, z, { n: 1, color: rv > .5 ? COL.lavender : COL.amber, speed: 0.15, up: 0.25, life: 2.5, grav: 0.05, size: 1 });
  }
  updateParticles(dt);

  // camera shake
  S.shake = Math.max(0, S.shake - dt * 1.8);
  const k = S.shake * S.shake * 0.6;
  camera.position.copy(CAM_POS).add(v3.set((fx() - .5) * k, (fx() - .5) * k, 0));
}

export { updateVisuals };
