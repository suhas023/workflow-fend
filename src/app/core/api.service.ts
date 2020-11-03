import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  callApi<T>(method: string, url: string, body?: any) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    if (this.authService.token) {
      console.log(this.authService.token);
      headers = headers.append(
        'Authorization',
        `bearer ${this.authService.token}`
      );
    }
    return this.http.request<T>(method, url, { body, headers });
  }
}
