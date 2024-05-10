import { Component } from '@angular/core';

@Component({
  selector: 'app-highlight-products',
  templateUrl: './highlight-products.component.html',
  styleUrl: './highlight-products.component.scss',
})
export class HighlightProductsComponent {
  list = [1, 2, 3, 4, 5, 6, 8, 7];
}
