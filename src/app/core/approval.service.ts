import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IWorkflowResponse } from './workflow.service';
import  { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ApprovalService {

  url = `${environment.api}/user-approval`;

  constructor(private api: ApiService) {}

  getPendingApprovals$() {
    return this.api.callApi<IPendingApprovalResponse>(
      'GET',
      `${this.url}/pending`
    );
  }

  getApprovalHistory$() {
    return this.api.callApi<IPendingApprovalResponse>(
      'GET',
      `${this.url}/history`
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
