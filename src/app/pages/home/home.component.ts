import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { ISidenavItem } from '../../modules/sidenav/sidenav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sidenavItems: ISidenavItem[] = [
    {
      name: 'New Workflow',
      data: '/create',
    },
    {
      name: 'My Workflows',
      data: '',
    },
    {
      name: 'Pending Approvals',
      data: '/pending',
    },
    {
      name: 'History',
      data: '/history',
    },
    {
      name: 'Logout',
      data: '',
      callback: true,
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onItemClick(item: ISidenavItem) {
    if (item.name === 'Logout') this.authService.logout();
  }
}
