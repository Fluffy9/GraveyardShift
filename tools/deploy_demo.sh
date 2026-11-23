#!/usr/bin/env bash
# Build from source and publish https://graveyard-shift.pupcakes.me
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

LOCK="${TMPDIR:-/tmp}/graveyard-shift-deploy.lock"
LOG="${TMPDIR:-/tmp}/graveyard-shift-deploy.log"
GLANCE_IMAGES="${GLANCE_IMAGES:-$HOME/Documents/Glance/images}"

exec 9>"$LOCK"
if ! flock -n 9; then
  echo "deploy already running (lock $LOCK)" >&2
  exit 0
fi

inject_meta() {
  local html="$1"
  local meta="$ROOT/deploy/social-meta.html"
  python3 - "$html" "$meta" <<'PY'
import pathlib
import sys

html_path, meta_path = map(pathlib.Path, sys.argv[1:])
text = html_path.read_text(encoding="utf-8")
meta = meta_path.read_text(encoding="utf-8").rstrip() + "\n"

start = text.find("<!-- social-meta -->")
if start != -1:
    end = text.find("<!-- /social-meta -->", start)
    if end != -1:
        text = text[:start] + text[end + len("<!-- /social-meta -->") :]

text = text.replace('<meta name="theme-color" content="#120e1a">\n', "", 1)
needle = "<title>Graveyard Shift — Demo</title>"
if needle not in text:
    raise SystemExit(f"title tag not found in {html_path}")

head = text.split("</head>", 1)[0]
if "og:title" not in head:
    text = text.replace(needle, meta + needle, 1)

html_path.write_text(text, encoding="utf-8")
print(f"meta injected → {html_path}")
PY
}

{
  echo "=== $(date -Is) deploy_demo start ==="

  if [[ ! -f package.json || ! -f build.sh ]]; then
    echo "missing package.json / build.sh" >&2
    exit 1
  fi

  if [[ ! -d node_modules/esbuild ]]; then
    echo "pnpm install"
    pnpm install --frozen-lockfile || pnpm install
  fi

  echo "building dist/"
  ./build.sh

  if [[ ! -f dist/index.html ]]; then
    echo "build failed: missing dist/index.html" >&2
    exit 1
  fi

  echo "syncing dist/ → build/web/"
  mkdir -p build/web
  rsync -a --delete dist/ build/web/

  echo "rounding title card"
  if [[ -f graveyard_shift_title_source.png ]]; then
    python3 "$ROOT/tools/round_title.py"
  elif [[ -f graveyard_shift_title.png ]]; then
    cp -f graveyard_shift_title.png graveyard_shift_title_source.png
    python3 "$ROOT/tools/round_title.py"
  else
    echo "warning: no title card PNG found" >&2
  fi

  if [[ -f graveyard_shift_title.png ]]; then
    cp -f graveyard_shift_title.png build/web/graveyard_shift_title.png
    if [[ -d "$GLANCE_IMAGES" ]]; then
      cp -f graveyard_shift_title.png "$GLANCE_IMAGES/graveyard_shift_title.png"
      echo "synced title → $GLANCE_IMAGES/graveyard_shift_title.png"
    fi
  fi

  inject_meta build/web/index.html

  echo "docker compose up"
  docker compose -f "$ROOT/docker-compose.yml" up -d --remove-orphans
  echo "=== $(date -Is) deploy_demo done → https://graveyard-shift.pupcakes.me ==="
} 2>&1 | tee -a "$LOG"
