import { Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'aside[app-filters]',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent implements OnInit {
  productsService = inject(ProductsService);
  minPrice = new FormControl(1);
  maxPrice = new FormControl(100);

  get allProducts() {
    return this.productsService.filteredProducts;
  }

  get brands() {
    const set = new Set(this.allProducts());
    return set;
  }

  ngOnInit(): void {
    if (this.minPrice.value && this.maxPrice.value) {
      this.productsService.filerProducts(
        this.minPrice.value,
        this.maxPrice.value
      );
    }

    console.log(this.brands);

    this.minPrice.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      if (this.maxPrice.value && value && this.minPrice.value) {
        if (this.maxPrice.value < value) {
          this.maxPrice.setValue(value + 1);
        }
        this.productsService.filerProducts(
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
        this.productsService.filerProducts(
          this.minPrice.value,
          this.maxPrice.value
        );
      }
    });
  }
}
