import { Component, inject } from '@angular/core';
import { Product, products } from '../data/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

type CartItem = {
  id: string;
  item: Product;
  quantity: number;
};

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private cartService = inject(CartService);

  get cart() {
    return this.cartService.getCartItems;
  }

  ngOnInit() {
    console.log(this.cart());
  }

  onDecreaseQuantity(item: CartItem) {
    if (item.quantity === 1) {
      return;
    }

    item.quantity -= 1;
    this.cartService.updateItemCartQuantity(item);
  }
  onIncreaseQuantity(item: CartItem) {
    item.quantity += 1;

    this.cartService.updateItemCartQuantity(item);
  }
  onDeleteItem(item: CartItem) {
    this.cartService.deleteItemCart(item);
  }
}
