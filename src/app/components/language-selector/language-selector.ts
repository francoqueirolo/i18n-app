import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [],
  templateUrl: './language-selector.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelector {
  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);
}
