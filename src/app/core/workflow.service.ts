import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkflowService {
  url = `${environment.api}/workflow`;

  constructor(private apiService: ApiService) {}

  create(details: ICreateWorkflowRequest) {
    return this.apiService.callApi('POST', `${this.url}/create`, details);
  }

  getCreatedWorkflows$() {
    return this.apiService.callApi<IGetCreatedWorkflowsResponse>(
      'GET',
      `${this.url}`
    );
  }
}

export type IApprovalAction =
  | 'blocked'
  | 'pending'
  | 'approve'
  | 'reject'
  | 'rejectAndRemove';
export type IApprovalType = 'sequential' | 'round-robin' | 'any one';
export type ILevelStatus = 'blocked' | 'active' | 'terminated' | 'executed';
export type IWorkflowStatus = 'active' | 'terminated' | 'executed';

export interface ILevelRequest {
  approvalType: IApprovalType;
  userIds: string[];
}

export interface ICreateWorkflowRequest {
  title: string;
  description: string;
  levels: ILevelRequest[];
}

export interface IApprovalResponse {
  user: {
    name: string;
    email: string;
  };
  action: IApprovalAction;
}

export interface ILevelResponse {
  approvalType: IApprovalType;
  approvals: IApprovalResponse[];
  status: ILevelStatus;
}

export interface IWorkflowResponse {
  _id: string;
  createdBy: string;
  title: string;
  description: string;
  status: IWorkflowStatus;
  levels: ILevelResponse[];
  currentLevel: number;
}

export interface IGetCreatedWorkflowsResponse {
  data: {
    workflows: IWorkflowResponse[];
  };
}
