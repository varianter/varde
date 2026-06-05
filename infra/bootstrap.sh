#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

RESOURCE_GROUP="${RESOURCE_GROUP:-rg-varde-cdn}"
LOCATION="${LOCATION:-norwayeast}"
STORAGE_ACCOUNT="vardecdn"

echo "==> Creating resource group '$RESOURCE_GROUP' in '$LOCATION'..."
az group create \
  --name "$RESOURCE_GROUP" \
  --location "$LOCATION" \
  --output none

echo "==> Deploying Bicep template..."
az deployment group create \
  --resource-group "$RESOURCE_GROUP" \
  --template-file infra/main.bicep \
  --parameters infra/main.bicepparam \
  --parameters location="$LOCATION" \
  --output none

echo "==> Enabling static website hosting..."
az storage blob service-properties update \
  --account-name "$STORAGE_ACCOUNT" \
  --static-website \
  --index-document index.html \
  --404-document index.html \
  --output none

STATIC_URL=$(az storage account show \
  --name "$STORAGE_ACCOUNT" \
  --resource-group "$RESOURCE_GROUP" \
  --query "primaryEndpoints.web" \
  --output tsv)

echo ""
echo "Bootstrap complete!"
echo "Static website URL: $STATIC_URL"

# ---------------------------------------------------------------------------
# OIDC / Federated Credentials for GitHub Actions
# ---------------------------------------------------------------------------

GITHUB_REPO="varianter/varde"
APP_NAME="varde-cdn-deploy"

echo ""
echo "==> Creating Microsoft Entra ID app registration '$APP_NAME'..."
APP_ID=$(az ad app create \
  --display-name "$APP_NAME" \
  --query appId \
  --output tsv)
echo "    App (client) ID: $APP_ID"

echo "==> Creating service principal for '$APP_NAME'..."
SP_OBJECT_ID=$(az ad sp create \
  --id "$APP_ID" \
  --query id \
  --output tsv)
echo "    Service principal object ID: $SP_OBJECT_ID"

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

echo "==> Assigning 'Storage Blob Data Contributor' role on '$RESOURCE_GROUP'..."
SUBSCRIPTION_ID=$(az account show --query id --output tsv)
az role assignment create \
  --assignee "$APP_ID" \
  --role "Storage Blob Data Contributor" \
  --scope "/subscriptions/${SUBSCRIPTION_ID}/resourceGroups/${RESOURCE_GROUP}" \
  --output none

TENANT_ID=$(az account show --query tenantId --output tsv)

echo ""
echo "==== GitHub Actions secrets ===="
echo "AZURE_CLIENT_ID:       $APP_ID"
echo "AZURE_TENANT_ID:       $TENANT_ID"
echo "AZURE_SUBSCRIPTION_ID: $SUBSCRIPTION_ID"