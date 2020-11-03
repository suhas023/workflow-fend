import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWorkflowsComponent } from './my-workflows.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: MyWorkflowsComponent }];

@NgModule({
  declarations: [MyWorkflowsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MyWorkflowsModule {}
