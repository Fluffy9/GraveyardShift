// GHOST-01: chasers pinned behind an obstacle get unstuck after a delay that differs per ghost.
const { test, expect, boot } = require('./boot');

test('GHOST-01 ghosts behind the fountain: some slip round quickly, some stay pinned for seconds, all get out eventually', async ({ page }) => {
  await boot(page);
  const times = await page.evaluate(() => {
    const G = window.__GS, out = [];
    G.loadLevel('forgotten_gardens'); G.S.botInput = { x: 0, y: 0 };
    ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id));
    for (let trial = 0; trial < 14; trial++) {
      G.clearEnemies(); G.S.hp = 99; G.S.invuln = 1e9; G.S.realm = 0; G.S.pos.set(0, 4.2);
      const e = G.addEnemy(0, -4.2, 0); let t = 0;
      while (t < 14 && e.pos.distanceTo(G.S.pos) > 1.6) { G.stepSim(1 / 60, 1); t += 1 / 60; }
      out.push(+t.toFixed(1));
    }
    return out;
  });
  const sorted = [...times].sort((a, b) => a - b);
  expect(sorted[sorted.length - 1]).toBeLessThan(14);          // nobody is stuck forever
  expect(sorted[0]).toBeLessThan(sorted[sorted.length - 1] - 2);   // wit differs: quick and slow ghosts both exist
  expect(sorted.filter(t => t > sorted[0] + 2).length).toBeGreaterThan(0);
  expect(sorted.filter(t => t <= sorted[0] + 1).length).toBeGreaterThan(0);
});
