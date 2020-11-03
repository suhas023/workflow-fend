import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, MatRippleModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
