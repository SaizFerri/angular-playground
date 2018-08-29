import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetarService {
  constructor(private http: HttpClient) { }

  getMetar(code: string): Observable<any> {
    return this.http.get(`${environment.metarApiUrl}${code}/decoded`, {
      headers: {
        'X-API-Key': '66a5358551855a6388356d5bdb',
      }
    });
  }
}
