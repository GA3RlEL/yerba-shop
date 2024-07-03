import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Product } from '../../../data/products';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [ProductComponent, RouterModule],
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);

  itemsPerPage = 9;
  page: number = 0;

  get allProducts() {
    return this.productsService.filteredProducts();
  }

  get paginatedItem() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    return this.allProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get pages() {
    const pages = Math.ceil(this.allProducts.length / this.itemsPerPage);
    return Array(pages).fill(0);
  }

  ngOnInit(): void {
    const sub = this.route.queryParams.subscribe((params) => {
      this.page = params['page'] ? +params['page'] : 1;
      if (!params['page']) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { page: 1 },
          queryParamsHandling: 'merge',
        });
      }
    });

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    });
  }

  onPreviousPage() {
    if (this.page > 1) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: this.page - 1 },
        queryParamsHandling: 'merge',
      });
    }
  }

  onNextPage() {
    if (this.page < this.pages.length) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: this.page + 1 },
        queryParamsHandling: 'merge',
      });
    }
  }
}
