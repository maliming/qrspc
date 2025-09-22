import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'http://localhost:44348/',
  redirectUri: baseUrl,
  clientId: 'Angular',
  responseType: 'code',
  scope: 'offline_access openid profile email phone AuthServer IdentityService AdministrationService AuditLoggingService GdprService ChatService SaasService FileManagementService LanguageService BaseSetService HangFireService MsaService SpcService IpenseeService',
  requireHttps: false,
  impersonation: {
    tenantImpersonation: true,
    userImpersonation: true,
  },
};

export const environment = {
  production: false,
  application: {
    baseUrl: baseUrl,
    name: 'QRSPC',
  },
  localization: {
    defaultResourceName: 'QRSPC',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'http://localhost:44350',
      rootNamespace: 'QRSPC',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
