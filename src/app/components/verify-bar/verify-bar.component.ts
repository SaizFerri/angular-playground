import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-verify-bar',
  templateUrl: './verify-bar.component.html'
})
export class VerifyBarComponent implements OnInit {

  show: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((success) => {
      if(success) {
        if (!this.userService.isAccountVerified()) {          
          this.show = success;
        }
      } else {
        this.show = success;
      }
    });
  }

  resendEmail() {
    this.userService.resendVerificationEmail()
      .subscribe(
        success => this.show = false,
        err => this.show = false
      );
  }

  hideBar():void {
    this.show = false;
  }

}
