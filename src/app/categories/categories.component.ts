import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private catService: CatalogueService, private router: Router) { }
  public categories: any;
  public currentCategory: any;

  ngOnInit(): void {
    this.catService.getAllCategories()
      .subscribe(data => {
        this.categories = data;
      }, err => {
        console.log(err);
    });
  }

  onGetProducts(cat: any): void {
    this.currentCategory = cat;
    const url = cat._links.products.href;
    this.router.navigateByUrl('/products/' + btoa(url));
    // btoa permet de faire passer les caractères spéciaux par l'encodage
  }
}
