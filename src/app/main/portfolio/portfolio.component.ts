import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';
import { VisibleOnScrollDirective } from '../../visible-on-scroll.directive';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, VisibleOnScrollDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects: { imgsrc: string, name: string, environment: string, text: string }[]  = [
    { imgsrc: '/img/portfolio/joinPortfolio.png', name: 'Join', environment: 'Angular | TypeScript | HTML | CSS | Firebase', text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'},
    { imgsrc: '/img/portfolio/PoloPortfolio.png', name: 'El Pollo Loco', environment: 'JavaScript | HTML | CSS', text: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'},
    { imgsrc: '/img/portfolio/Pokedex.png', name: 'Pokédex', environment: 'JavaScript | HTML | CSS | Api', text: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.'},
    { imgsrc: '/img/portfolio/SimpleCRM.png', name: 'Simple CRM', environment: 'Angular | Firebase', text: 'A very Simple Customer Relationship Management system working with CRUD functionality.'}
    
  ]
  constructor(private translationService: LanguageService) {}

  ngOnInit() {
    const currentLanguage = this.translationService.getLanguage();
    this.translationService.translatePage(currentLanguage);
  }
}
