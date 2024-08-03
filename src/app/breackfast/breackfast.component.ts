import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-breackfast',
  templateUrl: './breackfast.component.html',
  styleUrls: ['./breackfast.component.css']
})
export class BreackfastComponent implements OnInit {
  categoryName: string = 'breakfast';
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts(this.categoryName);
  }
}
