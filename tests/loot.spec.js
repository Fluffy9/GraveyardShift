// LOOT-01..: found items and world pickups (src/loot.js): the Ward Bubble, pickups, decoy lanterns, the Spellbook turret,
// the Bellstone, Stillwater, drops and the bag. Level setup mirrors spirits.spec.js; stepping is sim-only and deterministic.
const { test, expect, boot, step } = require('./boot');

test.beforeEach(async ({ page }) => { await boot(page); });

async function arena(page, level = 'old_churchyard') {
  await page.evaluate(lv => {
    const G = window.__GS;
    G.loadLevel(lv);
    ['intro', 'cross', 'wisp', 'moth', 'bloom', 'choir', 'bell'].forEach(id => G.S.notes.add(id));
    G.S.spawnClock = 1e9; G.clearEnemies(); G.S.hp = 2; G.S.invuln = 0; G.S.realm = 0;
    G.S.pos.set(0, 4); G.S.facing.set(0, -1);
    G.director.phase = 'hold';
  }, level);
}
const stat = page => page.evaluate(() => { const G = window.__GS; return { hp: G.S.hp, bubble: G.loot.bubble, invuln: G.S.invuln, inv: { ...G.loot.inv }, freeze: G.loot.freeze }; });

test('LOOT-01 the Ward Bubble absorbs exactly one hit, keeps your chain, then pops', async ({ page }) => {
  await arena(page);
  await page.evaluate(() => { const G = window.__GS; G.S.combo = 4; G.S.comboTimer = 9; G.loot.bubble = 1; G.addEnemy(0, 3.9, 0); });
  await step(page, 0.1);
  let s = await stat(page);
  expect(s).toMatchObject({ hp: 2, bubble: 0 });
  expect(s.invuln).toBeGreaterThan(0);
  expect(await page.evaluate(() => window.__GS.S.combo)).toBe(4);
  expect(await page.evaluate(() => window.__GS.events.history.filter(e => e.type === 'bubble_popped').length)).toBe(1);
  await page.evaluate(() => { const G = window.__GS; G.S.invuln = 0; G.enemies[0].pos.set(0, 3.95); });   // no bubble left: the next hit costs a heart
  await step(page, 0.1);
  expect((await stat(page)).hp).toBe(1);
});

test('LOOT-02 pickups: heart heals (never past full), shield bubbles, parcel fills the bag up to three', async ({ page }) => {
  await arena(page);
  await page.evaluate(() => { const G = window.__GS; G.addPickup('heart', 0, 4.2, 0); G.addPickup('shield', 0.2, 4.2, 0); G.addPickup('parcel', -0.2, 4.2, 0, 'lure_brass'); });
  await step(page, 0.1);
  let s = await stat(page);
  expect(s).toMatchObject({ hp: 3, bubble: 1 }); expect(s.inv.lure_brass).toBe(1);
  // at full hearts a Heart stays on the ground; a full stack leaves the Parcel alone
  await page.evaluate(() => { const G = window.__GS; G.grant('lure_brass', 5); G.addPickup('heart', 0, 4.2, 0); G.addPickup('parcel', 0, 4.1, 0, 'lure_brass'); });
  await step(page, 0.2);
  s = await stat(page);
  expect(s.hp).toBe(3); expect(s.inv.lure_brass).toBe(3);
  expect(await page.evaluate(() => window.__GS.loot.pickups.filter(p => !p.taken).length)).toBe(2);   // heart and parcel stay on the ground
});

test('LOOT-03 a pickup lies in one realm: you collect it only while standing in that realm', async ({ page }) => {
  await arena(page);
  await page.evaluate(() => window.__GS.addPickup('parcel', 0, 4.2, 1, 'bellstone'));
  await step(page, 0.2);
  expect((await stat(page)).inv.bellstone).toBe(0);
  await page.evaluate(() => { window.__GS.S.realm = 1; });
  await step(page, 0.2);
  expect((await stat(page)).inv.bellstone).toBe(1);
});

test('LOOT-04 drops are deterministic per seed and scale with the tier', async ({ page }) => {
  const run = (tier, seed) => page.evaluate(([t, sd]) => {
    const G = window.__GS; G.setTier(t); G.setNextSeed(sd); G.startGame({ mode: 'night' });
    const out = [];
    for (let i = 0; i < 300; i++) { const p = G.dropFrom({ pos: { x: 0, y: 0 } }, { souls: true }); if (p) { out.push(p.kind + (p.item ? ':' + p.item : '')); G.loot.pickups.length = 0; } }
    return out;
  }, [tier, seed]);
  const a = await run(3, 1234), b = await run(3, 1234), dusk = await run(1, 1234), dead = await run(5, 1234);
  expect(a).toEqual(b);
  expect(a.length).toBeGreaterThan(15); expect(a.length).toBeLessThan(90);          // roughly 1 in 10
  expect(dusk.length).toBeGreaterThan(dead.length);
  for (const k of ['heart', 'parcel']) expect(a.some(x => x.startsWith(k))).toBe(true);
});

test('LOOT-05 a lantern decoy draws ghosts off the player and breaks when bitten through', async ({ page }) => {
  await arena(page);
  await page.evaluate(() => { const G = window.__GS; G.S.hp = 9; G.grant('lure_paper'); G.S.pos.set(0, 6); G.S.facing.set(0, -1); G.useItem('lure_paper'); G.addEnemy(5, 0, 0); });
  const before = await page.evaluate(() => ({ lure: window.__GS.loot.lures[0].pos.toArray(), e: window.__GS.enemies[0].pos.toArray() }));
  await step(page, 1.0);
  const mid = await page.evaluate(() => { const G = window.__GS, l = G.loot.lures[0], e = G.enemies[0]; return { gap: e.pos.distanceTo(l.pos), hp: l.hp, toPlayer: e.pos.distanceTo(G.S.pos) }; });
  expect(mid.gap).toBeLessThan(Math.hypot(before.e[0] - before.lure[0], before.e[1] - before.lure[1]) - 1.5);   // walked toward the lantern
  await step(page, 6);
  const end = await page.evaluate(() => ({ lures: window.__GS.loot.lures.length, broke: window.__GS.events.history.filter(e => e.type === 'lure_broken').length }));
  expect(end).toEqual({ lures: 0, broke: 1 });                                                                    // paper lantern: ~3 s of biting
});

test('LOOT-06 lanterns: tiers hold longer, two at a time, other-realm ghosts and shielded Choirs ignore them', async ({ page }) => {
  await arena(page, 'catacombs');
  await page.evaluate(() => { const G = window.__GS; G.S.hp = 9; ['lure_paper', 'lure_brass', 'lure_spirit'].forEach(k => G.grant(k, 3)); });
  const ok = await page.evaluate(() => { const G = window.__GS; return [G.useItem('lure_paper'), G.useItem('lure_brass'), G.useItem('lure_spirit')]; });
  expect(ok).toEqual([true, true, false]);                                                                         // max two in play
  const hp = await page.evaluate(() => window.__GS.loot.lures.map(l => l.max));
  expect(hp[1]).toBeGreaterThan(hp[0]);
  const t = await page.evaluate(() => { const G = window.__GS, l = G.loot.lures[0], lp = l.pos;
    const other = G.addEnemy(lp.x + 3, lp.y, 1), shielded = G.addEnemy(lp.x - 3, lp.y, 0, false, 'choir'), plain = G.addEnemy(lp.x, lp.y + 3, 0);
    return { other: G.loot.lures.length, ids: [other.id, shielded.id, plain.id] }; });
  await step(page, 0.5);
  const moved = await page.evaluate(ids => {
    const G = window.__GS, l = G.loot.lures[0]; const d = id => G.enemies.find(e => e.id === id).pos.distanceTo(l.pos);
    return ids.map(d);
  }, t.ids);
  expect(moved[0]).toBeGreaterThan(2.5);          // other realm: barely drifts
  expect(moved[1]).toBeGreaterThan(2.5);          // shielded Choir: heads for the player, not the lantern
  expect(moved[2]).toBeLessThan(2.4);             // an ordinary ghost closes in on it
});

test('LOOT-07 the Spellbook turret shoves ghosts back and stuns them, then expires', async ({ page }) => {
  await arena(page);
  await page.evaluate(() => { const G = window.__GS; G.S.hp = 9; G.grant('spellbook'); G.S.pos.set(0, 4); G.useItem('spellbook'); G.S.pos.set(0, 8); G.addEnemy(0, 2.2, 0); });
  const d0 = await page.evaluate(() => window.__GS.enemies[0].pos.distanceTo(window.__GS.loot.turrets[0].pos));
  await step(page, 0.7);
  const d1 = await page.evaluate(() => window.__GS.enemies[0].pos.distanceTo(window.__GS.loot.turrets[0].pos));
  expect(d1).toBeGreaterThan(d0 + 1);
  expect(await page.evaluate(() => window.__GS.events.history.filter(e => e.type === 'turret_pulse').length)).toBeGreaterThanOrEqual(1);
  await step(page, 10);
  expect(await page.evaluate(() => window.__GS.loot.turrets.length)).toBe(0);
});

test('LOOT-08 the Bellstone tolls once: a wide shove that also clears shots', async ({ page }) => {
  await arena(page);
  await page.evaluate(() => { const G = window.__GS; G.S.hp = 9; G.grant('bellstone'); G.S.pos.set(0, 4); G.useItem('bellstone'); G.S.pos.set(0, 9); G.addEnemy(3, 4, 0); G.addProjectile(1.5, 4, -1, 0, 0); });
  await step(page, 0.5);
  const o = await page.evaluate(() => { const G = window.__GS; return { d: G.enemies[0].pos.distanceTo(G.loot.turrets[0]?.pos ?? { x: 0, y: 4, distanceTo: 0 }), shots: G.projectiles.length, tolls: G.events.history.filter(e => e.type === 'bellstone_tolled').length }; });
  expect(o.tolls).toBe(1); expect(o.shots).toBe(0);
  await step(page, 3);
  expect(await page.evaluate(() => window.__GS.loot.turrets.length)).toBe(0);
});

test('LOOT-09 Stillwater freezes the active realm\'s ghosts and shots, then releases them', async ({ page }) => {
  await arena(page);
  await page.evaluate(() => { const G = window.__GS; G.S.hp = 9; G.addPickup('hourglass', 0, 4.1, 0); G.addEnemy(6, 0, 0); G.addProjectile(-6, 0, 1, 0, 0); });
  await step(page, 0.1);
  const a = await page.evaluate(() => ({ e: window.__GS.enemies[0].pos.toArray(), b: window.__GS.projectiles[0].pos.toArray() }));
  await step(page, 1.5);
  const b = await page.evaluate(() => ({ e: window.__GS.enemies[0].pos.toArray(), b: window.__GS.projectiles[0].pos.toArray() }));
  expect(b).toEqual(a);
  await step(page, 2.5);
  const c = await page.evaluate(() => window.__GS.enemies[0].pos.toArray());
  expect(c).not.toEqual(a.e);
});

test('LOOT-10 the bag: I opens it and freezes the sim, 1-5 use an item, a retry restores what you carried in', async ({ page }) => {
  await arena(page);
  await page.evaluate(() => { const G = window.__GS; G.S.hp = 9; G.grant('spellbook', 2); G.grant('lure_paper', 1); });
  await page.keyboard.press('KeyI');
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('bag');
  expect(await page.locator('.bag-row').count()).toBe(5);
  await expect(page.locator('.bag-row[data-item="bellstone"]')).toBeDisabled();
  const t0 = await page.evaluate(() => window.__GS.S.elapsed);
  await step(page, 0.5);                                                        // frozen while the bag is open
  expect(await page.evaluate(() => window.__GS.S.elapsed)).toBe(t0);
  await page.keyboard.press('Digit4');                                          // Spellbook
  const s = await stat(page);
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('playing');
  expect(s.inv.spellbook).toBe(1);
  expect(await page.evaluate(() => window.__GS.loot.turrets.length)).toBe(1);
  await page.keyboard.press('Tab'); await page.keyboard.press('Escape');       // Tab opens, Escape closes
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('playing');
  // retry restores the inventory the level was entered with
  await page.evaluate(() => { const G = window.__GS; G.retryLevel(); });
  expect((await stat(page)).inv.spellbook).toBe(0);
});

test('LOOT-11 the bag button shows in Night Shift and Overtime, with a count', async ({ page }) => {
  await page.evaluate(() => window.__GS.startGame({ mode: 'night' }));
  await arena(page);
  await page.evaluate(() => { window.__GS.grant('spellbook', 2); window.__GS.stepSim(1 / 60, 1); });
  await expect(page.locator('#bagbtn')).toBeVisible();
  await expect(page.locator('#bagbtn')).toHaveText(/BAG 2/);
  await page.locator('#bagbtn').click();
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('bag');
  await page.keyboard.press('Escape');
  await page.evaluate(() => { window.__GS.startGame({ mode: 'endless' }); window.__GS.stepSim(1 / 60, 1); });
  await expect(page.locator('#bagbtn')).toBeVisible();
});

test('LOOT-12 Soul Draw pulls scattered souls back to you in a souls level', async ({ page }) => {
  await arena(page, 'hollow_grounds');
  test.skip((await page.evaluate(() => window.__GS.campaign.level.kind)) !== 'souls', 'level order changed');
  await page.evaluate(() => {                                                         // take a hit while carrying 3 souls: they scatter round you
    const G = window.__GS, s = G.campaign.souls;
    G.S.hp = 9; G.S.pos.set(5, 3); G.S.invuln = 0; s.next = 1e9; s.carried = 3; G.addEnemy(5, 3.05, 0);
  });
  await step(page, 0.05);
  expect(await page.evaluate(() => ({ orbs: window.__GS.campaign.souls.orbs.length, carried: window.__GS.campaign.souls.carried }))).toEqual({ orbs: 3, carried: 0 });
  await page.evaluate(() => { const G = window.__GS; G.clearEnemies(); G.campaign.souls.lock = 0; G.addPickup('magnet', 5, 3.1, 0); });
  await step(page, 0.1);
  expect(await page.evaluate(() => window.__GS.loot.magnet)).toBeGreaterThan(3);
  await step(page, 0.8);
  expect(await page.evaluate(() => window.__GS.campaign.souls.carried)).toBe(3);      // all three flew in and were carried
});

test('LOOT-13 the bag panel fits inside the viewport on desktop, small windows and landscape phones', async ({ page }) => {
  await page.evaluate(() => window.__GS.startGame({ mode: 'night' }));
  await arena(page);
  await page.evaluate(() => { const G = window.__GS; G.grant('lure_paper'); G.grant('spellbook', 3); });
  for (const [w, h] of [[1280, 720], [640, 360], [844, 390], [568, 320]]) {
    await page.setViewportSize({ width: w, height: h });
    await page.evaluate(() => { const G = window.__GS; if (G.S.state !== 'bag') G.openBag(); });
    const r = await page.locator('.bag-panel').boundingBox();
    expect(r.y, `${w}x${h} top`).toBeGreaterThanOrEqual(-1); expect(r.y + r.height, `${w}x${h} bottom`).toBeLessThanOrEqual(h + 1);
    expect(r.x, `${w}x${h} left`).toBeGreaterThanOrEqual(-1); expect(r.x + r.width, `${w}x${h} right`).toBeLessThanOrEqual(w + 1);
    await page.evaluate(() => window.__GS.closeBag());
  }
});
