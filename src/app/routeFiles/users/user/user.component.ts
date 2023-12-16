import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  selectedUser = { id: '', name: '' };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.selectedUser = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name'],
    };

    // this.activatedRoute.params.subscribe((param) => {
    //   console.log(param);
    //   this.selectedUser = {
    //     id: param.id,
    //     name: param.name,
    //   };
    // });
  }
}
