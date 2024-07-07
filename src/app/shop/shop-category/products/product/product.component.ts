import { Component, input, signal } from '@angular/core';
import { Product } from '../../../../data/products';
import { RouterLink } from '@angular/router';
import { ProductAddComponent } from '../../../../shared/product-add/product-add.component';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  imports: [RouterLink, ProductAddComponent],
})
export class ProductComponent {
  product = input.required<Product>();

  readQuantity(data: number) {
    console.log(data);
  }
}
