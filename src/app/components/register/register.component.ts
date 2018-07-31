import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserRegister } from '../../models/userRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  user: UserRegister = {
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
