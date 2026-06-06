# Varde — Azure Infrastructure

Azure Blob Storage static website as the origin, fronted by a shared Azure Front Door that serves `varde.variant.dev`.

## Files

| File | Purpose |
|---|---|
| `main.bicep` / `main.bicepparam` | Storage account + CORS. Calls `varde-cdn.bicep` as a module. |
| `varde-cdn.bicep` | Wires varde into the shared Front Door in `shared-rg` (origin, custom domain, route). |
| `deploy-infra.sh` | Deploys the Bicep template. Run whenever infra files change. |
| `bootstrap.sh` | One-time OIDC/auth setup for GitHub Actions. |

Asset uploads live at `deploy-assets.sh` in the repo root.

## Prerequisites

- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) installed and logged in (`az login`)
- The shared Front Door profile (`fd-shared-cdn`) already deployed in `shared-rg` via [shared-infrastructure](https://github.com/varianter/shared-infrastructure)

## First-time setup

**1. Deploy shared-infrastructure** (if not already done) — this creates the Front Door profile and the `varde` CNAME in the `variant.dev` DNS zone.

**2. Deploy varde infrastructure:**

```sh
bash infra/deploy-infra.sh
```

This creates the storage account in `rg-varde-cdn`, enables static website hosting, and attaches varde to the shared Front Door. If `varde.variant.dev` hasn't been verified yet, the script prints a TXT record — add it manually to the `variant.dev` DNS zone in Azure to let Front Door issue the managed TLS certificate.

**3. Set up GitHub Actions auth** (once per environment):

```sh
bash infra/bootstrap.sh
```

Prints three values — add them as repository secrets in GitHub (`Settings → Secrets and variables → Actions`):

| Secret | Value |
|---|---|
| `AZURE_CLIENT_ID` | App (client) ID |
| `AZURE_TENANT_ID` | Tenant ID |
| `AZURE_SUBSCRIPTION_ID` | Subscription ID |

Also create a GitHub environment called `production` (`Settings → Environments`).

## Ongoing

Run `deploy-infra.sh` whenever `main.bicep` or `varde-cdn.bicep` changes. It is idempotent.

Asset deploys (versioned CSS releases) are handled automatically by the `deploy-release` workflow via `deploy-assets.sh`.

## Cache strategy

| Path | Cache-Control |
|---|---|
| `/v/<version>/*` | `public, max-age=31536000, immutable` |
| `/v/latest/*` | `public, max-age=300` |
| `/static/*` | `public, max-age=604800` |
