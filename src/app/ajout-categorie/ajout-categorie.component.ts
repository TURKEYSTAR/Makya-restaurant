import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent {
  categoryName: string = '';
  selectedFile: File | null = null;
  fileAdded: boolean = false;

  constructor(private categoryService: CategoryService, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.fileAdded = !!this.selectedFile;
  }

  onSubmit() {
    if (this.categoryName && this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const newCategory = {
          name: this.categoryName,
          image: reader.result as string,
          link: '/makyatraiteur/menu/' + this.categoryName.toLowerCase().replace(/ /g, '-')
        };
        this.categoryService.addCategory(newCategory);
        this.router.navigate(['/makyatraiteur/menu']);
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      console.error('Form is invalid');
    }
  }
}
