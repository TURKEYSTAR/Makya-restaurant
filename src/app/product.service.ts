import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: { [key: string]: { name: string; image: string; price: string }[] } = {
    breakfast: [
      { name: 'Café au Lait', image: 'assets/img/cafe-au-lait.jpg', price: '250' },
      { name: 'Café noir', image: 'assets/img/cafenoir.jpg', price: '100' },
      { name: 'Chocolat chaud', image: 'assets/img/chocolatchaud.jpg', price: '300' },
      { name: 'Pain au Chocolat', image: 'assets/img/pain-au-chocolat.jpg', price: '500' }
    ],
    plats: [
      { name: 'Thiebou djeun', image: 'assets/img/thieb2.jpg', price: '800' },
      { name: 'Yassa Poulet', image: 'assets/img/yassa2.jpg', price: '1000' }
    ],
    boissons: [
      { name: 'Boissons gazeuses', image: 'assets/img/gaz.jpg', price: '350' },
      { name: 'Jus locaux', image: 'assets/img/nature.jpg', price: '300' },
      { name: 'Eau', image: 'assets/img/eau.jpg', price: '250' }
    ],
    fastfood: [
      { name: 'Hamburger', image: 'assets/img/burger.jpg', price: '1500' },
      { name: 'Chawarma', image: 'assets/img/chawarma.jpg', price: '1000' }
    ],
    viennoiseries: [
      { name: 'Cake', image: 'assets/img/cake.jpg', price: '150' },
      { name: 'Madelaines', image: 'assets/img/madelaines.jpg', price: '175' },
      { name: 'beignets', image: 'assets/img/beignets.jpg', price: '50' },
      { name: 'croissants ', image: 'assets/img/croissants.jpg', price: '1000' }
    ],
  };

  constructor() {}

  addProduct(category: string, product: any) {
    const formattedCategory = category.toLowerCase().replace(/ /g, '-');
    if (this.products[formattedCategory]) {
      this.products[formattedCategory].push(product);
    } else {
      console.error(`Category ${category} not found.`);
    }
  }

  getProducts(category: string) {
    return this.products[category.toLowerCase().replace(/ /g, '-')];
  }
}
