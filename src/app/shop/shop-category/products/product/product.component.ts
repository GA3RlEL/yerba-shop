import { Component, input, signal } from '@angular/core';
import { Product } from '../../../../data/products';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product = input.required<Product>();
  quantity = signal(1);

  onIncreaseQuantity() {
    this.quantity.update((oldValue) => oldValue + 1);
  }
  onDecreaseQuantity() {
    if (this.quantity() > 1) {
      this.quantity.update((oldValue) => oldValue - 1);
    }
  }
}
