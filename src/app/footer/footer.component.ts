import { Component } from '@angular/core';

@Component({
  selector: 'footer[app-footer]',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  year = new Date().getFullYear();
}
