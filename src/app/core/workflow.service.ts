import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class WorkflowService {
  url = 'http://localhost:5002/workflow';

  constructor(private apiService: ApiService) {}

  create(details: ICreateWorkflowRequest) {
    return this.apiService.callApi('POST', `${this.url}/create`, details);
  }
}

export type ILevelType = 'sequential' | 'round-robin' | 'any one';

export interface ILevel {
  approvalType: ILevelType;
  userIds: string[];
}

export interface ICreateWorkflowRequest {
  title: string;
  description: string;
  levels: ILevel[];
}
