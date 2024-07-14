import { Injectable, signal } from '@angular/core';
import { Product } from '../data/products';

type CartItem = {
  id: string;
  item: Product;
  quantity: number;
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  getCartItems = this.cartItems.asReadonly();

  constructor() {
    this.cartItems.set(this.loadCart());
  }

  loadCart(): CartItem[] {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      return JSON.parse(cartData);
    } else {
      const initialCart: CartItem[] = [];
      localStorage.setItem('cart', JSON.stringify(initialCart));
      return initialCart;
    }
  }

  addItemToCart(item: Product, quantity: number) {
    const newProduct: CartItem = {
      id: Date.now() + Math.random().toString(36).substring(2, 9),
      item,
      quantity,
    };

    const updatedCart = this.cartItems.update((oldValue) => {
      const existingProductIndex = oldValue.findIndex(
        (product) => product.item.id === item.id
      );

      if (existingProductIndex !== -1) {
        const updatedProduct = {
          ...oldValue[existingProductIndex],
          quantity: oldValue[existingProductIndex].quantity + quantity,
        };

        return [
          ...oldValue.slice(0, existingProductIndex),
          updatedProduct,
          ...oldValue.slice(existingProductIndex + 1),
        ];
      } else {
        return [...oldValue, newProduct];
      }
    });

    // console.log(this.cartItems());
    localStorage.setItem('cart', JSON.stringify(this.cartItems()));
  }

  updateItemCartQuantity(item: CartItem) {
    this.cartItems.update((oldValues) => {
      return oldValues.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: item.quantity }
          : cartItem
      );
    });
    localStorage.setItem('cart', JSON.stringify(this.cartItems()));
  }

  deleteItemCart(item: CartItem) {
    this.cartItems.update((oldValues) => {
      return oldValues.filter((cartItem) => cartItem.id !== item.id);
    });

    localStorage.setItem('cart', JSON.stringify(this.cartItems()));
  }
}
