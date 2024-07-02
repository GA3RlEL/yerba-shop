import { Component } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-shop-category',
  standalone: true,
  imports: [FiltersComponent, ProductsComponent],
  templateUrl: './shop-category.component.html',
  styleUrl: './shop-category.component.css',
})
export class ShopCategoryComponent {}
