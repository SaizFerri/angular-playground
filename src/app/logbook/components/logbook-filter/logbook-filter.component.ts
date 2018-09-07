import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logbook-filter',
  templateUrl: './logbook-filter.component.html'
})
export class LogbookFilterComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showFilterPanel(): void {
    this.show = !this.show;
  }

}
