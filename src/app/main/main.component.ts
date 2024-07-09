import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, LandingPageComponent, AboutMeComponent, PortfolioComponent, MySkillsComponent, FooterComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
