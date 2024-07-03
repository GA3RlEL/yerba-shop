import { Injectable, computed, inject, signal } from '@angular/core';
import { Product, products } from '../data/products';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal<Product[]>(products);
  filteredProducts = signal<Product[]>(this.products());
  router = inject(Router);
  route = inject(ActivatedRoute);

  filerProducts(minPrice: number, maxPrice: number) {
    const newTable = this.products().filter((product) => {
      if (product.isDiscount && product.discountPrice) {
        return (
          product.discountPrice >= minPrice && product.discountPrice <= maxPrice
        );
      }
      if (product.price) {
        return product.price >= minPrice && product.price <= maxPrice;
      }
      return product;
    });
    this.filteredProducts.set(newTable);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: 1 },
      queryParamsHandling: 'merge',
    });
  }
}
