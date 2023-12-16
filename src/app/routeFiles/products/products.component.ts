import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../sharing/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  public products = [];

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
  productSelected(product) {
    this.router.navigate(['/product', product.id]);
  }
}
