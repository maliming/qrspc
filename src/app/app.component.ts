import { Component, OnInit } from '@angular/core';
import { GdprCookieConsentComponent } from '@volo/abp.ng.gdpr/config';
import { DynamicLayoutComponent, ReplaceableComponentsService } from '@abp/ng.core';
import { LoaderBarComponent } from '@abp/ng.theme.shared';
import { NavItemsComponent } from './nav-items/nav-items.component';
import { eThemeBasicComponents, eUserMenuItems } from '@abp/ng.theme.basic';
 

@Component({
  selector: 'app-root',
  standalone:true,
  template: `
    <abp-loader-bar />
    <abp-dynamic-layout />
    <abp-gdpr-cookie-consent />
  `,
  imports: [LoaderBarComponent, DynamicLayoutComponent, GdprCookieConsentComponent],
})

export class AppComponent {
  constructor(private replaceableComponents: ReplaceableComponentsService) {

     this.replaceableComponents.add({
        key: eThemeBasicComponents.NavItems,
        component: NavItemsComponent,        
      });
  }
   // injected ReplaceableComponentsService

  
}
