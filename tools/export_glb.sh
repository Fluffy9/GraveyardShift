#!/bin/sh
# Export sculpts from assets-src/ to glb/.
#   INK  ink-studio checkout (default: ../vendor/ink next to the repo)
#   GT   folder with @gltf-transform/core, @gltf-transform/functions and meshoptimizer installed (for assets with `slim`)
# Usage: tools/export_glb.sh name [name...]
# An asset's `slim: N` runs tools/slim_glb.mjs after export: drops UVs/normals, welds and simplifies to ~N triangles.
# ink-studio's own decimator stalls on thin parts (iron bars, chains), so those assets rely on it.
set -e
ROOT=$(cd "$(dirname "$0")/.." && pwd)
INK=${INK:-$ROOT/../vendor/ink}
GT=${GT:-$ROOT/../gt}
for n in "$@"; do
  info=$(node -e "const a=require('$ROOT/assets-src/assets.js').ASSETS['$n'];if(!a)process.exit(2);console.log([a.slim||0,a.slimErr||0.01,a.exportRes||'',a.exportTris||''].join(' '))")
  slim=$(echo "$info"|cut -d" " -f1); err=$(echo "$info"|cut -d" " -f2); res=$(echo "$info"|cut -d" " -f3); tris=$(echo "$info"|cut -d" " -f4); extra=""
  [ -n "$res" ] && extra="$extra --res $res"; [ -n "$tris" ] && extra="$extra --triangles $tris"
  (cd "$INK" && ASSET=$n node cli/ink-studio.js export-glb "$ROOT/assets-src/assets.js" --out "$ROOT/glb/$n.glb" --texture-size 0 $extra >/dev/null)
  if [ "$slim" != "0" ]; then
    cp "$ROOT/tools/slim_glb.mjs" "$GT/.slim_glb.mjs"
    node "$GT/.slim_glb.mjs" "$ROOT/glb/$n.glb" "$ROOT/glb/$n.glb" "$slim" "$err" >/dev/null
  fi
  echo "ok $n $(stat -c%s "$ROOT/glb/$n.glb")B"
done
