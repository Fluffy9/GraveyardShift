// Seeded RNG. `rng` drives gameplay (deterministic per run seed); `fx` drives cosmetic randomness
// (particles, camera shake, audio noise) so visuals can never perturb the gameplay sequence.
function mulberry32(a) {
  return () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function createRng(seed = 1) {
  let next = mulberry32(seed);
  const r = () => next();
  r.seed = s => { r.current = s >>> 0; next = mulberry32(r.current); return r.current; };
  r.current = seed >>> 0;
  r.range = (a, b) => a + (b - a) * next();
  r.int = n => Math.floor(next() * n);
  r.chance = p => next() < p;
  r.sign = () => (next() < 0.5 ? -1 : 1);
  return r;
}
export const rng = createRng(1);
export const fx = createRng(2);
export function randomSeed() {
  try { return crypto.getRandomValues(new Uint32Array(1))[0]; } catch (e) { return (Date.now() ^ (Math.random() * 4294967296)) >>> 0; }
}
// Seed both streams from one run seed; returns the seed used so it can be logged / replayed.
export function seedRun(seed = randomSeed()) { rng.seed(seed); fx.seed(seed ^ 0x9e3779b9); return seed >>> 0; }
