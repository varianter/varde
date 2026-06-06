// ---------------------------------------------------------------------------
// Varde CDN – Azure Storage Account (static website hosting)
// ---------------------------------------------------------------------------
// Static website enablement is NOT possible purely in Bicep today.
// Run bootstrap.sh after deploying this template to enable it via CLI.
// ---------------------------------------------------------------------------

@description('Azure region for all resources.')
param location string = resourceGroup().location

@description('Name of the storage account (must be globally unique, 3-24 lowercase alphanumeric).')
param storageAccountName string

@description('Resource tags.')
param tags object = {}

// Storage Account
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageAccountName
  location: location
  tags: tags
  kind: 'StorageV2'
  sku: {
    name: 'Standard_LRS'
  }
  properties: {
    accessTier: 'Hot'
    supportsHttpsTrafficOnly: true
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: true
  }
}

// Blob service – CORS rules so CSS / fonts can be loaded cross-origin
resource blobService 'Microsoft.Storage/storageAccounts/blobServices@2023-05-01' = {
  parent: storageAccount
  name: 'default'
  properties: {
    cors: {
      corsRules: [
        {
          allowedOrigins: ['*']
          allowedMethods: ['GET', 'HEAD']
          allowedHeaders: ['*']
          exposedHeaders: ['*']
          maxAgeInSeconds: 86400
        }
      ]
    }
  }
}

// Front Door wiring — deployed to shared-rg so it can attach to the shared profile
module cdn './varde-cdn.bicep' = {
  scope: resourceGroup('shared-rg')
  name: 'vardeCdnModule'
  params: {
    // primaryEndpoints.web is 'https://<host>/' — strip scheme and trailing slash
    storageStaticWebsiteHostname: replace(replace(storageAccount.properties.primaryEndpoints.web, 'https://', ''), '/', '')
  }
}

// ---------------------------------------------------------------------------
// Outputs
// ---------------------------------------------------------------------------

output storageAccountName string = storageAccount.name

@description('Primary static website endpoint (available after static website is enabled via CLI).')
output staticWebsiteUrl string = storageAccount.properties.primaryEndpoints.web

output resourceGroupName string = resourceGroup().name

@description('Copy this into vardeDomainValidationToken in shared-infrastructure dns-zone params, then redeploy.')
output vardeDomainValidationToken string = cdn.outputs.vardeDomainValidationToken
