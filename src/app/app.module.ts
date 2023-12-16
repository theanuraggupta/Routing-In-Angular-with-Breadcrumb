import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './routeFiles/contact/contact.component';
import { HomeComponent } from './routeFiles/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './sharing/products.service';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './sharing/header/header.component';
import { SidenavComponent } from './sharing/sidenav/sidenav.component';
import { ProductsComponent } from './routeFiles/products/products.component';
import { ProductComponent } from './routeFiles/products/product/product.component';
import { UsersComponent } from './routeFiles/users/users.component';
import { UserComponent } from './routeFiles/users/user/user.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    ProductsComponent,
    ProductComponent,
    LoginComponent,
    UsersComponent,
    UserComponent,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
