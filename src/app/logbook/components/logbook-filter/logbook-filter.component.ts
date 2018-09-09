import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerOptions } from 'ng2-datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-logbook-filter',
  templateUrl: './logbook-filter.component.html'
})
export class LogbookFilterComponent implements OnInit {

  show: boolean = false;
  fromDate: any;
  toDate: any;

  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'YYYY-MM-DD',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    placeholder: 'yyyy-mm-dd',
    useEmptyBarTitle: false
  };

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  applyFilter(): void {
    console.log(moment(this.fromDate).format('YYYY-MM-DD'));
    
  }

}
