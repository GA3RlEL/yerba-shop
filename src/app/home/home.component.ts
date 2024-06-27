import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TrustedLogosComponent } from './trusted-logos/trusted-logos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HeaderComponent, HeroSectionComponent, TrustedLogosComponent],
})
export class HomeComponent {}
