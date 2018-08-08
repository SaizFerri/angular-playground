import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminParentComponent } from './components/admin-parent/admin-parent.component';
import { AdminUsersListComponent } from './components/admin-users-list/admin-users-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminUserDetailComponent } from './components/admin-user-detail/admin-user-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [AdminParentComponent, AdminUsersListComponent, AdminUserDetailComponent]
})
export class AdminModule { }
