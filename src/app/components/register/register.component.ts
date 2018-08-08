import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

export class UserRegister {
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;

  constructor(name: string, surname: string, email?: string, password?: string, repeatPassword?: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.repeatPassword = repeatPassword;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  error: boolean = false;
  passwordError: boolean = false;
  success: boolean = false;

  user: UserRegister = new UserRegister('', '');

  constructor(private router: Router, private authService: AuthService) { }

  registerUser(registerForm: NgForm): void {
    const lastUser: UserRegister = new UserRegister(this.user.name, this.user.surname, this.user.email);
    
    if(this.user.password !== this.user.repeatPassword) {
      this.passwordError = true;
      registerForm.reset(lastUser);

      setTimeout(() => {
        this.passwordError = false;
      }, 3000); 
      return;
    }    
    this.authService.register(this.user)
      .subscribe(() => {
        this.success = true;
        registerForm.reset();

        setTimeout(() => {
          this.success = false;
          this.router.navigate(['login']);
        }, 1000)
      },
      err => {
        const lastUser: UserRegister = new UserRegister(this.user.name, this.user.surname);

        this.error = true;
        registerForm.reset(lastUser);

        setTimeout(() => {
          this.error = false;
        }, 3000);  
      })
  }

  get isError() {
    return this.error || this.passwordError;
  }

}
