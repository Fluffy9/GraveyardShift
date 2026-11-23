// DASH-05..09 and SCORE-01..03: swept-path banishing, cooldown refund, combo scoring.
// SCORE-04 (x8 cap) is NOT asserted: the live combo has no cap (see spec-pending.spec.js).
const { test, expect, boot, step, startRun, place, addEnemy, setState, snap } = require('./boot');
const K = require('./constants');

test.beforeEach(async ({ page }) => { await boot(page); });

// Step one 1ms tick at a time until the dash ends; report cooldown change on every tick that banished.
// Each tick runs the cooldown decrement (<= dt) first, then banish() subtracts 0.18 with a 0.12 floor.
const stepRecordingRefunds = page => page.evaluate(() => {
  const { S } = window.__GS, out = [];
  for (let i = 0; i < 4000 && (i === 0 || S.dashRemaining > 0); i++) {
    const cd0 = S.dashCd, b0 = S.banished;
    window.__GS.stepManual(0.001, 1);
    if (S.banished > b0) { out.push({ kills: S.banished - b0, before: cd0, after: S.dashCd }); S.hitStop = 0; }  // skip slow-mo ticks
  }
  return out;
});

test('DASH-05 swept path banishes a destination-realm enemy that is not at the endpoint', async ({ page }) => {
  await startRun(page);                       // player (0,0) facing -z, realm 0
  await addEnemy(page, 0, -2.5, 1);           // SPIRIT enemy mid-path, 2.7 from the endpoint (0,-5.2)
  await page.keyboard.press('Space');
  const s0 = await snap(page);
  expect(Math.hypot(s0.enemies[0].x - s0.dashEnd[0], s0.enemies[0].z - s0.dashEnd[1])).toBeGreaterThan(0.85);
  await step(page, 0.25);
  const s = await snap(page);
  expect(s.enemies).toHaveLength(0);
  expect(s.banished).toBe(1);
  expect(s.score).toBe(100);
  expect(s.pos[1]).toBeCloseTo(-K.DASH_DISTANCE, 2);
});

test('DASH-06 origin-realm enemy on the path is ignored', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 0, -2.5, 0);           // LIVING enemy; the dash lands in SPIRIT
  await page.keyboard.press('Space');
  await step(page, 0.25);
  const s = await snap(page);
  expect(s.enemies).toHaveLength(1);
  expect(s.banished).toBe(0);
  expect(s.score).toBe(0);
  expect(s.hp).toBe(K.START_HP);
});

test('DASH-07 two destination-realm enemies on the path are both banished with two score events', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 0, -2, 1);
  await addEnemy(page, 0, -4, 1);
  await page.keyboard.press('Space');
  await step(page, 0.4);
  const s = await snap(page);
  expect(s.enemies).toHaveLength(0);
  expect(s.banished).toBe(2);
  expect(s.score).toBe(100 + 200);            // x1 then x2
  expect(s.combo).toBe(2);
});

test('DASH-08 an enemy overlapping many frames is hit and refunds exactly once', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 0, -1.5, 1);
  await page.keyboard.press('Space');
  const refunds = await stepRecordingRefunds(page);
  expect(refunds).toHaveLength(1);
  expect(refunds[0].kills).toBe(1);
  const drop = refunds[0].before - refunds[0].after;
  expect(drop).toBeGreaterThanOrEqual(K.CD_REFUND - 1e-9);
  expect(drop).toBeLessThanOrEqual(K.CD_REFUND + 0.001 + 1e-9);   // + at most that tick's own decay
  await step(page, 0.3);                       // linger on the spot where the enemy died
  const s = await snap(page);
  expect(s.banished).toBe(1);
  expect(s.score).toBe(100);
  expect(await page.evaluate(() => window.__GS.S.dashHit.size)).toBe(1);
});

test('DASH-09 three kills in one dash refund the cooldown three times', async ({ page }) => {
  await startRun(page);
  for (const z of [-1.4, -1.6, -1.8]) await addEnemy(page, 0, z, 1);
  await page.keyboard.press('Space');
  const refunds = await stepRecordingRefunds(page);
  expect(refunds.reduce((n, r) => n + r.kills, 0)).toBe(3);
  for (const r of refunds) {
    const drop = r.before - r.after;
    expect(drop).toBeGreaterThanOrEqual(r.kills * K.CD_REFUND - 1e-9);
    expect(drop).toBeLessThanOrEqual(r.kills * K.CD_REFUND + 0.001 + 1e-9);
  }
  expect((await snap(page)).score).toBe(100 + 200 + 300);
});

test('DASH-09b refund respects the 0.12 cooldown floor', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 0, -1.5, 1);
  await page.keyboard.press('Space');
  await setState(page, { dashCd: 0.2 });       // 0.2 - 0.18 would be 0.02: must clamp to the floor
  const refunds = await stepRecordingRefunds(page);
  expect(refunds).toHaveLength(1);
  expect(refunds[0].after).toBeCloseTo(K.CD_FLOOR, 9);
});

// ---------- scoring ----------
// Kill one enemy dead ahead with a fresh cross; returns once the dash has finished.
async function killAhead(page, enemyRealm) {
  await place(page, 0, 0, 0, -1);
  await addEnemy(page, 0, -2.5, enemyRealm);
  await page.keyboard.press('Space');
  await step(page, 0.25);
}

test('SCORE-01 first banish is +100 at x1', async ({ page }) => {
  await startRun(page);
  await killAhead(page, 1);
  const s = await snap(page);
  expect(s.score).toBe(100);
  expect(s.combo).toBe(1);
});

test('SCORE-02 second banish inside the combo window is +200 at x2', async ({ page }) => {
  await startRun(page);
  await killAhead(page, 1);                    // SPIRIT kill, player now SPIRIT
  expect((await snap(page)).score).toBe(100);
  await step(page, 0.45);                      // cooldown (0.8 - 0.18 refund) is back; chain (3s) still alive
  const mid = await snap(page);
  expect(mid.dashCd).toBe(0);
  expect(mid.combo).toBe(1);
  await killAhead(page, 0);                    // cross back to LIVING through a LIVING enemy
  const s = await snap(page);
  expect(s.score).toBe(100 + 200);
  expect(s.combo).toBe(2);
});

test('SCORE-03 a kill after the combo window restarts at x1', async ({ page }) => {
  await startRun(page);
  await killAhead(page, 1);
  expect((await snap(page)).combo).toBe(1);
  await step(page, K.COMBO_WINDOW + 0.2);      // chain expires
  expect((await snap(page)).combo).toBe(0);
  await killAhead(page, 0);
  const s = await snap(page);
  expect(s.score).toBe(100 + 100);
  expect(s.combo).toBe(1);
});
