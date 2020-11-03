import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, MatRippleModule, RouterModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
