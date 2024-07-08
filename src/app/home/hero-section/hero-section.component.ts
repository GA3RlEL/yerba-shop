import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'div[app-hero-section]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {}
