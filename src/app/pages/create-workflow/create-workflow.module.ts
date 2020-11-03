import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorkflowComponent } from './create-workflow.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: CreateWorkflowComponent }];

@NgModule({
  declarations: [CreateWorkflowComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CreateWorkflowModule {}
