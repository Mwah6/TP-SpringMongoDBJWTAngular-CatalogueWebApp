import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductsComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminCategoriesComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
