import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguageSelector } from "../../components/language-selector/language-selector";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, LanguageSelector],
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Products { }
