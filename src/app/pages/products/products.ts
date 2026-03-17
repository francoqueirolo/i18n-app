import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageSelector } from '../../components/language-selector/language-selector';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, LanguageSelector, TranslateModule],
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Products {
  translate = inject(TranslateService);
}
