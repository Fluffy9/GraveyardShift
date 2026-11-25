// Population runner: N simulated players (bell-curve skill + attention) through the Night Shift campaign, headless.
//   node tools/sim/run.mjs [--players 100] [--seed 1] [--tier 3] [--workers 2] [--out tools/sim/out/run.json] [--quiet]
// Players are drawn once from the seed, so every tier is played by the SAME 100 people.
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
import { serve, openGame, launch } from './serve_and_open.mjs';
const dir = path.dirname(fileURLToPath(import.meta.url));
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i < 0 ? d : (process.argv[i + 1] ?? true); };
const N = +arg('players', 100), SEED = +arg('seed', 1), TIER = arg('tier', null), WORKERS = +arg('workers', 2), QUIET = process.argv.includes('--quiet');
const out = arg('out', path.join(dir, 'out', `run_t${TIER ?? 'base'}.json`));

function mulberry(a) { return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
export function population(n, seed, { skillMean = 0.5, skillSd = 0.17, attMean = 0.45, attSd = 0.22, rho = 0.25 } = {}) {
  const r = mulberry(seed), g = () => Math.sqrt(-2 * Math.log(1 - r() * 0.999999)) * Math.cos(2 * Math.PI * r());
  return Array.from({ length: n }, (_, i) => {
    const a = g(), b = rho * a + Math.sqrt(1 - rho * rho) * g();
    return { id: i + 1, skill: Math.min(0.98, Math.max(0.02, skillMean + skillSd * a)), attention: Math.min(0.98, Math.max(0.02, attMean + attSd * b)), seed: Math.floor(r() * 4294967295) };
  });
}
const players = arg('skill', null) ? population(N, SEED).map(p => ({ ...p, skill: +arg('skill'), attention: +arg('att', p.attention) })) : population(N, SEED);

const { srv, url } = await serve(); const browser = await launch();
const botSrc = fs.readFileSync(path.join(dir, 'bot.js'), 'utf8');
const results = []; const queue = [...players]; let done = 0; const t0 = Date.now();
async function worker() {
  const page = await openGame(browser, url);
  await page.addScriptTag({ content: botSrc });
  if (TIER != null && TIER !== 'base') await page.evaluate(t => window.__GS.setTier(+t), TIER);
  for (let p; (p = queue.shift());) {
    const rec = await page.evaluate(pp => window.__BOT.play(pp), p);
    results.push(rec); done++;
    if (!QUIET && done % 10 === 0) console.error(`  ${done}/${N}  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
  }
  await page.close();
}
await Promise.all(Array.from({ length: WORKERS }, worker));
results.sort((a, b) => a.id - b.id);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ tier: TIER, n: N, seed: SEED, results }, null, 1));
await browser.close(); srv.close();
const { report } = await import('./report.mjs');
console.log(report(results, `tier ${TIER ?? 'base'}`));
