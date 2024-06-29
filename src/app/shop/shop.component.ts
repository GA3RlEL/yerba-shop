import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  categories = [
    { id: 1, name: 'Yerba Mate' },
    { id: 2, name: 'Accessories' },
  ];
}
