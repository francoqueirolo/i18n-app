import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private cookie = inject(SsrCookieService);
  private translate = inject(TranslateService);

  currentLang = signal('en');
  readonly languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'it', flag: '🇮🇹', name: 'Italiano' },
  ];

  constructor() {
    this.initLanguage();
  }

  private initLanguage() {
    const lang = this.cookie.get('lang') || 'en';
    this.changeLanguage(lang);
  }

  changeLanguage(lang: string) {
    this.cookie.set('lang', lang);
    this.translate.use(lang).subscribe(() => {
      this.currentLang.set(lang);
    });
  }
}
