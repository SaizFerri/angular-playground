import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { ResetPasswordEmailModel } from '../../models/reset-password-email.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {

  email: string = '';
  sent: boolean = false;
  error: boolean = false;
  success: boolean = false;

  constructor(private router: Router, private userService: UsersService) { }

  onSubmit(): void {
    const payload: ResetPasswordEmailModel = { email: this.email };

    this.userService.getResetPasswordToken(payload)
      .subscribe(
        success => {
          this.sent = true;
          this.success = true;
        },
        err => {
          this.error = true;
          setTimeout(() => this.error = false, 2000);
        }
      );
  }

}
