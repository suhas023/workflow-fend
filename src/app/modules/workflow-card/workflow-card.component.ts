import { Component, OnInit, Input, Output } from '@angular/core';
import { IWorkflowResponse } from 'src/app/core/workflow.service';

@Component({
  selector: 'app-workflow-card',
  templateUrl: './workflow-card.component.html',
  styleUrls: ['./workflow-card.component.css'],
})
export class WorkflowCardComponent implements OnInit {
  @Input() workflow: IWorkflowResponse = null;
  @Input() subtitle?: string = null;

  constructor() {}

  ngOnInit(): void {}
}
