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
    return this.http.get(`https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=${code}&hoursBeforeNow=1`)
      .pipe(
        map((res) => {
          //return parser.toJson(res);
        })
      )
  }
}
