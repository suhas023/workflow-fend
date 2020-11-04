import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/modules/sidenav/sidenav.service';
import { UsersListComponent } from 'src/app/modules/users-list/users-list.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService, IUserMap } from 'src/app/core/user.service';
import {
  ILevelRequest,
  WorkflowService,
  ICreateWorkflowRequest,
} from 'src/app/core/workflow.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/auth.service';

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
  levels: ILevelRequest[] = [
    {
      approvalType: 'any one',
      userIds: [],
    },
  ];

  constructor(
    private sidenavService: SidenavService,
    private dialog: MatDialog,
    private userService: UserService,
    private snackbar: MatSnackBar,
    private workflowService: WorkflowService,
    private authService: AuthService
  ) {
    this.sidenavService.selected = 'New Workflow';
  }
  ngOnInit(): void {
    this.userService.getApprovalUsers$().subscribe(
      (res) => {
        this.isLoading = false;
        this.userMap = res.data.userMap;
        this.userMap.allIds = this.userMap.allIds.filter(
          (id) => id !== this.authService.userId
        );
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
    const newLevel: ILevelRequest = {
      approvalType: 'any one',
      userIds: [],
    };
    this.levels = [...this.levels, newLevel];
  }

  deleteLevel(index: number) {
    this.levels = this.levels.filter((l, i) => i !== index);
  }

  create() {
    const { isValid, message } = this.verify();
    if (!isValid) {
      return this.snackbar.open(message, 'ok', { duration: 4000 });
    }
    const details: ICreateWorkflowRequest = {
      title: this.title,
      description: this.description,
      levels: this.levels,
    };
    this.workflowService.create(details).subscribe((res) => {
      console.log(res);
    });
  }

  verify() {
    let isValid = true;
    let message = '';
    if (!this.title) {
      isValid = false;
      message = 'Please enter title';
    } else if (!this.description) {
      isValid = false;
      message = 'Please enter description';
    } else if (!this.levels.length) {
      isValid = false;
      message = 'Please add atleast one level';
    } else {
      for (let i = 0; i < this.levels.length; i++) {
        if (!this.levels[i].userIds.length) {
          isValid = false;
          message = `Please add users to level #${i + 1}`;
          break;
        }
      }
    }
    return { isValid, message };
  }
}
