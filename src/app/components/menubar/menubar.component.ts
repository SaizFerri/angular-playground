import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { AdminAuthGuard } from '../../services/admin-auth-guard.service';

@Component({
  selector: 'app-menubar',
  templateUrl: 'menubar.component.html',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out',   style({
        transform: 'translateX(100%)'
      })),
      transition('in => out', animate('100ms ease-out')),
      transition('out => in', animate('100ms ease-in'))
    ]),
  ]
})
export class MenuBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  menuState: string = 'out';  
  user: string;
  showAdminButton: boolean = false;
  show: boolean = true;

  constructor(
    private authService: AuthService,
    private readonly adminGuard: AdminAuthGuard
  ) {}

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

  toggleMenu(): void {
    this.menuState = this.menuState === 'in' ? 'out' : 'in';
  }
}