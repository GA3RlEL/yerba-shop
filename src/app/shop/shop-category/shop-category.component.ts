import { Component, HostListener, inject, OnInit } from '@angular/core';
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
  showMobileMenu: boolean = false;

  isMobile = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 1100;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');
      if (category) {
        this.type = category;
        // console.log(category);
      }
    });
  }

  onShowMobileFilters() {
    this.showMobileMenu = true;
  }

  onCloseMenu() {
    this.showMobileMenu = false;
  }
}
