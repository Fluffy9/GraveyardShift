// Funnel report for a population run.
const LV = ['Churchyard', 'Gardens', 'Catacombs', 'Last Ward', 'Hollow Gr.', 'Bell Tower'];
const pct = (a, b) => b ? `${Math.round(100 * a / b)}%`.padStart(4) : '   -';
const avg = a => a.length ? a.reduce((s, x) => s + x, 0) / a.length : 0;
export function report(rs, title = '') {
  const n = rs.length, L = [];
  L.push(`${title}: ${n} players, campaign cleared by ${rs.filter(r => r.won).length} (${pct(rs.filter(r => r.won).length, n)})`);
  L.push('level         reached  cleared(of reached)  first-try  avg attempts  avg dmg-taken-by');
  for (let i = 0; i < 6; i++) {
    const reached = rs.filter(r => r.levels[i]), cleared = reached.filter(r => r.levels[i].cleared), first = cleared.filter(r => r.levels[i].attempts === 1);
    const dmg = {}; reached.forEach(r => { for (const [k, v] of Object.entries(r.levels[i].dmg)) dmg[k] = (dmg[k] || 0) + v; });
    const tot = Object.values(dmg).reduce((s, x) => s + x, 0) || 1;
    L.push(`${LV[i].padEnd(13)} ${String(reached.length).padStart(5)}   ${pct(cleared.length, reached.length)}  (${String(cleared.length).padStart(3)})         ${pct(first.length, reached.length)}     ${avg(reached.map(r => r.levels[i].attempts)).toFixed(1).padStart(5)}        ${Object.entries(dmg).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${Math.round(100 * v / tot)}%`).join(', ')}`);
  }
  const quits = {}; rs.forEach(r => { const k = r.won ? 'won' : r.quit || 'ended'; quits[k] = (quits[k] || 0) + 1; });
  L.push(`outcomes: ${Object.entries(quits).map(([k, v]) => `${k} ${v}`).join(', ')}`);
  L.push(`median levels cleared ${rs.map(r => r.cleared).sort((a, b) => a - b)[Math.floor(n / 2)]}, mean playtime ${(avg(rs.map(r => r.playtime)) / 60).toFixed(1)} min, mean deaths ${avg(rs.map(r => r.deaths)).toFixed(1)}`);
  const q = (lo, hi) => rs.filter(r => r.skill >= lo && r.skill < hi);
  L.push('by skill band: ' + [[0, 0.3], [0.3, 0.45], [0.45, 0.6], [0.6, 0.75], [0.75, 1.01]].map(([lo, hi]) => { const g = q(lo, hi); return `${lo.toFixed(2)}-${Math.min(hi, 1).toFixed(2)} n=${g.length} won ${pct(g.filter(r => r.won).length, g.length)} lv ${avg(g.map(r => r.cleared)).toFixed(1)}`; }).join(' | '));
  return L.join('\n');
}
