import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
  mail: string = "info@ufuk-oezsahin.de"
  fontSizeClass!: string;


  constructor(private translationService: LanguageService, private router: Router) {
    this.updateFontSizeClass(window.innerWidth);
  }

  ngOnInit() {
    const currentLanguage = this.translationService.getLanguage();
    this.translationService.translatePage(currentLanguage);

    this.scrollToTop();

    // Abonniere Router-Events, um bei Navigation-Ende zur Imprint-Seite zu scrollen
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.router.url === '/imprint') {
        this.scrollToTop();
      }
    });
  }
  private scrollToTop(): void {
    window.scrollTo(0, 0);
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