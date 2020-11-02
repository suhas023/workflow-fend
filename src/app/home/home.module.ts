import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, SidenavComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
