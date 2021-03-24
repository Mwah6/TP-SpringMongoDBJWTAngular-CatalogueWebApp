import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private catalogueService: CatalogueService, private route: ActivatedRoute, private router: Router) {
    // On pose un écouteur sur la route
    router.events.subscribe(event => {
      // NavigationEnd => permet de récupérer les paramètres après que l'url a changé
      // NavigationStart => permet de récupérer les paramètres avant que l'url ne change
      if (event instanceof NavigationEnd) {
        const url = atob(route.snapshot.params.urlProds);
        this.getProducts(url);
      }
    });

  }
  public products: any;
  ngOnInit(): void {
  }
  getProducts(url: string): void {
    this.catalogueService.getRessource(url)
    .subscribe(data => {
      this.products = data;
    }, err => {
      console.log(err);
    });
  }
}
