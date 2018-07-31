import { Component, OnInit } from '@angular/core';

import { UserLogIn } from '../../models/userLogIn';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user: UserLogIn = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['']);
    }
  }

  logUser(): void {
    this.authService.logIn(this.user)
      .subscribe(token => {
        console.log('Login successfull');
        this.authService.setTokenInLocalStorage(token.token);
        this.router.navigate(['']);
      },
      err => console.log('Login Failed')
    );
  }

}
