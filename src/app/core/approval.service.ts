import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IWorkflowResponse } from './workflow.service';

@Injectable({
  providedIn: 'root',
})
export class ApprovalService {
  url = 'http://localhost:5002/user-approval';

  constructor(private api: ApiService) {}

  getPendingApprovals$() {
    return this.api.callApi<IPendingApprovalResponse>(
      'GET',
      `${this.url}/pending`
    );
  }

  sendApprovalAction$(data: { approvalId: string; action: string }) {
    return this.api.callApi('POST', `${this.url}/action`, data);
  }
}

export interface IApproval {
  _id: string;
  user: string;
  workflow: IWorkflowResponse;
  levelIndex: number;
  approvalIndex: number;
}

export interface IPendingApprovalResponse {
  data: {
    pendingApprovals: IApproval[];
  };
}
