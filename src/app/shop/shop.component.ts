import { Component, OnInit } from '@angular/core';
import { carousels, categories } from '../data/shop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  interval: any;
  categories = categories;
  carousels = carousels;

  currentSlidePos = 0;
  currentSlide = 1;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.onNextSlide();
    }, 4000);
  }

  resetInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.onNextSlide();
    }, 4000);
  }

  onNextSlide() {
    this.resetInterval();
    if (this.currentSlide === this.carousels.length) {
      this.currentSlidePos = 0;
      this.currentSlide = 1;
    } else {
      this.currentSlide += 1;
      this.currentSlidePos += -140;
    }
  }

  onPreviousSlide() {
    this.resetInterval();
    if (this.currentSlide === 1) {
      this.currentSlide = this.carousels.length;
      this.currentSlidePos = (this.carousels.length - 1) * -140;
    } else {
      this.currentSlide -= 1;
      this.currentSlidePos += 140;
    }
  }
}
