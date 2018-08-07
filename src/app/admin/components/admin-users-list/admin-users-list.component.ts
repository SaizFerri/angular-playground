import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html'
})
export class AdminUsersListComponent implements OnInit {

  users: any[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(
        users => this.users = users,
        err => console.log('Forbidden')
      )
  }

}
