import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

import { environment } from '../../environments/environment';

import { JwtTokenModel } from '../models/jwt-token.model';

import { UserLogin } from '../components/login/login.component';
import { UserRegister } from '../components/register/register.component';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenExists: boolean = !!localStorage.getItem('token');
  isLoggedIn$ = new BehaviorSubject<boolean>(this.tokenExists);
  jwt: JwtHelperService;

  constructor(private http: HttpClient, private readonly router: Router) {
    this.jwt = new JwtHelperService();
  }

  logIn(user: UserLogin): Observable<JwtTokenModel> {
    const apiPath: string = '/users/login';
    return this.http.post<JwtTokenModel>(environment.apiUrl + apiPath, user);
  }

  logOut(): void {
    this.isLoggedIn$.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  register(user: UserRegister): Observable<any> {
    const apiPath: string = '/users/register';
    const { name, surname, email, password, repeatPassword } = user;
    const finalUser = {
      name: name + ' ' + surname,
      email,
      password,
      repeatPassword
    }
    return this.http.post<any>(environment.apiUrl + apiPath, finalUser);
  }

  decodeToken(): any {
    return this.jwt.decodeToken(this.getTokenFromLocalStorage());
  }

  setTokenInLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  getTokenFromLocalStorage(): string {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }
}
