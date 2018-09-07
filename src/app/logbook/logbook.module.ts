import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogbookListComponent } from './components/logbook-list/logbook-list.component';
import { LogbookDetailComponent } from './components/logbook-detail/logbook-detail.component';
import { LogbookFilterComponent } from './components/logbook-filter/logbook-filter.component';
import { LogbookParentComponent } from './components/logbook-parent/logbook-parent.component';
import { LogbookRoutingModule } from './logbook-routing.module';
import { LogComponentComponent } from './components/log-component/log-component.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    LogbookRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [LogbookListComponent, LogbookDetailComponent, LogbookFilterComponent, LogbookParentComponent, LogComponentComponent]
})
export class LogbookModule { }
