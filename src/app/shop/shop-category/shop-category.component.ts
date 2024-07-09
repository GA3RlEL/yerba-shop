import { Component, inject, OnInit } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { ProductsComponent } from './products/products.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-category',
  standalone: true,
  imports: [FiltersComponent, ProductsComponent],
  templateUrl: './shop-category.component.html',
  styleUrl: './shop-category.component.css',
})
export class ShopCategoryComponent implements OnInit {
  private route = inject(ActivatedRoute);
  type!: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');
      if (category) {
        this.type = category;
        console.log(category);
      }
    });
  }
}
