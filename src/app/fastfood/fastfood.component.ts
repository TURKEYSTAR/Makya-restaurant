import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-fastfood',
  templateUrl: './fastfood.component.html',
  styleUrls: ['./fastfood.component.css']
})
export class FastfoodComponent implements OnInit {
  products: { name: string; image: string; price: string; }[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts('fastfood');
  }
}
