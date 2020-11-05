import { Component, OnInit } from '@angular/core';
import { IApproval, ApprovalService } from 'src/app/core/approval.service';
import { SidenavService } from 'src/app/modules/sidenav/sidenav.service';
import { MatDialog } from '@angular/material/dialog';
import { WorkflowSummaryComponent } from 'src/app/modules/workflow-summary/workflow-summary.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  isLoading: boolean = true;
  isError: boolean = false;
  approvals: IApproval[] = [];

  constructor(
    private sidenavService: SidenavService,
    private approvalService: ApprovalService,
    private dialog: MatDialog
  ) {
    this.sidenavService.selected = 'History';
  }

  ngOnInit(): void {
    this.fetchPendingWorkflows();
  }

  fetchPendingWorkflows() {
    this.isLoading = true;
    this.approvalService.getApprovalHistory$().subscribe(
      (res) => {
        this.isLoading = false;
        this.approvals = res.data.pendingApprovals;
        console.log(this.approvals);
      },
      (err) => {
        this.isError = true;
        this.isLoading = false;
      }
    );
  }

  openWorkflow(approval: IApproval, index: number) {
    const ref = this.dialog.open(WorkflowSummaryComponent, {
      data: { workflow: approval.workflow, actionable: false },
      minHeight: '200px',
      maxHeight: '100%',
      minWidth: '500px',
      maxWidth: '100%',
    });
  }
}
