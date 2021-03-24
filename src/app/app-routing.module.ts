import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'products/:urlProds', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'adminCategories', component: AdminCategoriesComponent},
  {path: 'adminProducts', component: AdminProductsComponent},
  {path: 'adminUsers', component: AdminUsersComponent},
  {path: 'categories', component: CategoriesComponent}
  // {path: '', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
