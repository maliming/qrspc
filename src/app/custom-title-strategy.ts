// custom-title-strategy.ts
import { effect, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DISABLE_PROJECT_NAME, LocalizationService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class CustomTitleStrategy extends TitleStrategy {
  protected readonly title = inject(Title);
  protected readonly localizationService = inject(LocalizationService);
  protected readonly disableProjectName = inject(DISABLE_PROJECT_NAME, { optional: true });
  protected routerState: RouterStateSnapshot;

  languageChange = toSignal(this.localizationService.languageChange$);

  constructor() {
    super();
    effect(() => {
      if (this.languageChange()) {
        this.updateTitle(this.routerState);
      }
    });
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    this.routerState = routerState;
    const title = this.buildTitle(routerState);

    const projectName = this.localizationService.instant({
      key: 'LanguageService::AppName',
      defaultValue: 'QRSPC',
    });

    if (!title) {
      return this.title.setTitle(projectName);
    }

    let localizedText = this.localizationService.instant({ key: title, defaultValue: title });
    if (!this.disableProjectName) {
      localizedText += ` | ${projectName}`;
    }

    this.title.setTitle(localizedText);
  }
}
