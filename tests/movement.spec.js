// MOV-01/02, DASH-01..04: movement and cross-dash geometry at the current tuning.
const { test, expect, boot, step, startRun, place, snap } = require('./boot');
const K = require('./constants');

test.beforeEach(async ({ page }) => { await boot(page); });

const displacement = async (page, keys, secs) => {
  await startRun(page);
  for (const k of keys) await page.keyboard.down(k);
  await step(page, secs);
  for (const k of keys) await page.keyboard.up(k);
  const s = await snap(page);
  return { dx: s.pos[0], dz: s.pos[1], dist: Math.hypot(s.pos[0], s.pos[1]) };
};

test('MOV-01 diagonal speed equals cardinal speed', async ({ page }) => {
  const cardinal = await displacement(page, ['KeyD'], 0.5);
  expect(cardinal.dist).toBeCloseTo(K.SPEED * 0.5, 1);
  expect(cardinal.dz).toBeCloseTo(0, 5);
  const diagonal = await displacement(page, ['KeyD', 'KeyS'], 0.5);
  expect(diagonal.dist).toBeCloseTo(cardinal.dist, 2);
  expect(diagonal.dx).toBeCloseTo(diagonal.dz, 5);
  const arrows = await displacement(page, ['ArrowLeft', 'ArrowUp'], 0.5);
  expect(arrows.dist).toBeCloseTo(cardinal.dist, 2);
});

test('MOV-02 opposing horizontal keys cancel', async ({ page }) => {
  const h = await displacement(page, ['KeyA', 'KeyD'], 0.5);
  expect(h.dx).toBeCloseTo(0, 5);
  expect(h.dz).toBeCloseTo(0, 5);
  const arrows = await displacement(page, ['ArrowLeft', 'ArrowRight'], 0.5);
  expect(arrows.dx).toBeCloseTo(0, 5);
  const v = await displacement(page, ['KeyW', 'KeyS'], 0.5);
  expect(v.dz).toBeCloseTo(0, 5);
});

test('DASH-01 cross from LIVING flips to SPIRIT immediately and arms the dash', async ({ page }) => {
  await startRun(page);
  expect((await snap(page)).realm).toBe(0);
  await page.keyboard.press('Space');
  const s = await snap(page);          // no stepping between press and read
  expect(s.realm).toBe(1);
  expect(s.crossed).toBe(true);
  expect(s.dashRemaining).toBeCloseTo(K.DASH_DURATION, 5);
  expect(s.dashCd).toBeCloseTo(K.DASH_COOLDOWN, 5);
  // HUD realm tag follows on the next tick
  await step(page, 1 / 60);
  await expect(page.locator('#realm span')).toHaveClass(/spr-tag_spirit/);
});

test('DASH-01b dash lasts 0.18s and travels 5.2 along facing', async ({ page }) => {
  await startRun(page, { x: 0, z: 0, fx: 1, fz: 0 });
  await page.keyboard.press('Space');
  await step(page, 0.15);
  expect((await snap(page)).dashRemaining).toBeGreaterThan(0);
  await step(page, 0.05);
  const s = await snap(page);
  expect(s.dashRemaining).toBe(0);
  expect(s.pos[0]).toBeCloseTo(K.DASH_DISTANCE, 2);
  expect(s.pos[1]).toBeCloseTo(0, 5);
});

test('DASH-02 cross while cooldown > 0 does nothing; ready again at 0.8s', async ({ page }) => {
  await startRun(page);
  await page.keyboard.press('Space');
  await page.keyboard.press('Space');         // mid-dash
  expect((await snap(page)).realm).toBe(1);
  await step(page, 0.3);                       // dash over, cooldown still running
  const mid = await snap(page);
  expect(mid.dashCd).toBeGreaterThan(0);
  await page.keyboard.press('Space');
  expect((await snap(page)).realm).toBe(1);
  await step(page, 0.49);                      // t = 0.79s: still cooling
  expect((await snap(page)).dashCd).toBeGreaterThan(0);
  await page.keyboard.press('Space');
  expect((await snap(page)).realm).toBe(1);
  await step(page, 0.05);                      // t = 0.84s: ready
  expect((await snap(page)).dashCd).toBe(0);
  await page.keyboard.press('Space');
  expect((await snap(page)).realm).toBe(0);
});

test('DASH-03 zero input dashes along the last facing vector', async ({ page }) => {
  // never moved: spawn facing is -z
  await startRun(page);
  await page.keyboard.press('Space');
  let s = await snap(page);
  expect(s.dashEnd[0]).toBeCloseTo(0, 5);
  expect(s.dashEnd[1]).toBeCloseTo(-K.DASH_DISTANCE, 5);

  // move right briefly, release, recentre (facing is kept) and cross with no keys held
  await startRun(page);
  await page.keyboard.down('KeyD'); await step(page, 0.1); await page.keyboard.up('KeyD');
  await page.evaluate(() => window.__GS.S.pos.set(0, 0));
  await page.keyboard.press('Space');
  s = await snap(page);
  expect(s.facing[0]).toBeCloseTo(1, 5);
  expect(s.dashEnd[0]).toBeCloseTo(K.DASH_DISTANCE, 5);
  expect(s.dashEnd[1]).toBeCloseTo(0, 5);
});

test('DASH-04 dash endpoint clamps inside the arena (no wall tunnelling)', async ({ page }) => {
  const maxX = K.ARENA_X - K.EDGE_PAD, maxZ = K.ARENA_Z - K.EDGE_PAD;
  for (const [x, z, fx, fz, ex, ez] of [
    [9, 0, 1, 0, maxX, 0],
    [-9, 0, -1, 0, -maxX, 0],
    [0, 7, 0, 1, 0, maxZ],
    [0, -7, 0, -1, 0, -maxZ],
  ]) {
    await startRun(page, { x, z, fx, fz });
    await page.keyboard.press('Space');
    const s0 = await snap(page);
    expect(s0.dashEnd[0]).toBeCloseTo(ex, 5);
    expect(s0.dashEnd[1]).toBeCloseTo(ez, 5);
    // never outside the arena at any frame of the dash
    const worst = await page.evaluate(() => {
      const { S } = window.__GS; let mx = 0, mz = 0;
      for (let i = 0; i < 30; i++) { window.__GS.stepManual(1 / 60, 1); mx = Math.max(mx, Math.abs(S.pos.x)); mz = Math.max(mz, Math.abs(S.pos.y)); }
      return [mx, mz];
    });
    expect(worst[0]).toBeLessThanOrEqual(maxX + 1e-6);
    expect(worst[1]).toBeLessThanOrEqual(maxZ + 1e-6);
  }
});

test('MOV-03 walking clamps to the arena edge', async ({ page }) => {
  await startRun(page, { x: 9, z: 0 });
  await page.keyboard.down('KeyD'); await step(page, 1); await page.keyboard.up('KeyD');
  expect((await snap(page)).pos[0]).toBeCloseTo(K.ARENA_X - K.EDGE_PAD, 5);
  await place(page, 0, 7);
  await page.keyboard.down('KeyS'); await step(page, 1); await page.keyboard.up('KeyS');
  expect((await snap(page)).pos[1]).toBeCloseTo(K.ARENA_Z - K.EDGE_PAD, 5);
});
