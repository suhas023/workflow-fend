import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IWorkflowResponse } from 'src/app/core/workflow.service';

@Component({
  selector: 'app-workflow-summary',
  templateUrl: './workflow-summary.component.html',
  styleUrls: ['./workflow-summary.component.css'],
})
export class WorkflowSummaryComponent implements OnInit {
  workflow: IWorkflowResponse;

  approvalSymbols = {
    sequential: '->',
    'round-robin': 'and',
    'any one': 'or',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { workflow: IWorkflowResponse; actionable?: boolean }
  ) {
    this.workflow = this.data.workflow;
  }

  ngOnInit(): void {}
}
