import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowCardComponent } from './workflow-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [WorkflowCardComponent],
  imports: [CommonModule, MatIconModule, MatRippleModule],
  exports: [WorkflowCardComponent],
})
export class WorkflowCardModule {}
