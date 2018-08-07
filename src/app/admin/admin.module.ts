import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminParentComponent } from './components/admin-parent/admin-parent.component';
import { AdminUsersListComponent } from './components/admin-users-list/admin-users-list.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminParentComponent, AdminUsersListComponent]
})
export class AdminModule { }
