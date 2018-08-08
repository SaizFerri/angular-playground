import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

export class UserLogin {
  email: string;
  password: string;

  constructor(email?: string, password?: string) {
    this.email = email;
    this.password = password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  success: boolean = false;

  user: UserLogin = new UserLogin();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['']);
    }
  }

  logIn(loginForm: NgForm): void {
    this.authService.logIn(this.user)
      .subscribe(token => {
        loginForm.reset();
        
        this.authService.setTokenInLocalStorage(token.token);
        this.authService.isLoggedIn$.next(true);
        this.success = true;

        setTimeout(() => {
          this.success = false;
          this.router.navigate(['']);
        }, 1000)
      },
      err => {
        const lastUser = new UserLogin(this.user.email);
        this.error = true;
        loginForm.reset(lastUser);

        setTimeout(() => {
          this.error = false;
        }, 3000);        
      }
    );
  }

}
