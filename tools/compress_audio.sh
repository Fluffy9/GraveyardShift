#!/usr/bin/env bash
# Re-encode shipped music loops from audio/masters/ to ~96 kbps Vorbis.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
mkdir -p audio/masters
# q:a 2 ≈ 96 kbps stereo. Keep sample rate and channel layout.
encode() {
  local name="$1"
  local src="audio/masters/$name.ogg"
  local dst="audio/$name.ogg"
  if [[ ! -f "$src" ]]; then
    if [[ -f "$dst" ]]; then
      cp -n "$dst" "$src"
    else
      echo "missing $src" >&2
      return 1
    fi
  fi
  ffmpeg -y -hide_banner -loglevel error -i "$src" -c:a libvorbis -q:a 2 "$dst.tmp.ogg"
  mv "$dst.tmp.ogg" "$dst"
  ls -la "$dst"
}
for f in title_minimal_melody_loop melodic_clean_loop melodic_spirit_reverb_loop boss_theme_loop; do
  [[ -f "audio/masters/$f.ogg" || -f "audio/$f.ogg" ]] || continue
  encode "$f"
done
