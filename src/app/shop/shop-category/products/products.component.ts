import { Component } from '@angular/core';
import { Product, products } from '../../../data/products';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [ProductComponent],
})
export class ProductsComponent {
  products: Product[] = products;
  testProduct: Product = products[0];
}
