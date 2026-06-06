#!/usr/bin/env bash
set -euo pipefail

STORAGE_ACCOUNT="vardecdn"

# ---------------------------------------------------------------------------
# Parse arguments
# ---------------------------------------------------------------------------
VERSION=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --version=*) VERSION="${1#--version=}"; shift ;;
    --version)   VERSION="$2"; shift 2 ;;
    *) shift ;;
  esac
done

if [ -z "$VERSION" ]; then
  echo "Error: --version <semver> is required (e.g. --version 0.0.3)"
  exit 1
fi

# ---------------------------------------------------------------------------
# Verify source files exist
# ---------------------------------------------------------------------------
CSS_FILE="packages/css/dist/styles.css"
TOKENS_FILE="packages/tokens/dist/themes.css"

for f in "$CSS_FILE" "$TOKENS_FILE"; do
  if [ ! -f "$f" ]; then
    echo "Error: $f does not exist. Run 'bun run build' first."
    exit 1
  fi
done

# ---------------------------------------------------------------------------
# Helper: upload a single file with az CLI
# ---------------------------------------------------------------------------
upload_file() {
  local src="$1"
  local dest_path="$2"
  local cache_control="$3"
  local filename
  filename="$(basename "$src")"

  echo "  → $dest_path/$filename  (cache-control: $cache_control)"

  az storage blob upload \
    --account-name "$STORAGE_ACCOUNT" \
    --container-name '$web' \
    --file "$src" \
    --name "${dest_path}/${filename}" \
    --content-cache-control "$cache_control" \
    --overwrite true \
    --auth-mode login \
    --only-show-errors
}

# ---------------------------------------------------------------------------
# Upload versioned files  (/v/<version>/*)  — immutable, 1 year
# ---------------------------------------------------------------------------
echo ""
echo "Uploading versioned assets to /v/${VERSION}/ ..."
upload_file "$CSS_FILE"    "v/${VERSION}" "public, max-age=31536000, immutable"
upload_file "$TOKENS_FILE" "v/${VERSION}" "public, max-age=31536000, immutable"

# ---------------------------------------------------------------------------
# Upload latest files  (/v/latest/*)  — short-lived, 5 minutes
# ---------------------------------------------------------------------------
echo ""
echo "Uploading latest assets to /v/latest/ ..."
upload_file "$CSS_FILE"    "v/latest" "public, max-age=300"
upload_file "$TOKENS_FILE" "v/latest" "public, max-age=300"

echo ""
echo "Deploy complete!"
echo ""
echo "Versioned  (immutable):  v/${VERSION}/"
echo "Latest     (5 min TTL):  v/latest/"
