import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../service/Language';
import { TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [TranslateDirective],
  templateUrl: './language-selector.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelector {
  languageService = inject(LanguageService);
  currentLang = this.languageService.currentLang;
  languages = this.languageService.languages;

  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }
}
