import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingApprovalsComponent } from './pending-approvals.component';
import { PageTitleModule } from 'src/app/modules/page-title/page-title.module';
import { WorkflowCardModule } from 'src/app/modules/workflow-card/workflow-card.module';
import { WorkflowSummaryModule } from 'src/app/modules/workflow-summary/workflow-summary.module';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [{ path: '', component: PendingApprovalsComponent }];

@NgModule({
  declarations: [PendingApprovalsComponent],
  imports: [
    CommonModule,
    PageTitleModule,
    WorkflowCardModule,
    WorkflowSummaryModule,
    RouterModule.forChild(routes),
    MatDialogModule,
  ],
  exports: [PendingApprovalsComponent],
})
export class PendingApprovalsModule {}
