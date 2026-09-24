#!/usr/bin/env bash
set -euo pipefail

STORAGE_ACCOUNT="vardecdn"

upload_root() {
  local src="$1" name="$2" content_type="$3"

  az storage blob upload \
    --account-name "$STORAGE_ACCOUNT" \
    --container-name '$web' \
    --file "$src" \
    --name "$name" \
    --content-type "$content_type" \
    --content-cache-control "public, max-age=300" \
    --overwrite true \
    --auth-mode login \
    --only-show-errors
}

# Sync the docs build to $web/docs/, removing blobs that no longer exist
# in the source.
az storage blob sync \
  --account-name "$STORAGE_ACCOUNT" \
  --container '$web' \
  --source docs/dist/docs/ \
  --destination docs \
  --delete-destination true \
  --auth-mode login \
  --only-show-errors

# sync can't set cache-control or the .md content-type, so apply both in a
# single pass over the files it just uploaded.
while IFS= read -r -d '' rel; do
  blob="docs/${rel#docs/dist/docs/}"
  args=(--content-cache-control "public, max-age=300")
  [[ "$rel" == *.md ]] && args+=(--content-type "text/markdown; charset=utf-8")
  az storage blob update \
    --account-name "$STORAGE_ACCOUNT" \
    --container-name '$web' \
    --name "$blob" \
    "${args[@]}" \
    --auth-mode login \
    --only-show-errors
done < <(find docs/dist/docs -type f -print0)

# Root-level files live outside docs/, so upload them individually.
upload_root "docs/dist/index.html" "index.html" "text/html"
upload_root "docs/dist/robots.txt" "robots.txt" "text/plain; charset=utf-8"
upload_root "docs/dist/llms.txt" "llms.txt" "text/plain; charset=utf-8"

# Front Door purge stays off until the deploy service principal has
# CDN Profile Contributor on shared-rg. When enabled:
#   az afd endpoint purge --resource-group shared-rg --profile-name fd-shared-cdn \
#     --endpoint-name shared-endpoint --domains varde.variant.dev --content-paths '/*'
