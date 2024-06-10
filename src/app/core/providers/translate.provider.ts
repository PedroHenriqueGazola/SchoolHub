import type { EnvironmentProviders, Provider } from '@angular/core';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from '@services/i18n/i18n.service';

export function provideTranslate(): (EnvironmentProviders | Provider)[] {
  return [
    {
      provide: APP_INITIALIZER,
      useFactory: (i18nService: I18nService) => () => i18nService.initialize(),
      deps: [I18nService],
      multi: true,
    },
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en-US',
        useDefaultLang: true,
      }),
    ),
  ];
}
