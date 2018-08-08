import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { UsersService } from './users.service';

import { JwtHelperService } from '@auth0/angular-jwt';

import * as _ from 'lodash';
import { Roles } from '../admin/enum/roles.enum';

@Injectable()
export class AuthGuard implements CanActivate {

  jwt: JwtHelperService;
  roles: string[] = [Roles.USER, Roles.ADMIN]

  constructor (
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private router: Router
  ) { 
    this.jwt = new JwtHelperService();
  }
  canActivate() {
    const token = this.authService.getTokenFromLocalStorage();

    if (!token || this.jwt.isTokenExpired(token)) {
      this.authService.logOut();
      this.router.navigate(['login']);
      return false;
    }

    const { roles } = this.jwt.decodeToken(token);

    const hasRole = () => this.roles.some((role) => _.includes(roles, role));

    return hasRole();
  }
}