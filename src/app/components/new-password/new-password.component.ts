import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NewPasswordModel } from '../../models/new-password.model';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html'
})
export class NewPasswordComponent implements OnInit {

  token: string;
  password: string;
  repeatPassword: string;

  sent: boolean = false;
  passwordError: boolean = false;
  error: boolean = false;
  success: boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
  }

  onSubmit() {
    if (this.password !== this.repeatPassword) {
      this.passwordError = true;
      setTimeout(() => {
        this.passwordError = false;
      }, 2000);
      return;
    }

    const payload: NewPasswordModel = {
      token: this.token,
      password: this.password,
      repeatPassword: this.repeatPassword
    }

    this.userService.resetPassword(payload)
      .subscribe(
        success => {
          this.sent = true;
          this.success = true;
        },
        err => {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 2000);
        }
      )
  }

}
