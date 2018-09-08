import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { LogbookListComponent } from './components/logbook-list/logbook-list.component';
import { LogbookParentComponent } from './components/logbook-parent/logbook-parent.component';
import { LogbookDetailComponent } from './components/logbook-detail/logbook-detail.component';
import { NewLogComponent } from './components/new-log/new-log.component';

const logbookRoutes: Routes = [ 
  {
    path: 'logbook',
    canActivate: [AuthGuard],
    component: LogbookParentComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          { path: 'new', component: NewLogComponent },
          { path: 'logs', component: LogbookListComponent },
          { path: 'logs/:id', component: LogbookDetailComponent }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(logbookRoutes)],
  exports: [RouterModule]
})
export class LogbookRoutingModule {}
