import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsersService } from '../../../services/users.service';

import { Roles } from '../../enum/roles.enum';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class User {
  id: number;
  name: string;
  email: string;
  roles: Roles[];
  verified: boolean;
}

@Component({
  selector: 'app-admin-user-detail',
  templateUrl: './admin-user-detail.component.html'
})
export class AdminUserDetailComponent implements OnInit {
  id: string;
  user: User;
  roles: any[] = [];
  user$: Observable<User>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UsersService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user$ = this.userService.getUser(this.id).pipe(
      tap((user) => {
        this.user = user;
        this.initRoles();
      })
    );
  }

  initRoles() {
    Object.keys(Roles).map(key => {
      if (this.user.roles.indexOf(Roles[key]) > -1) {
        this.roles.push({
          role: key.toLowerCase(),
          checked: true
        });
      } else {
        this.roles.push({
          role: key.toLowerCase(),
          checked: false
        });
      }
    });
  }

  updateUser(userForm: NgForm) {

  }

}
