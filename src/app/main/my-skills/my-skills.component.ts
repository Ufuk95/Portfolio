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
    { src: '/img/skills/angular.png', name: 'Angular' },
    { src: '/img/skills/typescript.png', name: 'Typescript' },
    { src: '/img/skills/javascript.png', name: 'Javascript' },
    { src: '/img/skills/html.png', name: 'HTML' },
    { src: '/img/skills/firebase.png', name: 'Firebase' },
    { src: '/img/skills/git.png', name: 'GIT' },
    { src: '/img/skills/css.png', name: 'CSS' },
    { src: '/img/skills/api.png', name: 'Rest-Api' },
    { src: '/img/skills/scrum.png', name: 'Scrum' },
    { src: '/img/skills/material.png', name: 'Material design' }
  ];

  constructor(private translationService: LanguageService) {}

  ngOnInit() {
    const currentLanguage = this.translationService.getLanguage();
    this.translationService.translatePage(currentLanguage);
  }
}
