import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-highlight-products',
  templateUrl: './highlight-products.component.html',
  styleUrl: './highlight-products.component.scss',
})
export class HighlightProductsComponent implements OnInit {
  constructor(private readonly productService: ProductsService) {}
  products: IProduct[] = [];

  ngOnInit(): void {
    this.getHighlightProducts();
  }
  getHighlightProducts() {
    this.productService.getHighlightProducts().subscribe((val) => {
      this.products = val;
    });
  }

  getStarArray(star: number): any[] {
    return Array(star).fill(0);
  }

  getRouteLink(id: string) {
    return `/product/${id}`;
  }
}
