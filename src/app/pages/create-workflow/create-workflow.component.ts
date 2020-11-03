import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/modules/sidenav/sidenav.service';
import { UsersListComponent } from 'src/app/modules/users-list/users-list.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService, IUserMap } from 'src/app/core/user.service';

@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.css'],
})
export class CreateWorkflowComponent implements OnInit {
  isLoading: boolean = true;
  isError: boolean = false;
  userMap: IUserMap = null;

  approvalTypes: string[] = ['sequential', 'round-robin', 'any one'];
  approvalSymbols = {
    sequential: '->',
    'round-robin': 'and',
    'any one': 'or',
  };

  title: string = '';
  description: string = '';
  levels: ILevel[] = [
    {
      approvalType: 'any one',
      userIds: [],
    },
  ];

  constructor(
    private sidenavService: SidenavService,
    private dialog: MatDialog,
    private userService: UserService
  ) {
    this.sidenavService.selected = 'Create';
  }
  ngOnInit(): void {
    this.userService.getApprovalUsers$().subscribe(
      (res) => {
        this.isLoading = false;
        this.userMap = res.data.userMap;
      },
      (err) => {
        alert('Server Error');
        this.isLoading = false;
        this.isError = true;
      }
    );
  }

  addUsers(index: number): void {
    const dialogRef = this.dialog.open(UsersListComponent, {
      minHeight: '500px',
      maxHeight: '100%',
      width: '420px',
      maxWidth: '100%',
      data: { selected: this.levels[index].userIds, userMap: this.userMap },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.levels[index].userIds = [...result];
      this.levels = [...this.levels];
    });
  }

  addLevel() {
    const newLevel: ILevel = {
      approvalType: 'any one',
      userIds: [],
    };
    this.levels = [...this.levels, newLevel];
  }

  deleteLevel(index: number) {
    this.levels = this.levels.filter((l, i) => i !== index);
  }
}

export type ILevelType = 'sequential' | 'round-robin' | 'any one';

export interface ILevel {
  approvalType: ILevelType;
  userIds: string[];
}
