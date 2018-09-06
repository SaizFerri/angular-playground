import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogbookService {
  constructor(private http: HttpClient) {}

  getLogs(): Observable<any> {
    const apiPath = '/logbook';
    return this.http.get(`${environment.apiUrl}${apiPath}`);
  }
}
