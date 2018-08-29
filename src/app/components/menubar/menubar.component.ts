import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { AdminAuthGuard } from '../../services/admin-auth-guard.service';

@Component({
  selector: 'app-menubar',
  templateUrl: 'menubar.component.html'
})
export class MenuBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  user: string;
  showAdminButton: boolean = false;

  constructor(private authService: AuthService, private readonly adminGuard: AdminAuthGuard) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.authService.isLoggedIn$.subscribe((success) => {
      if (success) {
        const { email } = this.authService.decodeToken();

        this.showAdminButton = this.adminGuard.canActivate();
        this.user = email;
      } else {
        this.user = '';
        this.showAdminButton = false;
      }
    });
  }

  logOut(): void {
    this.authService.logOut();
  }
}