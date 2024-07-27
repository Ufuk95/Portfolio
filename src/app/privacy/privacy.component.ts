import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  mail: string = "info@ufuk-oezsahin.de";
  fontSizeClass!: string;

  constructor(private translationService: LanguageService) {
    this.updateFontSizeClass(window.innerWidth);
  }

  ngOnInit() {
    const currentLanguage = this.translationService.getLanguage();
    this.translationService.translatePage(currentLanguage);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateFontSizeClass(event.target.innerWidth);
  }

  updateFontSizeClass(width: number) {
    if (width >= 3840) {
      this.fontSizeClass = 'font-size-xl';
    } else if (width >= 2560) {
      this.fontSizeClass = 'font-size-lg';
    } else if (width >= 1920) {
      this.fontSizeClass = 'font-size-md';
    } else {
      this.fontSizeClass = 'font-size-sm';
    }
  }
}