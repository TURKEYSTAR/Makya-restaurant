import { Injectable } from '@angular/core';
import { Category } from './category.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories = [
    { name: 'Petit Déjeuner', image: 'assets/img/breakfast1.jpg', link: '/makyatraiteur/menu/breackfast' },
    { name: 'Plat du Jour', image: 'assets/img/plats.jpg', link: '/makyatraiteur/menu/plats'},
    { name: 'Fast Food', image: 'assets/img/fastfood.jpg', link: '/makyatraiteur/menu/fastfood'},
    { name: 'Viennoiseries', image: 'assets/img/viennoiseries2.jpg', link: '/makyatraiteur/menu/viennoiseries'},
    { name: 'Boissons', image: 'assets/img/boissons.jpg', link: '/makyatraiteur/menu/boissons'}
  ];

  getCategories() {
    return this.categories;
  }

  addCategory(category: { name: string; image: string; link: string}) {
    this.categories.push(category);
  }
}
