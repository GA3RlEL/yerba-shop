import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TrustedLogosComponent } from './trusted-logos/trusted-logos.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerTestimonialsComponent } from './customer-testimonials/customer-testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    TrustedLogosComponent,
    BenefitsComponent,
    FooterComponent,
    CustomerTestimonialsComponent,
  ],
})
export class HomeComponent {}
