import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { SidenavModule } from '../../modules/sidenav/sidenav.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../my-workflows/my-workflows.module').then(
            (m) => m.MyWorkflowsModule
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('../create-workflow/create-workflow.module').then(
            (m) => m.CreateWorkflowModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatRippleModule,
    SidenavModule,
  ],
})
export class HomeModule {}
