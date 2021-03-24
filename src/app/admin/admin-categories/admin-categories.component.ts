import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  public categories: any ;
  public mode = 'list';
  public currentCatagories: any;
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.onGetAllCategories();
  }
  onGetAllCategories(): void {
    this.mode = 'list';
    this.catalogueService.getAllCategories()
    .subscribe(data => {
      this.categories = data;
    }, err => {
      console.log(err);
    });
  }
  onDeleteCat(cat: any): void {
    const c = confirm('Etes-vous sûr ?');
    if (!c)
      {return;
    }
    this.catalogueService.deleteRessource(cat._links.self.href)
    .subscribe(data => {
      this.onGetAllCategories();
    }, err => {
      console.log(err);
    });
  }
  onNewCat(): void {
    this.mode = 'new-cat';

  }
  onSaveCat(data: any): void {
    const url = this.catalogueService.host + '/categories';
    this.catalogueService.postRessource(url, data)
    .subscribe(data => {
      this.onGetAllCategories();
    }, err => {
      console.log(err);
    }
    );
  }
  onEditCat(cat: any): void {
    this.catalogueService.getRessource(cat._links.self.href)
    .subscribe(data => {
      this.currentCatagories = data;
      this.mode = 'edit-cat';
    }, err => {
      console.log(err);
    }
    );
  }
  onUpdateCat(data: any): void {
    const url = this.currentCatagories._links.self.href;
    this.catalogueService.patchRessource(url, data)
    .subscribe(data => {
      this.onGetAllCategories();
    }, err => {
      console.log(err);
    }
    );
  }
}
