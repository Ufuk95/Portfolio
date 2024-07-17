import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
  mail: string = "oezsahin95@icloud.com"

  constructor(private translationService: LanguageService) {}

  ngOnInit() {
    const currentLanguage = this.translationService.getLanguage();
    this.translationService.translatePage(currentLanguage);
  }
}
