import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorkflowComponent } from './create-workflow.component';
import { Routes, RouterModule } from '@angular/router';
import { PageTitleModule } from 'src/app/modules/page-title/page-title.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { UsersListModule } from 'src/app/modules/users-list/users-list.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: '', component: CreateWorkflowComponent }];

@NgModule({
  declarations: [CreateWorkflowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageTitleModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    UsersListModule,
    MatDialogModule,
    MatChipsModule,
    MatIconModule,
  ],
})
export class CreateWorkflowModule {}
