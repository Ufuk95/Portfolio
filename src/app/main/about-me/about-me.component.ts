import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';
import { VisibleOnScrollDirective } from '../../visible-on-scroll.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [VisibleOnScrollDirective], // Füge die Direktive hier hinzu
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private translationService: LanguageService) {}

  ngOnInit() {
    const currentLanguage = this.translationService.getLanguage();
    this.translationService.translatePage(currentLanguage);
  }
}
