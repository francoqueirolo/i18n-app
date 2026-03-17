import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../service/Language';
import { TranslateDirective } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [TranslateDirective, FormsModule],
  templateUrl: './language-selector.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelector {
  languageService = inject(LanguageService);
  currentLang = this.languageService.currentLang;
  languages = this.languageService.languages;

  changeLanguage(code: string) {
    this.languageService.changeLanguage(code);
  }
}
