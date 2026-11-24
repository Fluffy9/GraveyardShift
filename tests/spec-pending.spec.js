// Contract tests for BUILD_SPEC.md systems that do not exist in the live game yet.
// Each case is skipped, cites its row in TEST_PLAN.md, and must NOT be faked against the endless spawner.
// When the feature ships: replace the skip with a real test and (for SCORE-04 / REALM-02) flip the
// matching "current behavior" assertion in combat.spec.js / survival.spec.js.
// VIS-01 / VIS-02 are manual screenshot checks (TEST_PLAN.md) and intentionally have no automated case.
const { test } = require('./boot');

const pending = (id, title) => test.skip(`${id} ${title} [pending BUILD_SPEC; TEST_PLAN.md]`, async () => {});

// Rounds: implemented, see tests/rounds.spec.js

// Relics
pending('RELIC-01', 'clearing Round 3 opens the relic choice and stops combat');
pending('RELIC-02', 'Pocket Watch reduces base cooldown by 20%');
pending('RELIC-03', 'Flowers at max HP leaves HP at max');
pending('RELIC-04', 'choosing a relic twice ignores the second selection');

// Chapel exit
pending('EXIT-01', 'choosing a relic unlocks the chapel exit');
pending('EXIT-02', 'interacting with the locked chapel cannot complete the level');
pending('EXIT-03', 'interacting with the unlocked chapel fires LEVEL_COMPLETE once');

// Full run
pending('E2E-01', 'new run through all rounds reaches level complete with no softlock');

// Rules where the spec differs from the live game
pending('SCORE-04', 'combo multiplier never exceeds x8 (live combo has no cap, so it is not asserted today)');
pending('REALM-02(spec)', 'inactive-realm enemy AI does not pursue or fire (live AI drifts at 0.25 u/s)');
pending('PROJ-02', "returning to a projectile's realm lets the existing projectile collide again");
