import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
  mail: string = "oezsahin95@icloud.com"
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
