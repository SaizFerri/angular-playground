import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyHashModel } from '../../models/verify-hash.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html'
})
export class VerifyComponent implements OnInit {
  loading: boolean = true;
  success: boolean = false;
  error: boolean = false;
  hash: string;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.hash = this.route.snapshot.paramMap.get('hash');

    const verifyHash: VerifyHashModel = {
      hash: this.hash
    };

    this.usersService.verifyUser(verifyHash)
      .subscribe(
        success => {
        this.loading = false;
        this.success = true;
        this.authService.logOut();
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 1000);
      },
      err => {
        this.loading = false;
        this.error = true;
      });
  }

}
