import { Component, OnInit } from '@angular/core';
import { SidenavService } from "src/app/modules/sidenav/sidenav.service";

@Component({
  selector: 'app-my-workflows',
  templateUrl: './my-workflows.component.html',
  styleUrls: ['./my-workflows.component.css']
})
export class MyWorkflowsComponent implements OnInit {

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.selected = "My Workflows";
  }

  ngOnInit(): void {
  }

}
