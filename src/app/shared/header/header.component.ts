import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  currentLanguage!: string;

  constructor(private translationService: LanguageService) {}

  ngOnInit() {
    this.currentLanguage = this.translationService.getLanguage();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.updateBodyScroll();
  }

  closeMenu() {
    this.menuOpen = false;
    this.updateBodyScroll();
  }

  private updateBodyScroll() {
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (this.menuOpen && !targetElement.closest('.dropdown-menu') && !targetElement.closest('.burger-icon')) {
      this.menuOpen = false;
      this.updateBodyScroll();
    }
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translationService.translatePage(language);
  }
}
