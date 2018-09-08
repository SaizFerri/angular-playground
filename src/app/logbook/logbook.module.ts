import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogbookListComponent } from './components/logbook-list/logbook-list.component';
import { LogbookDetailComponent } from './components/logbook-detail/logbook-detail.component';
import { LogbookFilterComponent } from './components/logbook-filter/logbook-filter.component';
import { LogbookParentComponent } from './components/logbook-parent/logbook-parent.component';
import { LogbookRoutingModule } from './logbook-routing.module';
import { LogComponent } from './components/log/log.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NewLogComponent } from './components/new-log/new-log.component';

@NgModule({
  imports: [
    CommonModule,
    LogbookRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [LogbookListComponent, LogbookDetailComponent, LogbookFilterComponent, LogbookParentComponent, LogComponent, NewLogComponent]
})
export class LogbookModule { }
