import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonAPIService {
  constructor(private httpClient: HttpClient) {}

  callFirstApi(): Observable<any> {
    return this.httpClient.get(`${environment.apiEndPoint}users?page=1`);
  }

  callSecondApi(id: any): Observable<any> {
    return this.httpClient.get(`${environment.apiEndPoint}users/${id}`);
  }
}
