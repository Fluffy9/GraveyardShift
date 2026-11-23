// Current live tuning (src/config.js + src/game.js). These are the regression oracle,
// NOT the BUILD_SPEC.md table defaults (speed 5, dash 4 / 0.16 / 0.65).
module.exports = {
  SPEED: 6.5,
  DASH_DISTANCE: 5.2,
  DASH_DURATION: 0.18,
  DASH_COOLDOWN: 0.8,
  CD_REFUND: 0.18,       // cooldown refunded per banish
  CD_FLOOR: 0.12,        // refund never takes the cooldown below this
  ARENA_X: 10.2,
  ARENA_Z: 8.0,
  EDGE_PAD: 0.6,         // player/dash clamp inset from the arena edge
  INVULN_HIT: 1.1,       // invulnerability after taking a hit
  COMBO_WINDOW: 3,       // seconds a chain stays alive
  INACTIVE_DRIFT: 0.25,  // speed at which other-realm enemies still drift toward the player
  START_POS: [0, 6.5],
  START_HP: 3,
};
