import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/modules/sidenav/sidenav.service';
import {
  WorkflowService,
  IWorkflowResponse,
} from 'src/app/core/workflow.service';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { WorkflowSummaryComponent } from 'src/app/modules/workflow-summary/workflow-summary.component';

@Component({
  selector: 'app-my-workflows',
  templateUrl: './my-workflows.component.html',
  styleUrls: ['./my-workflows.component.css'],
})
export class MyWorkflowsComponent implements OnInit {
  isLoading: boolean = true;
  isError: boolean = false;
  workflows: IWorkflowResponse[] = [];

  constructor(
    private sidenavService: SidenavService,
    private workflowService: WorkflowService,
    private dialog: MatDialog
  ) {
    this.sidenavService.selected = 'My Workflows';
  }

  ngOnInit(): void {
    this.workflowService.getCreatedWorkflows$().subscribe(
      (res) => {
        this.isLoading = false;
        this.workflows = res.data.workflows;
        console.log(this.workflows)
      },
      (err) => {
        this.isLoading = false;
        this.isError = true;
      }
    );
  }

  openWorkflow(workflow: IWorkflowResponse) {
    this.dialog.open(WorkflowSummaryComponent, {
      data: {workflow},
      minHeight: '200px',
      maxHeight: '100%',
      minWidth: '500px',
      maxWidth: '100%',
    });
  }
}
