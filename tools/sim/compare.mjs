// Markdown comparison of the five tiers from tools/sim/out/t{1..5}.json (written by run.mjs --tier N).
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'out');
const names = ['Dusk', 'Nightfall', 'Midnight (live)', 'Witching Hour', 'Dead of Night'];
const avg = a => a.length ? a.reduce((s, x) => s + x, 0) / a.length : 0;
const pct = (a, b) => b ? `${Math.round(100 * a / b)}%` : '-';
const rows = [];
for (let t = 1; t <= 5; t++) {
  const f = path.join(dir, `t${t}.json`); if (!fs.existsSync(f)) continue;
  const rs = JSON.parse(fs.readFileSync(f)).results, n = rs.length;
  const band = (lo, hi) => { const g = rs.filter(r => r.skill >= lo && r.skill < hi); return pct(g.filter(r => r.won).length, g.length); };
  const lv = i => { const r = rs.filter(x => x.levels[i]); return pct(r.filter(x => x.levels[i].cleared).length, r.length); };
  rows.push(`| ${t} ${names[t - 1]} | ${pct(rs.filter(r => r.won).length, n)} | ${band(0, 0.4)} | ${band(0.4, 0.55)} | ${band(0.55, 0.7)} | ${band(0.7, 1.01)} | ${[0, 1, 2, 3, 4, 5].map(lv).join(' / ')} | ${avg(rs.map(r => r.deaths)).toFixed(1)} | ${pct(rs.filter(r => r.quit === 'frustration').length, n)} |`);
}
console.log(['| Tier | Finish campaign | skill <.40 | .40-.55 | .55-.70 | .70+ | Level clear rate (of those who reached it) L1/L2/L3/L4/L5/L6 | Deaths/player | Rage-quit |', '|---|---|---|---|---|---|---|---|---|', ...rows].join('\n'));
