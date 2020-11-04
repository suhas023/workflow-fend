import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWorkflowsComponent } from './my-workflows.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowCardModule } from 'src/app/modules/workflow-card/workflow-card.module';
import { PageTitleModule } from 'src/app/modules/page-title/page-title.module';
import { WorkflowSummaryModule } from 'src/app/modules/workflow-summary/workflow-summary.module';
import { MatDialogModule } from "@angular/material/dialog";

const routes: Routes = [{ path: '', component: MyWorkflowsComponent }];

@NgModule({
  declarations: [MyWorkflowsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WorkflowCardModule,
    PageTitleModule,
    WorkflowSummaryModule,
    MatDialogModule
  ],
})
export class MyWorkflowsModule {}
