#!/usr/bin/env bash
# Install a post-commit hook: on main, redeploy graveyard-shift.pupcakes.me in the background.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOOK="$ROOT/.git/hooks/post-commit"
mkdir -p "$ROOT/.git/hooks"
cat > "$HOOK" <<'HOOK'
#!/usr/bin/env bash
# Redeploy https://graveyard-shift.pupcakes.me after commits on main (GraveyardShift).
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || true)"
if [[ "$branch" != "main" && "$branch" != "master" ]]; then
  exit 0
fi
# Root commits have no parent, so diff-tree is empty — fall back to the commit tree.
if git rev-parse --verify -q HEAD^ >/dev/null; then
  changed="$(git diff-tree --no-commit-id --name-only -r HEAD)"
else
  changed="$(git ls-tree -r --name-only HEAD)"
fi
# Skip if nothing that affects the live demo changed in this commit.
if printf '%s\n' "$changed" \
  | grep -Eq '^(dist/|deploy/|docker-compose\.yml|graveyard_shift_demo\.zip|graveyard_shift_title(_source)?\.png|tools/deploy_demo\.sh|tools/round_title\.py)'; then
  nohup "$ROOT/tools/deploy_demo.sh" >>"${TMPDIR:-/tmp}/graveyard-shift-deploy.log" 2>&1 &
  echo "graveyard-shift demo: redeploy started (log ${TMPDIR:-/tmp}/graveyard-shift-deploy.log)"
fi
HOOK
chmod +x "$HOOK" "$ROOT/tools/deploy_demo.sh" "$ROOT/tools/round_title.py"
echo "installed $HOOK"
echo "manual deploy: $ROOT/tools/deploy_demo.sh"
