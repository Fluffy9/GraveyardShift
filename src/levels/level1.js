// Level 1, The Old Churchyard: three authored rounds (BUILD_SPEC v0.2 section 6).
// Coordinates are arena metres: x left/right (+-10.2), z north/south (+-8; chapel north = -z, gate south = +z).
// The player starts at (0, 6.5) facing north. realm: 0 = LIVING, 1 = SPIRIT.
//
// Deviation from the spec, kept from the live game: Round 1 is three SPIRIT ghosts, not LIVING. The player starts
// in LIVING, so a single Space dash north crosses into SPIRIT and banishes the whole line. The spec itself flags
// that LIVING-first enemies would need a cross out and back before the first kill.
const W = (realm, x, z) => ({ kind: 'wanderer', realm, pos: [x, z] });
const O = (realm, x, z) => ({ kind: 'wisp', realm, pos: [x, z] });

export const LEVEL1 = Object.freeze({
  id: 'old_churchyard',
  name: 'The Old Churchyard',
  rounds: [
    // a staggered line north of the start (staggered so the camera shows three ghosts, not one stack):
    // one dash north takes all three
    { spawns: [W(1, -0.4, 3.4), W(1, 0.4, 2.1), W(1, -0.4, 0.8)] },
    // three LIVING on the west, two SPIRIT on the east: forces a realm change mid-round
    { spawns: [W(0, -6, -4), W(0, -6, -2.5), W(0, -6, -1), W(1, 6, -3), W(1, 6, -1.5)] },
    // four wanderers and two wisps, split across both realms
    { spawns: [W(0, -5, -5), W(0, 5, -5), W(1, -4, 2), W(1, 4, 2), O(0, -7, -6), O(1, 7, -6)] },
  ],
});
