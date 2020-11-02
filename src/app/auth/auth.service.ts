import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string = null;
  name: string = null;
  email: string = null;
  userId: string = null;

  url = 'http://localhost:5002/user';

  constructor(private apiService: ApiService) {}

  signup(details: ISignupRequest): Observable<IAuthResponse> {
    return this.apiService
      .callApi<IAuthResponse>('POST', `${this.url}/signup`, details)
      .pipe(
        tap((res) => {
          this.token = res.data.token;
          this.name = res.data.name;
          this.email = res.data.email;
          this.userId = res.data.userId;
        })
      );
  }

  login(details: ILoginRequest): Observable<IAuthResponse> {
    return this.apiService
      .callApi<IAuthResponse>('POST', `${this.url}/login`, details)
      .pipe(
        tap((res) => {
          this.token = res.data.token;
          this.name = res.data.name;
          this.email = res.data.email;
          this.userId = res.data.userId;
        })
      );
  }
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ISignupRequest {
  name: string;
  email: string;
  password: string;
  approver: boolean;
}

export interface IAuthResponse {
  data: {
    token: string;
    name: string;
    email: string;
    userId: string;
  };
}
