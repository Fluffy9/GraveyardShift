// Slim an ink-studio GLB for the game: drop UVs/normals (no textures; the game recomputes normals),
// weld, simplify with meshoptimizer to a triangle budget, and keep vertex colors/materials.
// Usage: node slim.mjs in.glb out.glb targetTris [maxError]
import { NodeIO } from '@gltf-transform/core';
import { weld, simplify, dedup, prune } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';

const [, , inp, out, target = '1000', maxErr = '0.01'] = process.argv;
const io = new NodeIO();
const doc = await io.read(inp);
let before = 0;
for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) {
  before += p.getIndices().getCount() / 3;
  for (const s of p.listSemantics()) if (s.startsWith('TEXCOORD') || s === 'NORMAL') p.setAttribute(s, null);
}
await doc.transform(weld(), dedup());
await MeshoptSimplifier.ready;
const ratio = Math.min(1, Number(target) / before);
await doc.transform(simplify({ simplifier: MeshoptSimplifier, ratio, error: Number(maxErr), lockBorder: false }), prune());
let after = 0;
for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) after += p.getIndices().getCount() / 3;
await io.write(out, doc);
console.log(JSON.stringify({ before, after }));
