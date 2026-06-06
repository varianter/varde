#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

RESOURCE_GROUP="${RESOURCE_GROUP:-rg-varde-cdn}"
LOCATION="${LOCATION:-norwayeast}"
STORAGE_ACCOUNT="vardecdn"

echo "==> Creating resource group '$RESOURCE_GROUP' (no-op if it already exists)..."
az group create \
  --name "$RESOURCE_GROUP" \
  --location "$LOCATION" \
  --output none

echo "==> Deploying Bicep template..."
DEPLOY_OUTPUT=$(az deployment group create \
  --resource-group "$RESOURCE_GROUP" \
  --template-file infra/main.bicep \
  --parameters infra/main.bicepparam \
  --parameters location="$LOCATION" \
  --output json)

echo "==> Enabling static website hosting (no-op if already enabled)..."
az storage blob service-properties update \
  --account-name "$STORAGE_ACCOUNT" \
  --static-website \
  --index-document index.html \
  --404-document index.html \
  --output none

VALIDATION_TOKEN=$(echo "$DEPLOY_OUTPUT" | jq -r '.properties.outputs.vardeDomainValidationToken.value // empty')

echo ""
echo "Infrastructure deploy complete!"

if [ -n "$VALIDATION_TOKEN" ]; then
  echo ""
  echo "==== Front Door domain validation ===="
  echo "If varde.variant.dev is not yet verified, add this TXT record to the variant.dev DNS zone:"
  echo ""
  echo "  Name:   _dnsauth.varde"
  echo "  Value:  $VALIDATION_TOKEN"
fi
