import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelector } from '../../components/language-selector/language-selector';

@Component({
  selector: 'app-basic-plan',
  standalone: true,
  imports: [RouterLink, LanguageSelector, TranslateModule],
  templateUrl: './basic-plan.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPlan { }
