import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';
import { VisibleOnScrollDirective } from '../../visible-on-scroll.directive';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, VisibleOnScrollDirective],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skillImages: { src: string, name: string }[] = [
    { src: '/img/icons/angular-icon.svg', name: 'Angular' },
    { src: '/img/icons/ts-icon.svg', name: 'Typescript' },
    { src: '/img/icons/js-icon.svg', name: 'Javascript' },
    { src: '/img/icons/html-icon.svg', name: 'HTML' },
    { src: '/img/icons/firebase-icon.svg', name: 'Firebase' },
    { src: '/img/icons/git-icon.svg', name: 'GIT' },
    { src: '/img/icons/css-icon.svg', name: 'CSS' },
    { src: '/img/icons/api-icon.svg', name: 'Rest-Api' },
    { src: '/img/icons/scrum.svg', name: 'Scrum' },
    { src: '/img/icons/materialDesign.svg', name: 'Material design' }
  ];

  constructor(private translationService: LanguageService) {}

  ngOnInit() {
    const currentLanguage = this.translationService.getLanguage();
    this.translationService.translatePage(currentLanguage);
  }
}
