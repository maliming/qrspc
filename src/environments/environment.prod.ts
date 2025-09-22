import { Environment } from '@abp/ng.core';

const baseUrl = 'http://192.168.1.174:4200';

const oAuthConfig = {
  //issuer: 'https://192.168.1.174:44390/', 生产环境需要启用--拓明程
  issuer: 'http://192.168.1.174:44348/',
  redirectUri: baseUrl,
  clientId: 'QRSPC_App',
  responseType: 'code',
  scope:
    'offline_access openid profile email phone AuthServer IdentityService AdministrationService AuditLoggingService GdprService ChatService SaasService FileManagementService LanguageService BaseSetService HangFireService MsaService SpcService IpenseeService',
  requireHttps: false,
  impersonation: {
    tenantImpersonation: true,
    userImpersonation: true,
  },
};

export const environment = {
  production: true,
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
      url: 'http://192.168.1.174:44350',
      rootNamespace: 'QRSPC',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge',
  },
} as Environment;
