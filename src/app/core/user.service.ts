import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  getApprovalUsers$() {
    const url = 'http://localhost:5002/user/approval-users';
    return this.apiService.callApi<IGetUserMapResponse>('GET', url);
  }
}

export interface IGetUserMapResponse {
  data: {
    userMap: IUserMap;
  };
}

export interface IUser {
  _id: string;
  userId: string;
  name: string;
  email: string;
}

export interface IUserMap {
  allIds: string[];
  byId: {
    [id: string]: IUser;
  };
}
