import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  people: any[] = [];

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    console.log('GET');
    this.product.getPeople().subscribe();
  }
}
