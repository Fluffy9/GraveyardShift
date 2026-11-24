// SIM-01..06: simulation foundation (tuning config, seeded RNG, fixed-step driver, event stream).
const { test, expect, boot, step, startRun, place, addEnemy, snap, FRAME } = require('./boot');
const K = require('./constants');

const LIVE = 'SIM-09';
test.beforeEach(async ({ page }, info) => { if (!info.title.startsWith(LIVE)) await boot(page); });

test('SIM-01 tuning config equals the live-tuning oracle (tests/constants.js)', async ({ page }) => {
  const T = await page.evaluate(() => JSON.parse(JSON.stringify(window.__GS.TUNING)));
  expect(T.player.speed).toBe(K.SPEED);
  expect(T.dash.distance).toBe(K.DASH_DISTANCE);
  expect(T.dash.duration).toBe(K.DASH_DURATION);
  expect(T.dash.cooldown).toBe(K.DASH_COOLDOWN);
  expect(T.dash.refundPerKill).toBe(K.CD_REFUND);
  expect(T.dash.cooldownFloor).toBe(K.CD_FLOOR);
  expect(T.arena.x).toBe(K.ARENA_X);
  expect(T.arena.z).toBe(K.ARENA_Z);
  expect(T.arena.playerPad).toBe(K.EDGE_PAD);
  expect(T.player.hitInvuln).toBe(K.INVULN_HIT);
  expect(T.combo.window).toBe(K.COMBO_WINDOW);
  expect(T.enemy.inactiveDrift).toBe(K.INACTIVE_DRIFT);
  expect(T.player.startPos).toEqual(K.START_POS);
  expect(T.player.maxHp).toBe(K.START_HP);
});

test('SIM-02 the same seed replays an identical run (positions, score, events)', async ({ page }) => {
  const run = seed => page.evaluate(seed => {
    const G = window.__GS;
    G.setNextSeed(seed);
    G.startGame();
    ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id));   // no tutorial freezes
    for (let i = 0; i < 60 * 25; i++) {
      if (i === 90 || i === 400 || i === 900) { G.S.facing.set(i === 400 ? 1 : -1, -1); G.cross(); }
      G.stepSim(1 / 60);
    }
    const { S, enemies } = G;
    return JSON.stringify({
      state: S.state, hp: S.hp, score: S.score, seed: S.seed, elapsed: S.elapsed,
      pos: [S.pos.x, S.pos.y],
      enemies: enemies.map(e => [e.id, e.wisp, e.realm, +e.pos.x.toFixed(6), +e.pos.y.toFixed(6)]),
      events: G.events.history.map(e => [e.type, e.tick, e.id ?? null, e.dashId ?? null]),
    });
  }, seed);
  const a = await run(1234), b = await run(1234), c = await run(99);
  expect(a).toEqual(b);
  expect(a).not.toEqual(c);
  expect(JSON.parse(a).enemies.length).toBeGreaterThan(0);     // the run actually spawned things
});

test('SIM-03 a new run without an explicit seed picks a fresh one and records it', async ({ page }) => {
  const seeds = await page.evaluate(() => {
    const G = window.__GS, out = [];
    for (let i = 0; i < 3; i++) { G.startGame(); out.push(G.S.seed); }
    return out;
  });
  expect(new Set(seeds).size).toBe(3);
  seeds.forEach(s => expect(Number.isInteger(s)).toBe(true));
});

test('SIM-04 fixed-step stepper runs constant slices independent of frame time', async ({ page }) => {
  const r = await page.evaluate(() => {
    const { createStepper } = window.__GS.sim;
    const count = frames => { const s = createStepper(1 / 60, 3), steps = []; frames.forEach(f => steps.push(s.feed(f, d => { if (Math.abs(d - 1 / 60) > 1e-12) throw new Error('step size drifted'); }))); return steps; };
    return {
      at60: count(Array(6).fill(1 / 60)),
      at120: count(Array(6).fill(1 / 120)),          // two frames per step
      at30: count(Array(4).fill(1 / 30)),            // two steps per frame
      lag: count([0.5, 1 / 60]),                     // a long stall is capped, backlog dropped
    };
  });
  expect(r.at60).toEqual([1, 1, 1, 1, 1, 1]);
  expect(r.at120).toEqual([0, 1, 0, 1, 0, 1]);
  expect(r.at30).toEqual([2, 2, 2, 2]);
  expect(r.lag).toEqual([3, 1]);
});

test('SIM-05 seeded RNG: same seed same sequence; gameplay and fx streams are independent', async ({ page }) => {
  const r = await page.evaluate(() => {
    const { createRng } = window.__GS.sim;
    const a = createRng(7), b = createRng(7), c = createRng(8);
    const seq = g => Array.from({ length: 5 }, () => g());
    const sa = seq(a), sb = seq(b), sc = seq(c);
    const d = createRng(7); d(); d(); const rest = seq(d);       // advancing one stream does not touch another
    const ints = Array.from({ length: 200 }, () => createRng(3).int(4));
    return { same: JSON.stringify(sa) === JSON.stringify(sb), diff: JSON.stringify(sa) !== JSON.stringify(sc),
      inRange: sa.every(v => v >= 0 && v < 1), cont: JSON.stringify(rest) === JSON.stringify(Array.from({ length: 7 }, ((g) => () => g())(createRng(7))).slice(2, 7)),
      ints: ints.every(v => v >= 0 && v < 4) };
  });
  expect(r).toEqual({ same: true, diff: true, inRange: true, cont: true, ints: true });
});

test('SIM-06 events: a crossing dash that banishes emits ordered, once-only events', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 0, -2.5, 1);
  await page.keyboard.press('Space');
  await step(page, 0.4);
  const evs = await page.evaluate(() => window.__GS.events.history.map(e => ({ type: e.type, tick: e.tick, id: e.id, dashId: e.dashId, combo: e.combo, points: e.points })));
  const types = evs.map(e => e.type);
  expect(types.filter(t => t === 'realm_changed')).toHaveLength(1);
  expect(types.filter(t => t === 'dash_started')).toHaveLength(1);
  expect(types.filter(t => t === 'enemy_banished')).toHaveLength(1);
  expect(types.indexOf('realm_changed')).toBeLessThan(types.indexOf('dash_started'));
  expect(types.indexOf('dash_started')).toBeLessThan(types.indexOf('enemy_banished'));
  const banish = evs.find(e => e.type === 'enemy_banished'), dash = evs.find(e => e.type === 'dash_started');
  expect(banish.dashId).toBe(dash.dashId);
  expect(banish.combo).toBe(1);
  expect(banish.points).toBe(100);
  expect(evs.map(e => e.tick)).toEqual([...evs.map(e => e.tick)].sort((a, b) => a - b));
});

test('SIM-07 events: contact damage emits player_damaged once with its source; ids are stable', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 0, -0.4, 0);          // active LIVING enemy on top of the player
  const id = await page.evaluate(() => window.__GS.enemies[0].id);
  await step(page, 0.2);
  const dmg = await page.evaluate(() => window.__GS.events.history.filter(e => e.type === 'player_damaged'));
  expect(dmg).toHaveLength(1);
  expect(dmg[0].source).toEqual({ kind: 'contact', id });
  expect(dmg[0].hp).toBe(K.START_HP - 1);
  const ids = await page.evaluate(() => window.__GS.enemies.map(e => e.id));
  expect(new Set(ids).size).toBe(ids.length);
});

test('SIM-08 events: run_started / run_finished / paused / resumed fire once; restart clears history', async ({ page }) => {
  await startRun(page);
  await page.evaluate(() => { window.__GS.S.hp = 1; window.__GS.S.invuln = 0; });
  await addEnemy(page, 0, -0.4, 0);
  await step(page, 0.2);
  const types = await page.evaluate(() => window.__GS.events.history.map(e => e.type));
  expect(types.filter(t => t === 'run_started')).toHaveLength(1);
  expect(types.filter(t => t === 'run_finished')).toHaveLength(1);
  expect((await page.evaluate(() => window.__GS.events.history.find(e => e.type === 'run_finished'))).won).toBe(false);
  await page.evaluate(() => window.__GS.startGame());
  const after = await page.evaluate(() => window.__GS.events.history.map(e => e.type));
  expect(after.filter(t => t === 'run_finished')).toHaveLength(0);
  expect(after.filter(t => t === 'run_started')).toHaveLength(1);
});

test('SIM-09 live (non-manual) loop advances the sim in exact 1/60 s slices', async ({ page }) => {
  await page.goto('/index.html');
  await page.waitForFunction(() => document.body.classList.contains('ready') && !!window.__GS, null, { timeout: 90_000 });
  await page.evaluate(() => {
    const G = window.__GS;
    G.startGame();
    ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id));
    G.S.spawnClock = 1e9; G.clearEnemies();
  });
  await page.waitForFunction(() => window.__GS.sim.tick() >= 20, null, { timeout: 30_000 });
  const r = await page.evaluate(() => ({ ticks: window.__GS.sim.tick(), elapsed: window.__GS.S.elapsed }));
  expect(r.ticks).toBeGreaterThanOrEqual(20);
  expect(r.elapsed).toBeCloseTo(r.ticks / 60, 6);       // no frame-rate dependence: every step is exactly 1/60 s
});
