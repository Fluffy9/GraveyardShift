// Shared Playwright helpers. Simulation is advanced ONLY through window.__GS.stepManual (no sleeps).
const base = require('@playwright/test');
const { expect } = base;

// Fails any test that raised an uncaught page error (E2E-02: boot with no pageerror).
const test = base.test.extend({
  pageErrors: [async ({ page }, use) => {
    const errors = [];
    page.on('pageerror', e => errors.push(String(e)));
    await use(errors);
    expect(errors, 'uncaught page errors').toEqual([]);
  }, { auto: true }],
});

const FRAME = 1 / 60;

// Load dist/index.html, wait for body.ready + __GS, then take over the loop (manual stepping).
async function boot(page) {
  await page.goto('/index.html');
  await page.waitForFunction(() => document.body.classList.contains('ready') && !!window.__GS, null, { timeout: 90_000 });
  // stepManual(0) flips the game into manual mode so real rAF time can never advance the sim.
  await page.evaluate(() => window.__GS.stepManual(0, 1));
}

// Advance the simulation by `seconds` in fixed 1/60 frames (one tick per frame).
function step(page, seconds, dt = FRAME) {
  return page.evaluate(([secs, d]) => {
    const n = Math.round(secs / d);
    for (let i = 0; i < n; i++) window.__GS.stepManual(d, 1);
  }, [seconds, dt]);
}

// Start a fresh run in a controlled arena: no enemies, no random spawns, tutorial tips pre-dismissed
// (unless `tips` is passed), player at the arena centre facing -z (up the screen).
// `mode`: 'night' | 'endless'. Tutorial tips only fire in Night Shift.
function startRun(page, { tips = false, mode, x = 0, z = 0, fx = 0, fz = -1 } = {}) {
  return page.evaluate(([withTips, m, px, pz, dx, dz]) => {
    const G = window.__GS;
    G.startGame(m ? { mode: m } : undefined);
    G.clearEnemies();
    if (!withTips) ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id));
    G.S.spawnClock = 1e9;
    G.S.pos.set(px, pz); G.S.facing.set(dx, dz);
  }, [tips, mode || null, x, z, fx, fz]);
}

// Re-seed the controlled arena after something (e.g. pressing R) restarted the run.
function quiet(page) {
  return page.evaluate(() => {
    const G = window.__GS;
    G.clearEnemies();
    ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id));
    G.S.spawnClock = 1e9;
  });
}

const place = (page, x, z, fx = 0, fz = -1) =>
  page.evaluate(([a, b, c, d]) => { window.__GS.S.pos.set(a, b); window.__GS.S.facing.set(c, d); }, [x, z, fx, fz]);
const addEnemy = (page, x, z, realm, wisp = false) =>
  page.evaluate(([a, b, c, d]) => { window.__GS.addEnemy(a, b, c, d); }, [x, z, realm, wisp]);
const addProjectile = (page, x, z, dx, dz, realm) =>
  page.evaluate(a => { window.__GS.addProjectile(...a); }, [x, z, dx, dz, realm]);
const setState = (page, patch) =>
  page.evaluate(p => { Object.assign(window.__GS.S, p); }, patch);

function snap(page) {
  return page.evaluate(() => {
    const { S, enemies, projectiles } = window.__GS;
    return {
      state: S.state, elapsed: S.elapsed, hp: S.hp, score: S.score, combo: S.combo, realm: S.realm,
      banished: S.banished, crossed: S.crossed,
      dashCd: S.dashCd, dashRemaining: S.dashRemaining, invuln: S.invuln,
      pos: [S.pos.x, S.pos.y], facing: [S.facing.x, S.facing.y],
      dashEnd: [S.dashEnd.x, S.dashEnd.y],
      enemies: enemies.map(e => ({ x: e.pos.x, z: e.pos.y, realm: e.realm, wisp: e.wisp })),
      projectiles: projectiles.length,
    };
  });
}

// Count writes to localStorage `gs_best` (finish() writes it exactly once per game-over).
function countFinishCalls(page) {
  return page.evaluate(() => {
    window.__finishCalls = 0;
    const orig = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) { if (k === 'gs_best') window.__finishCalls++; return orig.call(this, k, v); };
  });
}
const finishCalls = page => page.evaluate(() => window.__finishCalls);

module.exports = {
  test, expect, boot, step, startRun, quiet, place, addEnemy, addProjectile, setState, snap,
  countFinishCalls, finishCalls, FRAME,
};
