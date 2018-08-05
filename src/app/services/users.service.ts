import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { JwtTokenModel } from '../models/jwt-token.model';
import { Observable } from 'rxjs';
import { VerifyHashModel } from '../models/verify-hash.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  verify(hash: VerifyHashModel): Observable<any> {
    const apiPath:string = 'users/verify/'
    return this.http.put(`${environment.apiUrl}${apiPath}${hash.hash}`, hash);
  }
}
