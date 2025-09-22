import { provideAbpCore, withOptions } from '@abp/ng.core';
import { provideAccountAdminConfig } from '@volo/abp.ng.account/admin/config';
import {
  provideAbpThemeShared,
  withHttpErrorConfig,
  withValidationBluePrint,
} from '@abp/ng.theme.shared';
import { provideCommercialUiConfig } from '@volo/abp.commercial.ng.ui/config';
import { provideIdentityConfig } from '@volo/abp.ng.identity/config';
import { provideAbpOAuth } from '@abp/ng.oauth';
import { provideSettingManagementConfig } from '@abp/ng.setting-management/config';
import { provideFeatureManagementConfig } from '@abp/ng.feature-management';
import { provideAccountPublicConfig } from '@volo/abp.ng.account/public/config';
import { provideGdprConfig, withCookieConsentOptions } from '@volo/abp.ng.gdpr/config';
import { provideAuditLoggingConfig } from '@volo/abp.ng.audit-logging/config';
import { provideLanguageManagementConfig } from '@volo/abp.ng.language-management/config';
import { registerLocale } from '@volo/abp.ng.language-management/locale';
import { provideFileManagementConfig } from '@volo/abp.ng.file-management/config';
import { provideTextTemplateManagementConfig } from '@volo/abp.ng.text-template-management/config';
import { provideSaasConfig } from '@volo/abp.ng.saas/config';
import { provideChatConfig } from '@volo/abp.ng.chat/config';
import { provideOpeniddictproConfig } from '@volo/abp.ng.openiddictpro/config';
import { HttpErrorComponent, provideThemeLeptonX } from '@volosoft/abp.ng.theme.lepton-x';
import { provideSideMenuLayout } from '@volosoft/abp.ng.theme.lepton-x/layouts';
import { provideLogo, withEnvironmentOptions } from '@volo/ngx-lepton-x.core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, TitleStrategy } from '@angular/router';
import { environment } from '../environments/environment';
import { APP_ROUTES } from './app.routes';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { BaseSetServiceConfigModule } from 'base-set-service/config';
import { CustomTitleStrategy } from './custom-title-strategy';
import { HangFireServiceConfigModule } from 'hang-fire-service/config';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MsaServiceConfigModule } from 'msa-service/config';
import { SpcserviceConfigModule } from 'spcservice/config';
import { IpenseeServiceConfigModule } from 'ipensee-service/config';

registerLocaleData(zh);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    APP_ROUTE_PROVIDER,
    provideAnimations(),
    provideAbpCore(
      withOptions({
        environment,
        registerLocaleFn: registerLocale(),
        localizations: [
          {
            culture: 'en',
            resources: [
              {
                resourceName: 'QRSPC',
                texts: {
                  'Menu:Home': 'Home',
                  Login: 'Login',
                  'Menu:Dashboard': 'Dashboard',
                  LongWelcomeMessage:
                    'Welcome to the application. This is a startup project based on the ABP framework. For more information visit',
                  Welcome: 'Welcome',
                  'Menu:IpenseeService': 'Ipensee',
                },
              },
            ],
          },
          {
            culture: 'zh-Hans',
            resources: [
              {
                resourceName: 'QRSPC',
                texts: {
                  'Menu:Home': '首页',
                  Login: '登录',
                  'Menu:Dashboard': '仪表板',
                  LongWelcomeMessage:
                    '欢迎使用本应用程序。这是一个基于ABP框架的启动项目。欲了解更多信息，请访问',
                  Welcome: '欢迎',
                  'Menu:IpenseeService': '分析页面',
                },
              },
            ],
          },
        ],
      }),
    ),
    provideAbpOAuth(),
    provideIdentityConfig(),
    provideSettingManagementConfig(),
    provideFeatureManagementConfig(),
    provideAccountAdminConfig(),
    provideAccountPublicConfig(),
    provideCommercialUiConfig(),
    provideThemeLeptonX(),
    provideSideMenuLayout(),
    provideAbpThemeShared(
      withHttpErrorConfig({
        errorScreen: {
          component: HttpErrorComponent,
          forWhichErrors: [401, 403, 404, 500],
          hideCloseIcon: true,
        },
      }),
      withValidationBluePrint({
        wrongPassword: 'Please choose 1q2w3E*',
      }),
    ),
    provideLogo(withEnvironmentOptions(environment)),
    provideGdprConfig(
      withCookieConsentOptions({
        cookiePolicyUrl: '/gdpr-cookie-consent/cookie',
        privacyPolicyUrl: '/gdpr-cookie-consent/privacy',
      }),
    ),
    {
      provide: TitleStrategy,
      useExisting: CustomTitleStrategy,
    },
    provideLanguageManagementConfig(),
    provideFileManagementConfig(),
    provideSaasConfig(),
    provideChatConfig(),
    provideAuditLoggingConfig(),
    provideOpeniddictproConfig(),
    provideTextTemplateManagementConfig(),
    importProvidersFrom(BaseSetServiceConfigModule.forRoot()),
    importProvidersFrom(HangFireServiceConfigModule.forRoot()),
    importProvidersFrom(MsaServiceConfigModule.forRoot()),
    importProvidersFrom(SpcserviceConfigModule.forRoot()),
    importProvidersFrom(IpenseeServiceConfigModule.forRoot()),
  ],
};
