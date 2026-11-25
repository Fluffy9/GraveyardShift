# Headless playtest population (tools/sim)

Plays the real Night Shift campaign through the real simulation (`stepSim`, no rendering, audio muted) with simulated
players, then reports where the funnel leaks. Used to calibrate the five difficulty tiers in `src/difficulty.js`.

```
./build.sh                                   # the runner plays dist/
node tools/sim/run.mjs --players 100 --tier 3          # one tier; writes tools/sim/out/run_t3.json + prints the funnel
node tools/sim/run.mjs --players 100 --tier 1 --out tools/sim/out/t1.json   # (compare.mjs reads out/t1..t5.json)
node tools/sim/run.mjs --players 20 --tier 5 --skill 0.95 --att 0.95        # fixed-trait cohort (e.g. "can an expert win this?")
node tools/sim/compare.mjs                   # markdown ladder of all five tiers
```
~35 s per 100 players on two cores. The same seed gives the same 100 people (and the same levels / RNG) every time, so
tiers are compared on identical players.

## The players
Each player has two traits in 0..1, drawn from a bell curve:

| trait | distribution | what it does |
|---|---|---|
| **skill** | N(0.50, 0.17), clipped | reaction (decision every 0.72 s at 0 → 0.18 s at 1), aim error when dashing, steering error, how heavily it weighs danger, how many dash lines it considers, whether it can see bullets / shockwaves at all, blunder rate |
| **attention** ("gen z") | N(0.45, 0.22), clipped, correlated 0.25 with skill | zone-outs (hands off the stick for ~0.3-1.7 s, every ~8 s at 0 → every ~70 s at 1), **rage-quit chance after each death** (~24% at 0, ~2% at 1, +6% per repeat death on the same level), and a total play-time budget (8-48 min) |

Policy (same for everyone, `bot.js`): score every dash line (kills along the path, Warden hits, danger left behind vs landing
in, setup value of flipping realm when nothing can be hit), steer by sampling 16 headings against a danger field
(enemies, bullets, Bell Imp rings, Warden attacks, walls), ranged goals per level kind (exit, wards, souls and shrine, Warden
alignment). Relics: smart pick (watch, key, then heal) for skilled players, partly random for novices. Players retry a level
from its entry state (`retryLevel`) until they quit.

## Tiers (tier 3 = the live numbers; `?tier=1..5` on the URL, `__GS.setTier(n)` in code)
| # | name | hearts | chaser speed | shot/toll cadence | enemies per round | ward hp / raider dmg | souls | Warden hp / attack cadence |
|---|---|---|---|---|---|---|---|---|
| 1 | Dusk | 5 | x0.76 | x1.5 slower | x0.6 | x1.8 / x0.6 | 16 | 7 / x1.5 slower |
| 2 | Nightfall | 4 | x0.90 | x1.18 slower | x0.85 | x1.25 / x0.85 | 21 | 10 / x1.18 slower |
| 3 | Midnight | 3 | x1 | x1 | x1 | x1 / x1 | 25 | 12 / x1 |
| 4 | Witching Hour | 3 | x1.08 | x1.14 faster | x1.18 | x0.82 / x1.12 | 27 | 13 / x1.11 faster |
| 5 | Dead of Night | 2 | x1.12 | x1.25 faster | x1.25 | x0.75 / x1.2 | 29 | 13 / x1.14 faster |

Round 1 of each level is never scaled. Specials (Choir, Bloom, Moth, Bell) are never cloned or dropped by the count scaling.
The player's own numbers (speed, dash distance / cooldown, arena) are the same in every tier.

## Caveats
* The bot is a model, not a human. Absolute percentages say "this game is N times harder for this population", not "N% of real
  players finish". Use it for the *shape* of the funnel and for comparing tiers.
* With 100 players one run has about +-5 points of sampling noise per tier; use `--players 300` for tighter numbers.
* The bot is weakest in the Catacombs (walls) and the Gardens (fountain, portals): some of that bottleneck is bot navigation.
