import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserLogInModel } from '../models/user-logIn.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtTokenModel } from '../models/jwt-token.model';
import { UserRegisterModel } from '../models/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenExists: boolean = !!localStorage.getItem('token');
  isLoggedIn$ = new BehaviorSubject<boolean>(this.tokenExists);

  constructor(private http: HttpClient) {}

  logIn(user: UserLogInModel): Observable<JwtTokenModel> {
    const apiPath: string = 'users/login';
    return this.http.post<JwtTokenModel>(environment.apiUrl + apiPath, user);
  }

  logOut(): void {
    this.isLoggedIn$.next(false);
    localStorage.removeItem('token');
  }

  register(user: UserRegisterModel): Observable<any> {
    const apiPath: string = 'users/register';
    return this.http.post<any>(environment.apiUrl + apiPath, user);
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
