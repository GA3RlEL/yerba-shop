import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../data/products';
import { ActivatedRoute } from '@angular/router';
import { ProductAddComponent } from '../../../../shared/product-add/product-add.component';

@Component({
  selector: 'app-product-preview',
  standalone: true,
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.css',
  imports: [ProductAddComponent],
})
export class ProductPreviewComponent implements OnInit {
  productsService = inject(ProductsService);
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  product!: Product | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) this.product = this.productsService.returnOneItem(id);
    });
  }

  readQuantity(data: number) {
    console.log(data);
  }
}
