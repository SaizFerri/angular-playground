import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserRegisterModel } from '../../models/user-register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  error: boolean = false;
  passwordError: boolean = false;
  success: boolean = false;

  user: UserRegisterModel = {
    name: '',
    surname: '',
    email: '',
    password: '',
    repeatPassword: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  registerUser(): void {
    if(this.user.password !== this.user.repeatPassword) {
      this.passwordError = true;
      setTimeout(() => {
        this.passwordError = false;
      }, 3000); 
      return;
    }    
    this.authService.register(this.user)
      .subscribe(() => {
        console.log('Register successfull.');
        this.success = true;
        setTimeout(() => {
          this.success = false;
          this.router.navigate(['login']);
        }, 1000)
      },
      err => {
        console.log('Register failed.');
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);  
      })
  }

  get isError() {
    return this.error || this.passwordError;
  }

}
