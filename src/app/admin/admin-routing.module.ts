import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';
import { AdminParentComponent } from './components/admin-parent/admin-parent.component';
import { AdminUsersListComponent } from './components/admin-users-list/admin-users-list.component';

const adminRoutes: Routes = [ 
  {
    path: 'undinosaurio',
    canActivate: [AdminAuthGuard],
    component: AdminParentComponent,
    children: [
      {
        path: '',
        canActivate: [AdminAuthGuard],
        children: [
          { path: 'users', component: AdminUsersListComponent }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}