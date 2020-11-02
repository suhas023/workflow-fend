import { Component, OnInit } from '@angular/core';
import { ISidenavItem } from './components/sidenav/sidenav.component';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedSidenavItem = 'Pending Approvals';
  sidenavItems: ISidenavItem[] = [
    {
      name: 'Create',
      data: 'create',
    },
    {
      name: 'My Workflows',
      data: '',
    },
    {
      name: 'Pending Approvals',
      data: 'pending',
    },
    {
      name: 'History',
      data: 'history',
    },
    {
      name: 'Logout',
      data: '',
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onItemClick(item: ISidenavItem) {
    this.selectedSidenavItem = item.name;
    if(item.name === "Logout") {
      this.authService.logout();
    }
  }
}
