import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  callApi<T>(method: string, url: string, body?: any) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
      // .append('Authorization', `bearer ${token}`);
    return this.http.request<T>(method, url, { body, headers });
  }
}
