import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';

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
    path: '**',
    component: PageNotFoundComponent,
  },
];
