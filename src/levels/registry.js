// Night Shift campaign, six levels. Coordinates are arena metres (x, z) with z stored as Vector2.y.
import { LEVEL1 } from './level1.js';

const W = (realm, x, z) => ({ kind: 'wanderer', realm, pos: [x, z] });
const O = (realm, x, z) => ({ kind: 'wisp', realm, pos: [x, z] });

const GARDEN_R1 = [
  W(1, 8, -1.2), W(1, 8.4, 0), W(1, 8, 1.2),
  W(0, -4.6, 5.0), W(0, -4.6, -5.0),     // living pair kept well clear of the west start
  W(0, 5.5, 3.2), W(1, 5.5, -3.2),
];
export const GARDEN_NS_PORTALS = [-6.6, 6.6];
const line = (n, realm, x, z0) => Array.from({ length: n }, (_, i) => W(realm, x, z0 + (i - (n - 1) / 2) * 1.3));

export const LEVELS = [
  {
    id: 'old_churchyard', name: 'The Old Churchyard', kind: 'rounds', relic: true,
    start: [0, 6.5], facing: [0, -1], exit: [0, -6.6],
    rounds: LEVEL1.rounds,
  },
  {
    id: 'forgotten_gardens', name: 'Forgotten Gardens', kind: 'rounds', relic: true, portals: true,
    // second portal pair: north-south apertures either side of the conservatory; the fountain is a solid centrepiece
    portalsNS: GARDEN_NS_PORTALS, solids: [{ x: 0, z: 0, r: 1.25 }],
    start: [-8.2, 0], facing: [-1, 0], exit: [0, -6.6],
    rounds: [
      { spawns: GARDEN_R1 },
      { spawns: [...line(5, 0, -5, 0), ...line(5, 1, 5, 0)] },
      { spawns: [...line(5, 0, -4, -1), ...line(5, 1, 4, 1), O(0, -2, 5), O(1, 2, -5)] },
    ],
  },
  {
    id: 'catacombs', name: 'Catacombs', kind: 'rounds', relic: true, walls: true,
    start: [0, 6.2], facing: [0, -1], exit: [0, -6.6],
    rounds: [
      { spawns: [W(1, 0, -5.5), W(1, -1.2, -4.2), W(1, 1.2, -4.2), W(0, -7, 2), W(0, 7, 2)] },
      { spawns: [W(1, -7, -5), W(1, -7, 0), W(1, 7, -5), W(1, 7, 0), W(0, -7, 4), W(0, 7, 4), W(0, 0, 5.5), W(0, 0, -5.5)] },
      { spawns: [W(0, -7, 5), W(0, -7, 1), W(0, 7, 5), W(0, 7, 1), W(1, -7, -5), W(1, -7, -1), W(1, 7, -5), W(1, 7, -1), W(0, 0, 0), W(1, 1.5, 0)] },
    ],
  },
  {
    id: 'last_ward', name: 'The Last Ward', kind: 'wards', relic: true,
    start: [0, 6.2], facing: [0, -1], exit: [0, -6.6],
  },
  {
    id: 'hollow_grounds', name: 'Hollow Grounds', kind: 'souls', relic: true,
    start: [0, 5.5], facing: [0, -1], exit: [0, 0],
  },
  {
    id: 'bell_tower', name: 'The Bell Tower', kind: 'boss', relic: false,
    start: [0, 5.8], facing: [0, -1], exit: [0, 0],
  },
];

// Living = 0, Spirit = 1. Center x,z and full width/height.
export const CATACOMB_WALLS = [
  { x: -4, z: -3.5, w: 0.6, h: 4.8, realm: 0 },
  { x: -4, z: 3.5, w: 0.6, h: 4.8, realm: 1 },
  { x: 4, z: -3.5, w: 0.6, h: 4.8, realm: 1 },
  { x: 4, z: 3.5, w: 0.6, h: 4.8, realm: 0 },
  { x: 0, z: -2, w: 3.6, h: 0.6, realm: 1 },
  { x: 0, z: 2, w: 3.6, h: 0.6, realm: 0 },
];

export const WARD_SPOTS = [[-4.5, -3.5], [4.5, -3.5], [-4.5, 3.5], [4.5, 3.5]];
