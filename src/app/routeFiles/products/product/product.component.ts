import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../sharing/products.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    const products = this.productsService.getProducts();
    this.route.params.subscribe((param) => {
      this.product = products.filter(
        (product) => product.id === +param['id']
      )[0];
    });
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
