import { Component, OnInit } from '@angular/core';

import { UserLogIn } from '../../models/userLogIn';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user: UserLogIn = {
    email: '',
    password: ''
  }

  token: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logUser(): void {
    this.authService.logIn(this.user)
      .subscribe(token => {
        this.token = token;
        console.log(token);
        
      });
  }

}
