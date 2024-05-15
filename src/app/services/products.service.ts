import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  getHighlightProducts() {
    const products = this.http.get<IProduct[]>(
      'http://localhost:7153/api/v1/top-8-products'
    );

    return products;
  }
}
