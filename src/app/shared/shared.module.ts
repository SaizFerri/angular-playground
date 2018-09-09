import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { F2lSelectComponent } from './components/f2l-select/f2l-select.component';
import { F2lInputComponent } from './components/f2l-input/f2l-input.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgDatepickerModule
  ],
  exports: [F2lSelectComponent, F2lInputComponent],
  declarations: [F2lSelectComponent, F2lInputComponent]
})
export class SharedModule { }
