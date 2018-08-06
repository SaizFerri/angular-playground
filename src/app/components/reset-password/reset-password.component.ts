import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  email: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    
  }

}
