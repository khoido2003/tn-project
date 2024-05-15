import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manufacturer } from '../models/manufacturer';

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  constructor(private readonly http: HttpClient) {}

  getHighlightManufacturers() {
    return this.http.get<Manufacturer[]>(
      'http://localhost:7153/api/v1/top-9-manufacturer'
    );
  }
}
