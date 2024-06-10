import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import dayjs from '@others/dayjs';
import { LANGUAGES, type Language } from './i18n.type';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  public language = signal<Language | null>(null);

  public constructor(private readonly translateService: TranslateService) {}

  public initialize(): void {
    this.setTranslations();
    this.setLanguage();

    if (!this.language()) {
      return;
    }

    this.translateService.use(this.language()!.code).subscribe(() => {
      dayjs.locale(this.language()?.dateCode);
    });
  }

  private setTranslations(): void {
    for (const language of Object.values(LANGUAGES)) {
      this.translateService.setTranslation(
        language.code,
        language.translations,
      );
    }
  }

  private setLanguage(): void {
    const browserLanguage = this.translateService.getBrowserCultureLang();
    const language = Object.values(LANGUAGES).find(
      language => language.code === browserLanguage,
    );

    this.language.set(language || LANGUAGES['en-US']);
  }
}
