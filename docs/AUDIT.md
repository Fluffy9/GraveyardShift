# Audit: live build vs BUILD_SPEC v0.2

Branch `v2`, base `main` @ `3fa7cd3` (since merged with main @ `d975255`; test numbers below were taken before that merge and must be re-run). Decision recorded: **live tuning wins over the spec's proposed table**
(speed 6.5, dash 5.2 m / 0.18 s / 0.8 s cooldown, refund 0.18, floor 0.12, invuln 1.1; `tests/constants.js` stays the oracle).
Rule: keep whatever is native to the live game unless there is a good reason to change it.
Internal buffer stays 480x270 (16:9); the spec's 640x360 is treated as nominal.

## Test baseline (system Chrome, software GL, `SKIP_CLIPS=1` build)
77 passed, 2 failed, 36 skipped (4.8 min, desktop + 640x360 window + touch projects).
- **Failing (pre-existing on `main`):** `E2E-02` in `tests/session.spec.js` on desktop and window. It expects the title overlay to contain
  `PRESS ENTER`; the page now renders `PRESS Enter` (the key is a styled icon span, so the text is not upper-cased). Test or copy needs aligning.
- **Skipped:** the contract cases in `tests/spec-pending.spec.js` (ROUND, RELIC, EXIT, E2E-01, SCORE-04, REALM-02, PROJ-02) plus touch/visual skips.
- **Not measured:** frame rate, frame times, memory and triangle counts. Software GL cannot give meaningful numbers, so PERF-01 needs real hardware.

## Spec vs reality
| Area | Spec | Live build | Gap |
|---|---|---|---|
| Mode | Night Shift: authored rounds, relic, exit | Endless 180 s survival; win = timer reaches 0 | Rounds, intermission, relics, exit, level complete absent |
| Spawning | Authored formations, deterministic, >=3 m from player | `Math.random` edge spawns, pacing caps by elapsed time | Replace/sit beside with a round director |
| Simulation | Fixed 60 Hz step, seeded RNG, injected clock | Variable dt (<= 50 ms) with hit-stop scaling; `Math.random` throughout sim code | Needs clock + RNG injection |
| Events | Emitted event stream, render/audio read-only | Direct calls into HUD/sfx/particles from game logic | Needs event emitter |
| Entities | Stable IDs, SPAWNING/ACTIVE/BANISHED | Object refs; `spawn` timer acts as SPAWNING; banished = removed | No IDs or explicit lifecycle |
| Inactive enemies | Visible, harmless, no pursuit | Visible, harmless, **drift toward player at 0.25 u/s** | Keep drift (owner decision); REALM-02 spec test gets rewritten to match |
| Dash | Swept capsule r=0.45, once per enemy, blocked by solid monuments | Swept segment, hit radius 0.85, once per enemy (`dashHit`), arena clamp only | No solid obstacles; radius differs (live wins) |
| Movement | Normalised diagonals, opposite keys cancel, no mid-dash steering | Matches | None |
| Combo/score | No x8 cap, 3 s window, 100 x chain | Matches (no cap) | SCORE-04 only needs its skip rewritten |
| HP/invuln | 3 HP, 1 s invuln | 3 HP, 1.1 s | Live wins |
| Pickups, armored ghost, turret | Required | None | New systems |
| Arena | 24 x 22 m nominal, solid monuments | Playable area ~20.4 x 16 (ARENA_X/Z = 10.2/8) | No blockers yet |
| Tutorial tips | n/a | Blocking tips freeze the sim (state `tutorial`) | Keep |
| Audio / cinematics | Audio Director, CutsceneDirector | Synth sfx + music, no scenes | Out of scope for now |

## Proposed order (agreed in chat)
1. Simulation foundation: fixed-step clock, seeded RNG, event emitter, tuning moved to one config. No behaviour change; suite stays green.
2. Level 1 round director (3 authored rounds, 5 s intermission); unskip ROUND-*.
3. Relics, chapel exit, level complete; unskip RELIC-*, EXIT-*, E2E-01.
4. Pickups, armored ghost, turret experiment (turret lethality pending a decision).
