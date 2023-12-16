import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './routeFiles/contact/contact.component';
import { HomeComponent } from './routeFiles/home/home.component';
import { ProductComponent } from './routeFiles/products/product/product.component';
import { ProductsComponent } from './routeFiles/products/products.component';
import { UserComponent } from './routeFiles/users/user/user.component';
import { UsersComponent } from './routeFiles/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id/:name', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
