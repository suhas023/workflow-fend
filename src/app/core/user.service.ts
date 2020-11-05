import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import  { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  getApprovalUsers$() {
    const url = `${environment.api}/user/approval-users`;
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
