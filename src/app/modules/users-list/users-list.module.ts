import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
  ],
  exports: [UsersListComponent],
})
export class UsersListModule {}
