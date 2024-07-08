import { Injectable, computed, inject, signal } from '@angular/core';
import { Product, products } from '../data/products';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = signal<Product[]>(products);
  filteredProducts = signal<Product[]>(this.products());
  private originalProducts = signal<Product[]>(this.products());
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private currentWeights: number[] = [];
  private currentBrands: string[] = [];
  private currentMinPrice: number = 1;
  private currentMaxPrice: number = 100;

  filterProducts() {
    let filtered = this.originalProducts();

    if (this.currentWeights.length > 0) {
      filtered = filtered.filter((product) =>
        this.currentWeights.includes(product.weight)
      );
    }

    if (this.currentBrands.length > 0) {
      filtered = filtered.filter((product) =>
        this.currentBrands.includes(product.brand)
      );
    }

    if (this.currentMinPrice !== null && this.currentMaxPrice !== null) {
      filtered = filtered.filter((product) => {
        if (product.isDiscount && product.discountPrice) {
          return (
            product.discountPrice >= this.currentMinPrice &&
            product.discountPrice <= this.currentMaxPrice
          );
        }
        if (product.price) {
          return (
            product.price >= this.currentMinPrice &&
            product.price <= this.currentMaxPrice
          );
        }
        return false;
      });
    }

    this.filteredProducts.set(filtered);
    this.restarPage();
  }

  filterProductsByWeight(weights: number[]) {
    this.currentWeights = weights;
    this.filterProducts();
  }

  filterProductsByBrand(brands: string[]) {
    this.currentBrands = brands;
    this.filterProducts();
  }

  filterProductsByPrice(minPrice: number, maxPrice: number) {
    this.currentMinPrice = minPrice;
    this.currentMaxPrice = maxPrice;
    this.filterProducts();
  }

  restarPage() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: 1 },
      queryParamsHandling: 'merge',
    });
  }

  returnOneItem(id: string) {
    return this.products().at(+id - 1);
  }
}
