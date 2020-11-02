import { Component, OnInit } from '@angular/core';
import { AuthService, ILoginRequest } from '../../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login() {
    if (!this.email || !this.password) return;
    const details: ILoginRequest = {
      email: this.email,
      password: this.password,
    };
    this.loading = true;
    this.authService.login(details).subscribe(
      (res) => {
        this.loading = false;
        this.snackbar.open('Login Success', 'ok', {
          duration: 2000,
        });
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
