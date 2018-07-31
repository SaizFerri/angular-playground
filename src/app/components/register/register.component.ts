import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserRegisterModel } from '../../models/user-register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  user: UserRegisterModel = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  registerUser(): void {
    this.authService.register(this.user)
      .subscribe(() => {
        console.log('Register successfull.')
      },
      err => console.log('Register failed.'))
  }

}
