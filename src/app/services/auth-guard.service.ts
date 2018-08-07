import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { UsersService } from './users.service';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  jwt: JwtHelperService;

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

    const decodedToken = this.jwt.decodeToken(token);
    console.log(decodedToken.roles);
    return true;
  }
}