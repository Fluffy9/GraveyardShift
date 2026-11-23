#!/bin/sh
# Regenerate GLBs (optional: pass --assets), embed them, bundle, and inline into dist/index.html
set -e
cd "$(dirname "$0")"
if [ "$1" = "--assets" ]; then
  for a in caretaker lantern wanderer wisp grave_a grave_b grave_c fence pillar lamp tree; do
    (cd ../vendor/ink && ASSET=$a node cli/ink-studio.js export-glb ../../game/assets-src/assets.js --out ../../game/glb/$a.glb --texture-size 0 >/dev/null)
  done
  (cd ../vendor/ink && ASSET=chapel node cli/ink-studio.js export-glb ../../game/assets-src/assets.js --out ../../game/glb/chapel.glb --texture-size 0 --res 0.12 --triangles 2500 >/dev/null)
fi
node -e '
const fs=require("fs");const out={};
for(const f of fs.readdirSync("glb")) if(f.endsWith(".glb")) out[f.slice(0,-4)]=fs.readFileSync("glb/"+f).toString("base64");
fs.writeFileSync("src/assets.gen.js","export default "+JSON.stringify(out)+";\n");'
if [ -x .venv/bin/python ]; then
  .venv/bin/python tools/build_hud.py
else
  python3 -I tools/build_hud.py
fi
pnpm exec esbuild src/main.js --bundle --minify --format=iife --outfile=dist/bundle.js --log-level=warning
mkdir -p dist
node -e '
const fs=require("fs");
const t=fs.readFileSync("src/index.template.html","utf8"), b=fs.readFileSync("dist/bundle.js","utf8");
fs.writeFileSync("dist/index.html", t.replace("/*__HUDCSS__*/", () => fs.readFileSync("src/hud.gen.css","utf8")).replace("/*__BUNDLE__*/", () => b.replace(/<\/script/gi,"<\\/script")));'
ls -la dist/index.html
