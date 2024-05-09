import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  items = [
    '../../../assets/hero/hero-2.jpg',
    '../../../assets/hero/hero-3.jpeg',
    '../../../assets/hero/hero-1.jpeg',
    '../../../assets/hero/hero-4.jpeg',
  ];
}
