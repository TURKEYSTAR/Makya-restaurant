import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viennoiseries',
  templateUrl: './viennoiseries.component.html',
  styleUrls: ['./viennoiseries.component.css']
})
export class ViennoiseriesComponent implements OnInit {
  products: { name: string; image: string; price: string; }[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts('viennoiseries');
  }
}
