import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../../models/manufacturer';
import { ManufacturerService } from '../../services/manufacturer.service';

@Component({
  selector: 'app-highlight-company',
  templateUrl: './highlight-company.component.html',
  styleUrl: './highlight-company.component.scss',
})
export class HighlightCompanyComponent implements OnInit {
  manufacturers: Manufacturer[] = [];

  constructor(private readonly manufacturerService: ManufacturerService) {}
  ngOnInit(): void {
    this.getHighlightManufacturers();
  }

  getHighlightManufacturers() {
    this.manufacturerService.getHighlightManufacturers().subscribe((val) => {
      this.manufacturers = val;
    });
  }
}
