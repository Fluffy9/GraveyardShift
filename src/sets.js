// Level set dressing: decorative props placed around each arena. Props never sit on the combat floor and have no
// collision; gameplay geometry (walls, portals, pillars) lives in the level's own systems.
import * as THREE from 'three';
import { scene } from './render.js';
import { inst } from './assets.js';

const sets = {};
const group = id => {
  if (!sets[id]) { sets[id] = new THREE.Group(); sets[id].name = 'set:' + id; scene.add(sets[id]); }
  return sets[id];
};

// L1 / Overtime: the Old Churchyard keeps its layout; this adds the south gate, mourners by the chapel,
// ruined boundary walls outside the fence, and small memorials on the grass beds.
function dressChurchyard() {
  const g = group('old_churchyard');
  inst('gate', 0, 9.6, 0, 1, g);
  for (const s of [-1, 1]) {
    inst('statue_mourner', s * 3.5, -10.5, s * -0.25, 1, g);
    inst('candles', s * 2.75, -10.05, s * 0.6, 1, g);
    inst('urn', s * 3.7, 10.7, 0, 1, g);
    inst('urn', s * 10.7, -8.7, s * 0.4, 0.9, g);
  }
  inst('wall_ruin', -12.75, -3.6, Math.PI / 2, 1, g);
  inst('wall_ruin', 12.75, 1.4, -Math.PI / 2 + 0.08, 1, g);
  inst('wall_ruin', -8.1, -11.4, 0.05, 1, g);
  inst('wall_ruin', 8.4, -11.3, Math.PI - 0.1, 1, g);
  inst('rubble', -12.8, -0.6, 0.4, 1, g);
  inst('rubble', 12.8, 4.3, 2.2, 1, g);
  inst('rubble', -6.0, -11.7, 1.1, 0.9, g);
  inst('rubble', 6.2, 11.1, -0.7, 0.9, g);
  for (const [x, z, r] of [[-8.7, -4.7, 0.3], [9.3, 2.7, 1.2], [-9.1, 6.5, 2.0], [7.7, -7.9, 0.8]]) inst('candles', x, z, r, 1, g);
}

export function buildSets() { dressChurchyard(); }
export function showSet(id) { for (const k in sets) sets[k].visible = (k === id); }
