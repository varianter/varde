#!/usr/bin/env bash
# Run once per environment to set up OIDC-based authentication for GitHub Actions.
# Safe to re-run: skips app registration if one with the same name already exists.
set -euo pipefail

GITHUB_REPO="varianter/varde"
APP_NAME="varde-cdn-deploy"
RESOURCE_GROUP="${RESOURCE_GROUP:-rg-varde-cdn}"

SUBSCRIPTION_ID=$(az account show --query id --output tsv)
TENANT_ID=$(az account show --query tenantId --output tsv)

# ---------------------------------------------------------------------------
# App registration — skip if already exists
# ---------------------------------------------------------------------------
EXISTING_APP_ID=$(az ad app list --display-name "$APP_NAME" --query "[0].appId" --output tsv)

if [ -n "$EXISTING_APP_ID" ]; then
  echo "==> App '$APP_NAME' already exists (ID: $EXISTING_APP_ID). Skipping creation."
  APP_ID="$EXISTING_APP_ID"
else
  echo "==> Creating Microsoft Entra ID app registration '$APP_NAME'..."
  APP_ID=$(az ad app create \
    --display-name "$APP_NAME" \
    --query appId \
    --output tsv)
  echo "    App (client) ID: $APP_ID"

  echo "==> Creating service principal for '$APP_NAME'..."
  az ad sp create --id "$APP_ID" --output none

  echo "==> Creating federated credential for environment 'production' of '$GITHUB_REPO'..."
  az ad app federated-credential create \
    --id "$APP_ID" \
    --parameters "{
      \"name\": \"github-production\",
      \"issuer\": \"https://token.actions.githubusercontent.com\",
      \"subject\": \"repo:${GITHUB_REPO}:environment:production\",
      \"audiences\": [\"api://AzureADTokenExchange\"]
    }" \
    --output none
fi

# ---------------------------------------------------------------------------
# Role assignment — idempotent, Azure ignores duplicate assignments
# ---------------------------------------------------------------------------
echo "==> Assigning 'Storage Blob Data Contributor' on '$RESOURCE_GROUP'..."
az role assignment create \
  --assignee "$APP_ID" \
  --role "Storage Blob Data Contributor" \
  --scope "/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/${RESOURCE_GROUP}" \
  --output none 2>/dev/null || echo "    (role already assigned)"

echo ""
echo "==== GitHub Actions secrets ===="
echo "AZURE_CLIENT_ID:       $APP_ID"
echo "AZURE_TENANT_ID:       $TENANT_ID"
echo "AZURE_SUBSCRIPTION_ID: $SUBSCRIPTION_ID"
