#!/bin/sh
# Export sculpts from assets-src/ to glb/.
#   INK  ink-studio checkout (default: ../vendor/ink next to the repo)
#   GT   folder with @gltf-transform/core, @gltf-transform/functions and meshoptimizer installed (for assets with `slim`)
# Usage: tools/export_glb.sh name [name...]
# Per-asset options in assets-src: exportRes / exportTris / exportMethod override ink's sampling; `slim: N` runs
# tools/slim_glb.mjs after export (drops UVs/normals, welds, simplifies to ~N triangles) because ink's own decimator
# stalls on thin parts. When a primitive face lands exactly on the sampling grid ink reports an open seam; the export
# then retries with the resolution nudged off-grid.
set -e
ROOT=$(cd "$(dirname "$0")/.." && pwd)
INK=${INK:-$ROOT/../vendor/ink}
GT=${GT:-$ROOT/../gt}
for n in "$@"; do
  info=$(node -e "const a=require('$ROOT/assets-src/assets.js').ASSETS['$n'];if(!a)process.exit(2);console.log([a.slim||0,a.slimErr||0.01,a.exportRes||a.res,a.exportTris||'',a.exportMethod||''].join(' '))")
  slim=$(echo "$info"|cut -d" " -f1); err=$(echo "$info"|cut -d" " -f2); res=$(echo "$info"|cut -d" " -f3)
  tris=$(echo "$info"|cut -d" " -f4); meth=$(echo "$info"|cut -d" " -f5)
  extra=""; [ -n "$tris" ] && extra="$extra --triangles $tris"; [ -n "$meth" ] && extra="$extra --method $meth"
  ok=""
  for f in 1 1.037 0.963 1.081 0.927 1.13; do
    r=$(node -e "console.log(+($res*$f).toFixed(5))")
    if (cd "$INK" && ASSET=$n node cli/ink-studio.js export-glb "$ROOT/assets-src/assets.js" --out "$ROOT/glb/$n.glb" --texture-size 0 --res $r $extra >/dev/null 2>"$ROOT/.export_err"); then ok=$r; break; fi
  done
  if [ -z "$ok" ]; then echo "FAIL $n: $(tail -1 "$ROOT/.export_err")"; rm -f "$ROOT/.export_err"; continue; fi
  rm -f "$ROOT/.export_err"
  if [ "$slim" != "0" ]; then
    cp "$ROOT/tools/slim_glb.mjs" "$GT/.slim_glb.mjs"
    node "$GT/.slim_glb.mjs" "$ROOT/glb/$n.glb" "$ROOT/glb/$n.glb" "$slim" "$err" >/dev/null
  fi
  echo "ok $n res=$ok $(stat -c%s "$ROOT/glb/$n.glb")B"
done
