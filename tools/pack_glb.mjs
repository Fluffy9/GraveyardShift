// Shrink a game GLB: drop UVs and normals (the game uses no textures and recomputes normals), weld, dedup, prune.
// Positions are left as float32 because the cloth shader reads raw vertex positions.
// Usage: node pack_glb.mjs in.glb out.glb
import { NodeIO } from '@gltf-transform/core';
import { weld, dedup, prune } from '@gltf-transform/functions';
const [, , inp, out] = process.argv;
const io = new NodeIO();
const doc = await io.read(inp);
for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives())
  for (const s of p.listSemantics()) if (s.startsWith('TEXCOORD') || s === 'NORMAL') p.setAttribute(s, null);
await doc.transform(weld(), dedup(), prune());
await io.write(out, doc);
