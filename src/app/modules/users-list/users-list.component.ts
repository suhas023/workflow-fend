import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUserMap } from 'src/app/core/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  selected: string[] = [];
  userMap: IUserMap = {
    allIds: [],
    byId: {},
  };

  constructor(
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA)
    public data: { selected: string[]; userMap: IUserMap }
  ) {
    this.userMap = data.userMap;
    this.selected = [...data.selected];
  }

  ngOnInit(): void {}
}
