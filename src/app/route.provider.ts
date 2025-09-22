import { eLayoutType, RoutesService } from '@abp/ng.core';
import { provideAppInitializer, inject } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  provideAppInitializer(() => {
    configureRoutes();
  }),
];

function configureRoutes() {
  const routes = inject(RoutesService);
  routes.add([
    // {
    //   path: '/',
    //   name: 'QRSPC::Menu:Home',
    //   iconClass: 'fas fa-home',
    //   order: 1,
    //   layout: eLayoutType.application,
    // },
    {
      path: '/dashboard',
      name: 'QRSPC::Menu:Dashboard',
      iconClass: 'fas fa-chart-line',
      order: 2,
      layout: eLayoutType.application,
      requiredPolicy: 'AdministrationService.Dashboard.Host  || AdministrationService.Dashboard.Tenant',
    },
  ]);
}
