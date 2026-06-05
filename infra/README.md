# Varde CDN — Azure Infrastructure

Azure Blob Storage static website hosting for the Varde CSS framework CDN.

## Prerequisites

- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) installed
- Logged in: `az login`
- [Bun](https://bun.sh) installed (for building)

## Bootstrap (one-time setup)

Create the Azure resource group, storage account, enable static website hosting, **and** set up OIDC so GitHub Actions can deploy without storing secrets:

```sh
bash infra/bootstrap.sh
```

This creates:

- Resource group `rg-varde-cdn` in `norwayeast`
- Storage account `vardecdn` with CORS configured
- Static website hosting enabled on the `$web` container
- Microsoft Entra ID app registration `varde-cdn-deploy` with a federated credential for the `main` branch
- "Storage Blob Data Contributor" role assignment for the service principal

At the end, the script prints three values. Add them as **repository secrets** in GitHub (`Settings → Secrets and variables → Actions`):

| GitHub Secret           | Value from bootstrap output |
| ----------------------- | --------------------------- |
| `AZURE_CLIENT_ID`       | App (client) ID             |
| `AZURE_TENANT_ID`       | Tenant ID                   |
| `AZURE_SUBSCRIPTION_ID` | Subscription ID             |

You also need to create a **GitHub environment** called `production` (`Settings → Environments → New environment`). Both deploy workflows target this environment.

## CI/CD

Two workflows handle deployments automatically once bootstrap is done and the secrets are configured:

### `deploy-cdn.yml` — versioned CSS assets

Triggers on **GitHub release publication** (e.g. publishing the `v0.0.3` release tag). Can also be triggered manually from the Actions tab with an explicit version input.

Builds the packages and runs `infra/deploy.sh --version <version>`, uploading:

- `/v/<version>/styles.css` — immutable, cached 1 year
- `/v/<version>/themes.css` — immutable, cached 1 year
- `/v/latest/styles.css` — cached 5 minutes
- `/v/latest/themes.css` — cached 5 minutes

### `deploy-static.yml` — static assets

Triggers on **push to `main`** when files under `packages/static/**` change. Can also be triggered manually.

Syncs `packages/static/` to `/static/` on the CDN, cached for 1 week.

## Deploy (manual / local)

Build all packages and deploy a specific version:

```sh
bun run build && bash infra/deploy.sh --version 0.0.3
```

The deploy script uses the Azure CLI, which picks up your active `az login` session automatically.

## Cache strategy

| Path pattern     | Cache-Control                         |
| ---------------- | ------------------------------------- |
| `/v/<version>/*` | `public, max-age=31536000, immutable` |
| `/v/latest/*`    | `public, max-age=300`                 |
| `/static/*`      | `public, max-age=604800`              |

## CDN URL structure

Files are served from the storage account's static website endpoint. You can find the exact URL by running:

```sh
az storage account show --name vardecdn --query "primaryEndpoints.web" --output tsv
```

The structure is:

```
https://<endpoint>/
├── static/
│   └── fonts/
│       └── hanken-grotesk-variable.ttf
└── v/
    ├── latest/
    │   ├── styles.css
    │   └── themes.css
    └── 0.0.3/
        ├── styles.css
        └── themes.css
```

Fonts and other static assets are served from `/static/` and are independent of the CSS version.

## Future

- Azure Front Door / CDN for custom domain and edge caching
- Custom domain (e.g. `cdn.varde.dev`)
