import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (this.menuOpen && !targetElement.closest('.dropdown-menu') && !targetElement.closest('.burger-icon')) {
      this.menuOpen = false;
    }
  }

  constructor(private translationService: LanguageService) {}

  switchLanguage(language: string) {
    this.translationService.translatePage(language);
  }
}
