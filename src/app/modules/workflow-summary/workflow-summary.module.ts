import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowSummaryComponent } from './workflow-summary.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WorkflowSummaryComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [WorkflowSummaryComponent],
})
export class WorkflowSummaryModule {}
