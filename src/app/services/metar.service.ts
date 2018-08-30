import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetarService {
  constructor(private http: HttpClient) { }

  getAirports(query: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/airports/${query}`);
  }

  getMetar(code: string): Observable<any> {
    return this.http.get(`${environment.metarApiUrl}/metar/${code}/decoded`, {
      headers: {
        'X-API-Key': environment.metarApiKey,
      }
    });
  }

  getTaf(code: string): Observable<any> {
    return this.http.get(`${environment.metarApiUrl}/taf/${code}/decoded`, {
      headers: {
        'X-API-Key': environment.metarApiKey,
      }
    });
  }
}
