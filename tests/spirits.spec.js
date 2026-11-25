// SPIRIT-01..07: the four campaign spirits (Lantern Moth, Bell Imp, Bloom Wraith, Ossuary Choir).
// Behaviour lives in src/game.js, spawning in src/entities.js, placements in src/levels/registry.js.
const { test, expect, boot, step } = require('./boot');

test.beforeEach(async ({ page }) => { await boot(page); });

// a level with no director spawns and no tutorial freezes
async function arena(page, level = 'old_churchyard') {
  await page.evaluate(lv => {
    const G = window.__GS;
    G.loadLevel(lv);
    ['intro', 'cross', 'wisp', 'moth', 'bloom', 'choir', 'bell'].forEach(id => G.S.notes.add(id));
    G.S.spawnClock = 1e9; G.clearEnemies(); G.S.hp = 9; G.S.invuln = 0;
    G.director.phase = 'hold';
  }, level);
}

test('SPIRIT-01 Ossuary Choir: the first dash breaks its skull ring, the second banishes it', async ({ page }) => {
  await arena(page, 'catacombs');
  const id = await page.evaluate(() => {
    const G = window.__GS;
    G.S.pos.set(0, 2); G.S.facing.set(0, -1); G.S.realm = 0; G.S.dashCd = 0;
    const e = G.addEnemy(0, -1, 1, false, 'choir'); e.pos.set(0, -1); return e.id;
  });
  await page.evaluate(() => window.__GS.cross());
  await step(page, 0.3);
  let out = await page.evaluate(id => {
    const G = window.__GS, e = G.enemies.find(x => x.id === id);
    return { alive: !!e, shield: e?.shield, broken: G.events.history.filter(x => x.type === 'enemy_shield_broken').length,
      banished: G.events.history.filter(x => x.type === 'enemy_banished').length };
  }, id);
  expect(out).toEqual({ alive: true, shield: 0, broken: 1, banished: 0 });

  await page.evaluate(id => {
    const G = window.__GS, e = G.enemies.find(x => x.id === id);
    G.S.pos.set(e.pos.x, e.pos.y + 3); G.S.facing.set(0, -1); G.S.realm = 0; G.S.dashCd = 0; G.S.invuln = 1;
  }, id);
  await page.evaluate(() => window.__GS.cross());
  await step(page, 0.3);
  out = await page.evaluate(id => ({ alive: window.__GS.enemies.some(x => x.id === id),
    banished: window.__GS.events.history.filter(x => x.type === 'enemy_banished').map(x => x.id) }), id);
  expect(out).toEqual({ alive: false, banished: [id] });
});

test('SPIRIT-02 Bell Imp shockwave hurts once, in its own realm only', async ({ page }) => {
  await arena(page, 'bell_tower');
  await page.evaluate(() => {
    const G = window.__GS;
    G.campaign.boss.cd = 1e9; G.clearEnemies();
    G.S.pos.set(0, 3.6); G.S.realm = 0;
    const e = G.addEnemy(0, 0, 0, false, 'bell'); e.shoot = 0.05;
  });
  await step(page, 1.4);
  const hits = await page.evaluate(() => window.__GS.events.history.filter(x => x.type === 'player_damaged').map(x => x.source.kind));
  expect(hits).toEqual(['bell']);
  expect(await page.evaluate(() => window.__GS.events.history.filter(x => x.type === 'bell_toll').length)).toBe(1);
});

test('SPIRIT-03 Bell Imp shockwave passes harmlessly through the other realm', async ({ page }) => {
  await arena(page, 'bell_tower');
  await page.evaluate(() => {
    const G = window.__GS;
    G.campaign.boss.cd = 1e9; G.clearEnemies();
    G.S.pos.set(0, 3.6); G.S.realm = 1;
    const e = G.addEnemy(0, 0, 0, false, 'bell'); e.shoot = 0.05;
    e.pulse = { x: 0, z: 0, r: 0.3, hit: false }; e.shoot = 9;   // already tolling while the player is across
  });
  await step(page, 1.4);
  expect(await page.evaluate(() => window.__GS.events.history.filter(x => x.type === 'player_damaged').length)).toBe(0);
});

test('SPIRIT-04 Bloom Wraith fires a three-shot fan aimed at the player', async ({ page }) => {
  await arena(page, 'forgotten_gardens');
  await page.evaluate(() => {
    const G = window.__GS;
    G.S.pos.set(0, 4); G.S.realm = 0;
    const e = G.addEnemy(0, -4, 0, false, 'bloom'); e.shoot = 0.02;
  });
  await step(page, 0.1);
  const dirs = await page.evaluate(() => window.__GS.projectiles.map(p => Math.atan2(p.dir.y, p.dir.x)));
  expect(dirs.length).toBe(3);
  const mid = [...dirs].sort((a, b) => a - b)[1];
  expect(Math.abs(mid - Math.PI / 2)).toBeLessThan(0.05);   // the centre shot points straight at the player (+z)
  const spread = Math.max(...dirs) - Math.min(...dirs);
  expect(spread).toBeGreaterThan(0.5); expect(spread).toBeLessThan(0.8);
});

test('SPIRIT-05 Lantern Moth closes faster than a wanderer and weaves sideways', async ({ page }) => {
  await arena(page);
  await page.evaluate(() => {
    const G = window.__GS;
    G.S.pos.set(0, 6); G.S.realm = 0;
    G.addEnemy(-3, -6, 0, false, 'moth').tag = 'moth';
    G.addEnemy(3, -6, 0).tag = 'w';
  });
  const xs = [];
  for (let i = 0; i < 8; i++) { await step(page, 0.18); xs.push(await page.evaluate(() => window.__GS.enemies.find(e => e.tag === 'moth').pos.x)); }
  const out = await page.evaluate(() => {
    const G = window.__GS, d = t => G.enemies.find(e => e.tag === t).pos.distanceTo(G.S.pos);
    return { moth: d('moth'), w: d('w') };
  });
  expect(out.moth).toBeLessThan(out.w - 0.8);
  // the lateral weave makes the x drift change direction at least once
  const steps = xs.slice(1).map((x, i) => x - xs[i]);
  expect(steps.some(s => s > 0) && steps.some(s => s < 0)).toBe(true);
});

test('SPIRIT-06 campaign rounds place the new spirits in their home levels', async ({ page }) => {
  const kinds = await page.evaluate(() => {
    const out = {};
    for (const lv of ['old_churchyard', 'forgotten_gardens', 'catacombs']) {
      window.__GS.loadLevel(lv);
      out[lv] = window.__GS.director.level.rounds.map(r => r.spawns.map(s => s.kind).filter(k => k !== 'wanderer' && k !== 'wisp').sort().join(','));
    }
    return out;
  });
  expect(kinds).toEqual({
    old_churchyard: ['', '', 'moth,moth', 'moth,moth', 'moth,moth,moth'],
    forgotten_gardens: ['', 'bloom', 'bloom,bloom', 'bloom,bloom,moth,moth', 'bloom,bloom,bloom,bloom,moth,moth'],
    catacombs: ['', 'choir', 'choir,choir', 'choir,choir', 'choir,choir,choir,choir'],
  });
});

test('SPIRIT-07 first sighting of a new spirit shows its caretaker tip', async ({ page }) => {
  await page.evaluate(() => {
    const G = window.__GS;
    G.loadLevel('old_churchyard');
    ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id));
    G.S.spawnClock = 1e9; G.clearEnemies(); G.director.phase = 'hold';
    G.addEnemy(0, -5, 0, false, 'moth');
  });
  await step(page, 0.1);
  const out = await page.evaluate(() => ({ state: window.__GS.S.state, noted: window.__GS.S.notes.has('moth') }));
  expect(out).toEqual({ state: 'tutorial', noted: true });
  await expect(page.locator('.note-text')).toContainText('Lantern Moths');
});
