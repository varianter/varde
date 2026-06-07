// Varde — Front Door wiring. Called as a module from main.bicep, scoped to shared-rg.
// References the shared Front Door profile and adds varde-specific origin/domain/route.

@description('Hostname of the storage static website (e.g. vardecdn.z1.web.core.windows.net).')
param storageStaticWebsiteHostname string

param frontDoorProfileName string = 'fd-shared-cdn'
param frontDoorEndpointName string = 'shared-endpoint'

resource profile 'Microsoft.Cdn/profiles@2024-02-01' existing = {
  name: frontDoorProfileName
}

resource endpoint 'Microsoft.Cdn/profiles/afdEndpoints@2024-02-01' existing = {
  parent: profile
  name: frontDoorEndpointName
}

resource originGroup 'Microsoft.Cdn/profiles/originGroups@2024-02-01' = {
  parent: profile
  name: 'og-varde'
  properties: {
    loadBalancingSettings: {
      sampleSize: 4
      successfulSamplesRequired: 3
      additionalLatencyInMilliseconds: 50
    }
    healthProbeSettings: {
      probePath: '/'
      probeRequestType: 'HEAD'
      probeProtocol: 'Http'
      probeIntervalInSeconds: 100
    }
  }
}

resource origin 'Microsoft.Cdn/profiles/originGroups/origins@2024-02-01' = {
  parent: originGroup
  name: 'origin-varde'
  properties: {
    hostName: storageStaticWebsiteHostname
    httpPort: 80
    httpsPort: 443
    originHostHeader: storageStaticWebsiteHostname
    priority: 1
    weight: 1000
    enabledState: 'Enabled'
  }
}

resource customDomain 'Microsoft.Cdn/profiles/customDomains@2024-02-01' = {
  parent: profile
  name: 'cdn-varde-variant-dev'
  properties: {
    hostName: 'varde.variant.dev'
    tlsSettings: {
      certificateType: 'ManagedCertificate'
      minimumTlsVersion: 'TLS12'
    }
  }
}

resource route 'Microsoft.Cdn/profiles/afdEndpoints/routes@2024-02-01' = {
  parent: endpoint
  name: 'route-varde'
  properties: {
    enabledState: 'Enabled'
    originGroup: {
      id: originGroup.id
    }
    ruleSets: []
    supportedProtocols: ['Http', 'Https']
    patternsToMatch: ['/*']
    cacheConfiguration: {
      queryStringCachingBehavior: 'UseQueryString'
      compressionSettings: {
        contentTypesToCompress: [
          'text/css'
          'application/javascript'
          'font/ttf'
          'font/woff'
          'font/woff2'
        ]
        isCompressionEnabled: true
      }
    }
    linkToDefaultDomain: 'Disabled'
    customDomains: [
      { id: customDomain.id }
    ]
  }
}

@description('Add this as vardeDomainValidationToken in shared-infrastructure dns-zone params, then redeploy.')
output vardeDomainValidationToken string = customDomain.properties.validationProperties.validationToken
