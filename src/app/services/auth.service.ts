import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserLogInModel } from '../models/user-logIn.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtTokenModel } from '../models/jwt-token.model';
import { UserRegisterModel } from '../models/user-register.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenExists: boolean = !!localStorage.getItem('token');
  isLoggedIn$ = new BehaviorSubject<boolean>(this.tokenExists);

  constructor(private http: HttpClient, private readonly router: Router) {}

  logIn(user: UserLogInModel): Observable<JwtTokenModel> {
    const apiPath: string = '/users/login';
    return this.http.post<JwtTokenModel>(environment.apiUrl + apiPath, user);
  }

  logOut(): void {
    this.isLoggedIn$.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  register(user: UserRegisterModel): Observable<any> {
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
