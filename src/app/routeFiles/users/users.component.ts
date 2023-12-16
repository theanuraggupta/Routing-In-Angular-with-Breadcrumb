import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    { name: 'satish', id: 10 },
    { name: 'sudheer', id: 20 },
    { name: 'mohan', id: 30 },
  ];

  constructor(private router: Router) {}

  selectedRoute(user) {
    this.router.navigate(['/user', user.id, user.name]);
  }
}
