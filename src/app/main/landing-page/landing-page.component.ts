import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  email: string = 'info@ufuk-oezsahin.de';

  constructor(private translationService: LanguageService) {}

  ngOnInit() {
    const currentLanguage = this.translationService.getLanguage();
    this.translationService.translatePage(currentLanguage);
  }
}
