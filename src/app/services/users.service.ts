import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { VerifyHashModel } from '../models/verify-hash.model';
import { ResetPasswordEmailModel } from '../models/reset-password-email.model';
import { NewPasswordModel } from '../models/new-password.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  jwt: JwtHelperService;

  constructor(private authService: AuthService, private http: HttpClient) { 
    this.jwt = new JwtHelperService();
  }

  verifyUser(hash: VerifyHashModel): Observable<any> {
    const apiPath: string = 'users/verify';
    return this.http.put(`${environment.apiUrl}${apiPath}`, hash);
  }

  getResetPasswordToken(email: ResetPasswordEmailModel): Observable<any> {
    const apiPath: string = 'users/resetPassword';
    return this.http.post(`${environment.apiUrl}${apiPath}`, email);
  }

  resetPassword(params: NewPasswordModel): Observable<any> {
    const apiPath: string = 'users/resetPassword';
    return this.http.put(`${environment.apiUrl}${apiPath}`, params); 
  }

  resendVerificationEmail(): Observable<any> {
    const apiPath: string = 'users/resendVerificationEmail';
    const token = this.authService.getTokenFromLocalStorage();
    const decodedToken = this.jwt.decodeToken(token);
    return this.http.post(`${environment.apiUrl}${apiPath}`, { email: decodedToken.email });
  }

  isAccountVerified(): boolean {
    const token = this.authService.getTokenFromLocalStorage();
    const decodedToken = this.jwt.decodeToken(token);
    return decodedToken.verified;
  }
}
