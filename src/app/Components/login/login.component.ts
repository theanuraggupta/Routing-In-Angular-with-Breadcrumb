import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../sharing/products.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  uname;
  psw;
  login = false;

  constructor(private router: Router, private prodService: ProductsService) {}

  ngOnInit() {}

  onLogin() {
    if (this.uname === 'satish' && this.psw === '123') {
      this.login = true;
      this.prodService.isLoggedIn.next(this.login);
      this.router.navigate(['/']);
    } else {
      alert('Please enter username & password');
    }
  }
}
