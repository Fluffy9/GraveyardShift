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
node tools/build_instructions.mjs
pnpm exec esbuild src/main.js --bundle --minify --format=iife --outfile=dist/bundle.js --log-level=warning
mkdir -p dist
node -e '
const fs=require("fs");
const t=fs.readFileSync("src/index.template.html","utf8"), b=fs.readFileSync("dist/bundle.js","utf8");
fs.writeFileSync("dist/index.html", t.replace("/*__HUDCSS__*/", () => fs.readFileSync("src/hud.gen.css","utf8")).replace("/*__BUNDLE__*/", () => b.replace(/<\/script/gi,"<\\/script")));'
# Recorded score + world-switch whoosh (boss loops and boss_theme_loop.ogg stay in audio/ until a boss exists).
mkdir -p dist/audio
cp -f audio/melodic_clean_loop.ogg audio/melodic_spirit_reverb_loop.ogg audio/sfx_world_switch.ogg audio/title_minimal_melody_loop.ogg dist/audio/
# How-to menu GIFs (Playwright + ffmpeg). Skip with SKIP_CLIPS=1 for fast test rebuilds.
mkdir -p dist/clips
copy_existing_clips() {
  if [ -d clips ] && ls clips/*.gif >/dev/null 2>&1; then
    cp -f clips/*.gif dist/clips/
    echo "using existing clips/ → dist/clips/"
  else
    echo "warning: no clips available" >&2
  fi
}
if [ "${SKIP_CLIPS:-}" = "1" ]; then
  copy_existing_clips
else
  # Prefer the user-installed browser cache over any sandbox override.
  if ! env -u PLAYWRIGHT_BROWSERS_PATH node tools/record_clips.mjs; then
    echo "clip recording failed — falling back to existing clips/" >&2
    copy_existing_clips
  fi
fi
ls -la dist/index.html dist/clips 2>/dev/null || ls -la dist/index.html
