import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/modules/sidenav/sidenav.service';
import { ApprovalService, IApproval } from 'src/app/core/approval.service';
import { IWorkflowResponse } from 'src/app/core/workflow.service';
import { WorkflowSummaryComponent } from 'src/app/modules/workflow-summary/workflow-summary.component';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pending-approvals',
  templateUrl: './pending-approvals.component.html',
  styleUrls: ['./pending-approvals.component.css'],
})
export class PendingApprovalsComponent implements OnInit {
  isLoading: boolean = true;
  isError: boolean = false;
  approvals: IApproval[] = [];

  constructor(
    private sidenavService: SidenavService,
    private approvalService: ApprovalService,
    private dialog: MatDialog
  ) {
    this.sidenavService.selected = 'Pending Approvals';
  }

  ngOnInit(): void {
    this.approvalService.getPendingApprovals$().subscribe(
      (res) => {
        this.isLoading = false;
        this.approvals = res.data.pendingApprovals;
        console.log(this.approvals);
      },
      (err) => {
        this.isError = true;
      }
    );
  }

  openWorkflow(approval: IApproval, index: number) {
    const ref = this.dialog.open(WorkflowSummaryComponent, {
      data: { workflow: approval.workflow, actionable: true },
      minHeight: '200px',
      maxHeight: '100%',
      minWidth: '500px',
      maxWidth: '100%',
    });
    ref
      .afterClosed()
      .pipe(
        filter((result) => result),
        switchMap((result) =>
          this.approvalService.sendApprovalAction$({
            approvalId: approval._id,
            action: result,
          })
        )
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
