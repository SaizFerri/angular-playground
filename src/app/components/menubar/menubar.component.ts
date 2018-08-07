import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-menubar',
  templateUrl: 'menubar.component.html'
})
export class MenuBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  jwt: JwtHelperService;
  user: string;

  constructor(private authService: AuthService) {
    this.jwt = new JwtHelperService();
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.authService.isLoggedIn$.subscribe((success) => {
      if (success) {
        const token = this.authService.getTokenFromLocalStorage();
        const { email } = this.jwt.decodeToken(token);
        this.user = email;
      } else {
        this.user = '';
      }
    });
  }

  logOut(): void {
    this.authService.logOut();
  }
}