// Contract tests for BUILD_SPEC.md systems that do not exist in the live game yet.
// Each case is skipped, cites its row in TEST_PLAN.md, and must NOT be faked against the endless spawner.
// When the feature ships: replace the skip with a real test and (for SCORE-04 / REALM-02) flip the
// matching "current behavior" assertion in combat.spec.js / survival.spec.js.
// VIS-01 / VIS-02 are manual screenshot checks (TEST_PLAN.md) and intentionally have no automated case.
const { test } = require('./boot');

const pending = (id, title) => test.skip(`${id} ${title} [pending BUILD_SPEC; TEST_PLAN.md]`, async () => {});

// Rounds: tests/rounds.spec.js. Relics, exit, portals, wards, souls, boss: tests/campaign.spec.js.

// Full six-level run is not scripted end to end yet.
pending('E2E-01', 'a full Night Shift clears all six levels without a softlock');

// Rules where the spec differs from the live game
pending('SCORE-04', 'combo multiplier never exceeds x8 (live combo has no cap, so it is not asserted today)');
pending('REALM-02(spec)', 'inactive-realm enemy AI does not pursue or fire (live AI drifts at 0.25 u/s)');
pending('PROJ-02', "returning to a projectile's realm lets the existing projectile collide again");
