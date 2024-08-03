import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produits.component.html',
  styleUrls: ['./ajout-produits.component.css']
})
export class AjoutProduitsComponent implements OnInit {
  productName: string = '';
  productPrice: string = '';
  selectedFile: File | null = null;
  fileAdded: boolean = false;
  categoryName: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryName = params['categoryName'];
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.fileAdded = !!this.selectedFile;
  }

  onSubmit() {
    if (this.productName && this.productPrice && this.selectedFile && this.categoryName) {
      const reader = new FileReader();
      reader.onload = () => {
        const newProduct = {
          name: this.productName,
          image: reader.result as string,
          price: this.productPrice
        };
        this.productService.addProduct(this.categoryName, newProduct);
        this.router.navigate(['/makyatraiteur/menu/' + this.categoryName.toLowerCase().replace(/ /g, '-')]);
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      console.error('Form is invalid');
    }
  }
}
