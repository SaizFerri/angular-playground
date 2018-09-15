import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LogbookRoutingModule } from './logbook-routing.module';

import { LogbookListComponent } from './components/logbook-list/logbook-list.component';
import { LogbookDetailComponent } from './components/logbook-detail/logbook-detail.component';
import { LogbookFilterComponent } from './components/logbook-filter/logbook-filter.component';
import { LogbookParentComponent } from './components/logbook-parent/logbook-parent.component';
import { LogComponent } from './components/log/log.component';
import { NewLogComponent } from './components/new-log/new-log.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgDatepickerModule } from 'ng2-datepicker';
import { SharedModule } from '../shared/shared.module';
import { LogbookDashboardComponent } from './components/logbook-dashboard/logbook-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LogbookRoutingModule,
    SharedModule,
    AngularFontAwesomeModule,
    NgbModule,
    NgDatepickerModule
  ],
  declarations: [LogbookListComponent, LogbookDetailComponent, LogbookFilterComponent, LogbookParentComponent, LogComponent, NewLogComponent, LogbookDashboardComponent]
})
export class LogbookModule { }
