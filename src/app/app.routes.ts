import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';
import { ProductPreviewComponent } from './shop/shop-category/products/product-preview/product-preview.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'YerbaVibes | Home',
  },
  {
    path: 'shop',
    component: ShopComponent,
    title: 'YerbaVibes | Shop',
  },

  {
    path: 'shop/:category',
    component: ShopCategoryComponent,
  },

  {
    path: 'product/:id',
    component: ProductPreviewComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
    title: 'YerbaVibes | Cart',
  },

  {
    path: 'about',
    component: AboutComponent,
    title: 'YerbaVibes | About',
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
