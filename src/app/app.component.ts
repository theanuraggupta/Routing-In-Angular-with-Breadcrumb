import { Component, VERSION } from '@angular/core';
import { ProductsService } from './sharing/products.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Routing';
  isLoggedIn;

  constructor(private prodService: ProductsService) {}

  ngOnInit() {
    this.prodService.isLoggedIn.subscribe((res) => {
      this.isLoggedIn = res;
      console.log(this.isLoggedIn)
    });
  }
}
