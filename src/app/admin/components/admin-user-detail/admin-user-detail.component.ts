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
  success: boolean = false;
  error: boolean = false;
  errorTxt: string;

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

  initRoles(): void {
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

  updateUser(): void {
    this.userService.updateUser(this.user)
      .subscribe(
        success => {
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 3000);
        },
        err => {
          this.error = true;
          this.errorTxt = err.error;
          setTimeout(() => {
            this.error = false;
            this.errorTxt = "";
          }, 5000);
        }
      )
  }

  updateRoles(): void {
    const roles: Roles[] = []; 

    this.roles.forEach(role => {
      if (role.checked) {
        roles.push(role.role);
      }
    });

    const params = {
      id: this.user.id,
      roles
    }
    
    this.userService.updateRoles(params)
      .subscribe(
        success => {
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 3000);
        },
        err => {
          this.error = true;
          this.errorTxt = err.error;
          setTimeout(() => {
            this.error = false;
            this.errorTxt = "";
          }, 5000);
        }
      )
  }

}
