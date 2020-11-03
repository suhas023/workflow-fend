import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/modules/sidenav/sidenav.service';

@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.css'],
})
export class CreateWorkflowComponent implements OnInit {
  constructor(private sidenavService: SidenavService) {
    this.sidenavService.selected = 'Create';
  }

  ngOnInit(): void {}
}
