import { Component, inject } from '@angular/core';
import { Product } from '../data/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { DecimalPipe } from '@angular/common';

type CartItem = {
  id: string;
  item: Product;
  quantity: number;
};

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private cartService = inject(CartService);
  get totalPrice() {
    let price = 0;
    this.cart().forEach((i) => {
      if (i.item.isDiscount) {
        if (i.item.discountPrice) {
          price += i.item.discountPrice * i.quantity;
        }
      } else {
        price += i.item.price * i.quantity;
      }
    });
    return price;
  }

  get cart() {
    return this.cartService.getCartItems;
  }

  ngOnInit() {
    console.log(this.cart());
  }

  calculateTotalPrice() {}

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
