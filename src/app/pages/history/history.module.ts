import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowSummaryModule } from 'src/app/modules/workflow-summary/workflow-summary.module';
import { WorkflowCardModule } from 'src/app/modules/workflow-card/workflow-card.module';
import { PageTitleModule } from "src/app/modules/page-title/page-title.module";

const routes: Routes = [{ path: '', component: HistoryComponent }];

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WorkflowSummaryModule,
    WorkflowCardModule,
    PageTitleModule
  ],
})
export class HistoryModule {}
