import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header[app-header]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showMenu = false;

  onShowMenu() {
    this.showMenu = !this.showMenu;
  }
}
