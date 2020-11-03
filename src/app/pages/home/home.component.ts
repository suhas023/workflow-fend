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
      name: 'Create',
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
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
