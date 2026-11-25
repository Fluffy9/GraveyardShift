// Merge several GLBs into one scene (used for the hero lantern parts). Usage: node merge_glb.mjs out.glb a.glb b.glb ...
import { NodeIO } from '@gltf-transform/core';
import { mergeDocuments, unpartition } from '@gltf-transform/functions';
const [, , out, ...ins] = process.argv;
const io = new NodeIO();
const doc = await io.read(ins[0]);
const scene = doc.getRoot().listScenes()[0];
for (const f of ins.slice(1)) {
  const other = await io.read(f);
  const map = mergeDocuments(doc, other);
  for (const s of other.getRoot().listScenes()) for (const n of s.listChildren()) scene.addChild(map.get(n));
}
for (const s of doc.getRoot().listScenes()) if (s !== scene) s.dispose();
await doc.transform(unpartition());
await io.write(out, doc);
console.log('merged', ins.length);
