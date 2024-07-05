import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'aside[app-filters]',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent implements OnInit {
  productsService = inject(ProductsService);
  minPrice = new FormControl(1);
  maxPrice = new FormControl(100);

  selectedBrands: string[] = [];
  selectedWeights: number[] = [];

  onFilterWeight(weight: number, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.selectedWeights.push(weight);
    } else {
      const index = this.selectedWeights.indexOf(weight);
      if (index > -1) {
        this.selectedWeights.splice(index, 1);
      }
    }
    this.productsService.filterProductsByWeight(this.selectedWeights);
  }

  onFilterBrands(brand: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.selectedBrands.push(brand);
    } else {
      const index = this.selectedBrands.indexOf(brand);
      if (index > -1) {
        this.selectedBrands.splice(index, 1);
      }
    }
    this.productsService.filterProductsByBrand(this.selectedBrands);
  }

  get allProducts() {
    return this.productsService.products;
  }

  get brands() {
    const set = new Set(this.allProducts().map((product) => product.brand));
    return set;
  }

  get weights() {
    const weight = new Set(
      this.allProducts()
        .map((product) => product.weight)
        .sort((a, b) => b - a)
    );
    return weight;
  }

  ngOnInit(): void {
    if (this.minPrice.value && this.maxPrice.value) {
      this.productsService.filterProductsByPrice(
        this.minPrice.value,
        this.maxPrice.value
      );
    }

    this.minPrice.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      if (this.maxPrice.value && value && this.minPrice.value) {
        if (this.maxPrice.value < value) {
          this.maxPrice.setValue(value + 1);
        }
        this.productsService.filterProductsByPrice(
          this.minPrice.value,
          this.maxPrice.value
        );
      }
    });

    this.maxPrice.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      if (this.minPrice.value && value && this.maxPrice.value) {
        if (value < this.minPrice.value) {
          this.maxPrice.setValue(this.minPrice.value + 1);
        }
        this.productsService.filterProductsByPrice(
          this.minPrice.value,
          this.maxPrice.value
        );
      }
    });
  }
}
