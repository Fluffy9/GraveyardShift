// Campaign v0.4 fixtures: portal dash, relic modifiers, wards, souls, boss.
const { test, expect, boot, step } = require('./boot');

test.beforeEach(async ({ page }) => { await boot(page); });

async function quietNight(page) {
  await page.evaluate(() => {
    const G = window.__GS;
    ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id));
    G.S.spawnClock = 1e9;
  });
}

test('PORT-02 a west dash wraps and banishes only ghosts on the swept segments', async ({ page }) => {
  await page.evaluate(() => window.__GS.loadLevel('forgotten_gardens'));
  await quietNight(page);
  const ids = await page.evaluate(() => {
    const G = window.__GS;
    G.clearEnemies();
    G.S.pos.set(-10, 0); G.S.facing.set(-1, 0); G.S.realm = 0; G.S.dashCd = 0; G.S.score = 0;
    const a = G.addEnemy(-10.1, 0, 1);
    const b = G.addEnemy(8, 0, 1);
    const c = G.addEnemy(0, 0, 1);
    return [a.id, b.id, c.id];
  });
  await page.evaluate(() => window.__GS.cross());
  await step(page, 0.25);
  const out = await page.evaluate(() => {
    const G = window.__GS;
    return {
      realm: G.S.realm, score: G.S.score,
      live: G.enemies.map(e => e.id),
      banished: G.events.history.filter(e => e.type === 'enemy_banished').map(e => e.id),
    };
  });
  expect(out.realm).toBe(1);
  expect(out.score).toBe(300);
  expect(out.banished).toEqual([ids[0], ids[1]]);
  expect(out.live).toEqual([ids[2]]);
});

test('relics shorten the dash cooldown and lengthen the dash', async ({ page }) => {
  await page.evaluate(() => window.__GS.startGame({ mode: 'night' }));
  await quietNight(page);
  const watch = await page.evaluate(() => {
    const G = window.__GS;
    G.clearEnemies();
    G.campaign.relics = ['watch'];
    G.S.dashCd = 0; G.S.pos.set(0, 0); G.S.facing.set(1, 0);
    G.cross();
    return { cd: G.S.dashCd, base: G.TUNING.dash.cooldown };
  });
  expect(watch.cd).toBeCloseTo(watch.base * 0.8, 5);

  const key = await page.evaluate(() => {
    const G = window.__GS;
    G.campaign.relics = ['key'];
    G.S.dashCd = 0; G.S.dashRemaining = 0; G.S.pos.set(0, 0); G.S.facing.set(1, 0);
    const x0 = G.S.pos.x;
    G.cross();
    G.stepSim(G.TUNING.dash.duration, 8);
    return { dx: G.S.pos.x - x0, dist: G.TUNING.dash.distance * 1.25 };
  });
  expect(key.dx).toBeCloseTo(key.dist, 1);
});

test('WARD-07 the last wave pays 500 for each surviving pillar', async ({ page }) => {
  await page.evaluate(() => window.__GS.loadLevel('last_ward'));
  await quietNight(page);
  const out = await page.evaluate(() => {
    const G = window.__GS;
    G.clearEnemies();
    const c = G.campaign;
    c.wards.forEach((w, i) => { w.hp = i === 3 ? 25 : 0; w.alive = w.hp > 0; });
    c.wave = 2; c.waveN = 30; c.spawned = 30; c.queued = 0; c.bonusPaid = false;
    const before = G.S.score;
    G.stepSim(1 / 60, 1);
    return { score: G.S.score - before, phase: c.phase, state: G.S.state };
  });
  expect(out.score).toBe(500);
  expect(out.phase).toBe('relic');
  expect(out.state).toBe('relic');
});

test('SOUL-05 the shrine banks carried souls and clears at 25', async ({ page }) => {
  await page.evaluate(() => window.__GS.loadLevel('hollow_grounds'));
  await quietNight(page);
  const out = await page.evaluate(() => {
    const G = window.__GS;
    G.S.pos.set(0, 0); G.S.score = 0;
    const s = G.campaign.souls;
    s.carried = 5; s.banked = 20; s.orbs = []; s.lock = 0; s.next = 99;
    G.stepSim(1 / 60, 1);
    return { carried: s.carried, banked: s.banked, score: G.S.score, phase: G.campaign.phase };
  });
  expect(out).toMatchObject({ carried: 0, banked: 25, score: 750, phase: 'relic' });
});

test('BOSS-02 a matching dash deals 1, flips the warden, and does not refund', async ({ page }) => {
  await page.evaluate(() => window.__GS.loadLevel('bell_tower'));
  await quietNight(page);
  const out = await page.evaluate(() => {
    const G = window.__GS;
    G.clearEnemies();
    G.S.pos.set(0, 5.8); G.S.facing.set(0, -1); G.S.realm = 0; G.S.dashCd = 0; G.S.score = 0;
    const cd = G.TUNING.dash.cooldown, dur = G.TUNING.dash.duration;
    G.cross();
    G.stepSim(dur, 1);
    return { hp: G.campaign.boss.hp, realm: G.campaign.boss.realm, score: G.S.score, dashCd: G.S.dashCd, left: cd - dur };
  });
  expect(out.hp).toBe(11);
  expect(out.realm).toBe(0);
  expect(out.score).toBe(250);
  expect(out.dashCd).toBeCloseTo(out.left, 2);
});

test('choosing a relic opens the exit, and stepping in starts the next level', async ({ page }) => {
  await page.evaluate(() => window.__GS.startGame({ mode: 'night' }));
  await quietNight(page);
  await page.evaluate(() => {
    const G = window.__GS;
    for (let r = 0; r < 3; r++) { G.clearEnemies(); G.stepSim(0.01, 1); if (r < 2) G.stepSim(0.01, 500); }
    G.S.hp = 2;
    G.chooseRelic('flowers');
  });
  const mid = await page.evaluate(() => ({ phase: window.__GS.campaign.phase, hp: window.__GS.S.hp, state: window.__GS.S.state }));
  expect(mid).toMatchObject({ phase: 'exit', hp: 3, state: 'playing' });
  await page.evaluate(() => {
    const G = window.__GS;
    G.S.pos.set(0, 0);
    G.stepSim(1 / 60, 2);
    G.S.pos.set(0, -6.6);
    G.stepSim(1 / 60, 2);
  });
  const next = await page.evaluate(() => ({ id: window.__GS.campaign.level.id, index: window.__GS.campaign.index, hp: window.__GS.S.hp }));
  expect(next.id).toBe('forgotten_gardens');
  expect(next.index).toBe(1);
  expect(next.hp).toBe(3);
});

test('PORT-03 a north dash through a north-south portal wraps to the south edge', async ({ page }) => {
  await page.evaluate(() => window.__GS.loadLevel('forgotten_gardens'));
  await quietNight(page);
  await page.evaluate(() => { const G = window.__GS; G.clearEnemies(); G.S.pos.set(6.6, -7.2); G.S.facing.set(0, -1); G.S.realm = 0; G.S.dashCd = 0; G.cross(); });
  await step(page, 0.3);
  const p = await page.evaluate(() => [window.__GS.S.pos.x, window.__GS.S.pos.y]);
  expect(p[0]).toBeCloseTo(6.6, 3);
  expect(p[1]).toBeGreaterThan(2);                       // came out of the south edge (z = +8) and kept going north
});

test('PORT-04 the north edge outside a portal aperture does not wrap', async ({ page }) => {
  await page.evaluate(() => window.__GS.loadLevel('forgotten_gardens'));
  await quietNight(page);
  await page.evaluate(() => { const G = window.__GS; G.clearEnemies(); G.S.pos.set(2.5, -7.0); G.S.facing.set(0, -1); G.S.realm = 0; G.S.dashCd = 0; G.cross(); });
  await step(page, 0.3);
  const y = await page.evaluate(() => window.__GS.S.pos.y);
  expect(y).toBeLessThan(-7);
  expect(y).toBeGreaterThanOrEqual(-8.0001);
});

test('SOLID-01 the garden fountain blocks walking in both realms', async ({ page }) => {
  await page.evaluate(() => window.__GS.loadLevel('forgotten_gardens'));
  await quietNight(page);
  for (const realm of [0, 1]) {
    await page.evaluate(r => { const G = window.__GS; G.clearEnemies(); G.S.pos.set(-3.5, 0); G.S.realm = r; G.S.botInput = { x: 1, y: 0 }; }, realm);
    await step(page, 2);
    const d = await page.evaluate(() => { const G = window.__GS; G.S.botInput = null; return Math.hypot(G.S.pos.x, G.S.pos.y); });
    expect(d).toBeGreaterThan(1.25 + 0.35 - 0.02);
  }
});

test('SOLID-02 a dash that would end inside the fountain stops at its rim', async ({ page }) => {
  await page.evaluate(() => window.__GS.loadLevel('forgotten_gardens'));
  await quietNight(page);
  await page.evaluate(() => { const G = window.__GS; G.clearEnemies(); G.S.pos.set(-3.2, 0.2); G.S.facing.set(1, 0); G.S.realm = 0; G.S.dashCd = 0; G.cross(); });
  await step(page, 0.4);
  const d = await page.evaluate(() => Math.hypot(window.__GS.S.pos.x, window.__GS.S.pos.y));
  expect(d).toBeGreaterThan(1.25 + 0.35 - 0.02);
});
