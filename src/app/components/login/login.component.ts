import { Component, OnInit } from '@angular/core';

import { UserLogInModel } from '../../models/user-logIn.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user: UserLogInModel = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['']);
    }
  }

  logIn(): void {
    this.authService.logIn(this.user)
      .subscribe(token => {
        console.log('Login successfull');
        this.authService.setTokenInLocalStorage(token.token);
        this.authService.isLoggedIn$.next(true);
        this.router.navigate(['']);
      },
      err => console.log('Login Failed')
    );
  }

}
