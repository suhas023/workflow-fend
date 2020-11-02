import { Component, OnInit } from '@angular/core';
import { AuthService, ISignupRequest } from '../../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  approver: boolean = false;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  signup() {
    if (this.name && this.email && this.password) {
      const details: ISignupRequest = {
        name: this.name,
        email: this.email,
        password: this.password,
        approver: this.approver,
      };
      this.loading = true;
      this.authService.signup(details).subscribe(
        (res) => {
          this.loading = false;
          this.snackbar.open('Signup success', 'ok', { duration: 2000 });
          console.log(res);
        },
        (err: HttpErrorResponse) => {
          this.loading = false;
          this.snackbar.open(err.error.message || 'Error Occurred', 'ok', {
            duration: 2000,
          });
          console.log(err);
        }
      );
    }
  }
}
