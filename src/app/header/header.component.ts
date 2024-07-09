import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'header[app-header]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showMenu = false;
  private cartService = inject(CartService);

  get cartLength() {
    return this.cartService.getCartItems().length;
  }

  onShowMenu() {
    this.showMenu = !this.showMenu;
  }

  onCloseMenu() {
    this.showMenu = false;
  }
}
