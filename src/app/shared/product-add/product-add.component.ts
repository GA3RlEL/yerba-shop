import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  quantity = signal(1);

  quantityOutput = output<number>();

  onIncreaseQuantity() {
    this.quantity.update((oldValue) => oldValue + 1);
  }
  onDecreaseQuantity() {
    if (this.quantity() > 1) {
      this.quantity.update((oldValue) => oldValue - 1);
    }
  }

  emitValue() {
    this.quantityOutput.emit(this.quantity());
  }
}
