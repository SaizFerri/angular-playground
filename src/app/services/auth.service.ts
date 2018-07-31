import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserLogIn } from '../models/userLogIn';
import { Observable } from 'rxjs';
import { JwtToken } from '../models/jwtToken';
import { UserRegister } from '../models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(user: UserLogIn): Observable<JwtToken> {
    const apiPath: string = 'users/login';

    return this.http.post<JwtToken>(environment.apiUrl + apiPath, user);
  }

  register(user: UserRegister): Observable<any> {
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
