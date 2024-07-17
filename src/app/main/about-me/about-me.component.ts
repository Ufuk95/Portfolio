import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(private translationService: LanguageService) {}

  ngOnInit() {
    const currentLanguage = this.translationService.getLanguage();
    this.translationService.translatePage(currentLanguage);
  }
}
