// Found items: three decoy lanterns, the Spellbook Turret and the Bellstone. Same rig style as spirits.js: a model plus moving
// parts on pivots (origin = pivot), motion a pure function of time offset per instance by `phase`.
// Usage: const it = ITEMS.bellstone.build(name => PROTOS[name].clone(true), phase); scene.add(it.root); it.tick(t); it.fire();
// `fire()` plays the one-shot (the book's pulse, the bell's ring) from the last ticked time; `demo` re-fires every 2.5 s for previews.
// Nothing here is wired to gameplay yet.
import * as THREE from 'three';

const n1 = t => Math.sin(t) * 0.6 + Math.sin(t * 2.3 + 1.7) * 0.3 + Math.sin(t * 5.1 + 0.4) * 0.1;
const at = (o, x, y, z) => { o.position.set(x, y, z); return o; };
const pivot = (parent, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };
function glows(obj) { const out = []; obj.traverse(o => { if (o.isMesh && o.material.emissive?.getHex()) { o.material = o.material.clone(); out.push(o.material); } }); return out; }
function shadow(root, r) {
  const d = new THREE.Mesh(new THREE.CircleGeometry(r, 16), new THREE.MeshBasicMaterial({ color: 0x0e0816, transparent: true, opacity: 0.4, depthWrite: false }));
  d.rotation.x = -Math.PI / 2; d.position.y = 0.02; root.add(d);
}
const glowAll = (list, v) => { for (const m of list) m.emissiveIntensity = v; };
// one-shot timer: age since fire() (seconds), decay 1 -> 0 over `len`
function shot(demo, len) {
  let fireAt = -1e9, last = 0, k = -1;
  return {
    fire() { fireAt = last; },
    at(t) { last = t; if (demo) { const j = Math.floor(t / 2.5); if (j !== k) { k = j; fireAt = t; } } const age = t - fireAt; return { age, d: age >= 0 && age < len ? 1 - age / len : 0 }; },
  };
}

export const ITEMS = {
  // Paper lantern (tier 1): sways from its string, the paper glow flickers.
  lure_paper: { name: 'Paper Lantern', tier: 1,
    build(get, phase = 0) {
      const root = new THREE.Group(), hang = pivot(root, 0, 0.8, 0), body = at(get('lure_paper'), 0, -0.8, 0); hang.add(body);
      const gl = glows(body); shadow(root, 0.2);
      return { root, tick(t) { t += phase;
        hang.rotation.z = Math.sin(t * 1.3) * 0.06 + n1(t * 0.7) * 0.03; hang.rotation.x = Math.sin(t * 0.9 + 1) * 0.04;
        body.scale.setScalar(1 + Math.sin(t * 3.1) * 0.012); glowAll(gl, 0.85 + 0.3 * (0.5 + 0.5 * n1(t * 4))); }, fire() {} };
    } },
  // Brass lantern (tier 2): steady, the flame inside licks and leans.
  lure_brass: { name: 'Brass Lantern', tier: 2,
    build(get, phase = 0) {
      const root = new THREE.Group(), body = get('lure_brass'); root.add(body);
      const fl = pivot(root, 0, 0.28, 0); fl.add(get('lure_brass_flame'));
      const gl = glows(body); shadow(root, 0.22);
      return { root, tick(t) { t += phase;
        fl.scale.set(1 + n1(t * 9) * 0.1, 1 + n1(t * 7 + 2) * 0.25, 1 + n1(t * 8 + 4) * 0.1); fl.position.x = n1(t * 5) * 0.012; fl.rotation.z = n1(t * 6 + 1) * 0.15;
        glowAll(gl, 0.9 + 0.2 * n1(t * 7 + 2)); }, fire() {} };
    } },
  // Spirit lantern (tier 3): floats, the core breathes, the halo spins and tilts.
  lure_spirit: { name: 'Spirit Lantern', tier: 3,
    build(get, phase = 0) {
      const root = new THREE.Group(), bob = pivot(root, 0, 0, 0), body = get('lure_spirit'); bob.add(body);
      const core = pivot(bob, 0, 0.38, 0); core.add(get('lure_spirit_core'));
      const halo = pivot(bob, 0, 0.9, 0); halo.add(get('lure_spirit_halo'));
      const gl = glows(bob); shadow(root, 0.24);
      return { root, tick(t) { t += phase;
        bob.position.y = 0.06 + Math.sin(t * 1.4) * 0.04;
        core.scale.setScalar(1 + Math.sin(t * 3) * 0.12);
        halo.rotation.set(Math.sin(t * 0.8) * 0.12, t * 1.2, Math.cos(t * 0.6) * 0.1); halo.position.y = 0.9 + Math.sin(t * 1.7) * 0.02;
        glowAll(gl, 0.9 + 0.3 * (0.5 + 0.5 * Math.sin(t * 3))); }, fire() {} };
    } },
  // Spellbook Turret: the book hovers and wobbles, runes drift round it, the sigil turns. fire(): the book recoils, the sigil flares, the runes whip round.
  spellbook: { name: 'Spellbook Turret', tier: 0,
    build(get, phase = 0, { demo = false } = {}) {
      const root = new THREE.Group(), s = shot(demo, 0.6);
      const sigil = pivot(root, 0, 0.08, 0); sigil.add(get('spellbook_sigil'));
      const book = pivot(root, 0, 0.6, 0); book.add(get('spellbook_book'));
      const runes = pivot(root, 0, 0.6, 0); runes.add(get('spellbook_runes'));
      const gl = glows(root); shadow(root, 0.36);
      return { root, fire: s.fire, tick(t) { t += phase; const { d } = s.at(t), k = d * d;
        const hover = 0.6 + Math.sin(t * 1.3) * 0.04;
        book.position.set(0, hover, -0.1 * k); book.rotation.set(Math.sin(t * 0.7) * 0.03 + 0.25 * k, Math.sin(t * 0.5) * 0.08, Math.sin(t * 0.9) * 0.04);
        runes.position.y = hover + Math.sin(t * 2) * 0.02; runes.rotation.y = t * 0.9 + 5 * (1 - (1 - d) * (1 - d)) * (d > 0 ? 1 : 0); runes.scale.setScalar(1 + 0.35 * k);
        sigil.rotation.y = -t * 0.6; sigil.scale.setScalar(1 + 0.5 * k);
        glowAll(gl, 0.9 + 0.2 * Math.sin(t * 2.4) + 1.6 * k); } };
    } },
  // Bellstone: the rune bands drift and spin; fire() rocks the bell like a struck one, decaying, and the bands flare outward.
  bellstone: { name: 'Bellstone', tier: 0,
    build(get, phase = 0, { demo = false } = {}) {
      const root = new THREE.Group(), s = shot(demo, 1.4);
      root.add(get('bellstone_feet'));
      const rock = pivot(root, 0, 0.07, 0); rock.add(at(get('bellstone'), 0, -0.07, 0));
      const bands = pivot(root, 0, 0.34, 0); bands.add(get('bellstone_bands'));
      const gl = glows(root); shadow(root, 0.38);
      return { root, fire: s.fire, tick(t) { t += phase; const { age, d } = s.at(t);
        rock.rotation.z = Math.sin(t * 1.6) * 0.012 + 0.16 * d * d * Math.sin(Math.max(age, 0) * 22);
        rock.rotation.x = 0.1 * d * d * Math.sin(Math.max(age, 0) * 17 + 1);
        bands.position.y = 0.34 + Math.sin(t * 1.5) * 0.015 + 0.03 * d; bands.rotation.y = t * 0.8 + 3 * (1 - d) * (d > 0 ? 1 : 0);
        const f = d > 0 ? 1 + 0.45 * Math.sin((1 - d) * Math.PI) : 1; bands.scale.set(f, 1, f);
        glowAll(gl, 0.9 + 0.15 * Math.sin(t * 2.2) + 1.3 * d); } };
    } },
};
export const ITEM_IDS = Object.keys(ITEMS);

// ---------- world pickups ----------
// Each hovers, turns and glows; `fire()` is the collect pop (grows a little and vanishes over 0.3 s; the game removes the object after).
// Demo mode re-collects every 2.5 s for previews and then lets it reappear.
function pickup(name, model, { y = 0.32, spin = 1.2, shadowR = 0.16, extra } = {}) {
  return { name,
    build(get, phase = 0, { demo = false } = {}) {
      const root = new THREE.Group(), s = shot(demo, 0.3), hover = pivot(root, 0, y, 0), body = pivot(hover, 0, 0, 0); body.add(get(model));
      const gl = glows(body); shadow(root, shadowR); const ex = extra?.(body, hover, get);
      return { root, fire: s.fire, tick(t) { t += phase; const { age, d } = s.at(t);
        hover.position.y = y + Math.sin(t * 2) * 0.05; body.rotation.y = t * spin;
        ex?.tick(t, body, hover); glowAll(gl, 0.9 + 0.3 * Math.sin(t * 3.2));
        const pop = d > 0 ? (1 + 0.8 * (1 - d)) * d : 1; root.scale.setScalar(pop); if (d > 0) glowAll(gl, 2.2); } };
    } };
}
export const PICKUPS = {
  heart: pickup('Heart', 'pickup_heart', { extra: () => ({ tick(t, body) { const b = Math.pow(Math.max(0, Math.sin(t * 6)), 3); body.scale.setScalar(1 + 0.14 * b); } }) }),
  shield: pickup('Ward Bubble', 'pickup_shield', { spin: 0, extra: () => ({ tick(t, body) { body.rotation.set(t * 0.7, t * 1.1, t * 0.5); } }) }),
  magnet: pickup('Soul Draw', 'pickup_magnet', { extra: () => ({ tick(t, body) { body.rotation.z = Math.sin(t * 1.6) * 0.25; } }) }),
  hourglass: pickup('Stillwater', 'pickup_hourglass', { spin: 0.6, extra: () => ({ tick(t, body) {
    const c = (t / 4) % 1, k = Math.floor(t / 4), e = c > 0.8 ? (c - 0.8) / 0.2 : 0;
    body.rotation.z = Math.PI * (k + e * e * (3 - 2 * e)); } }) }),
  parcel: pickup('Parcel', 'pickup_parcel', { y: 0.26, extra: () => ({ tick(t, body) {
    const c = (t / 3) % 1, w = c < 0.25 ? Math.sin(c / 0.25 * Math.PI * 3) * (1 - c / 0.25) : 0;
    body.rotation.z = w * 0.18; body.scale.set(1 + w * 0.04, 1 - w * 0.04, 1 + w * 0.04); } }) }),
};
export const PICKUP_IDS = Object.keys(PICKUPS);
