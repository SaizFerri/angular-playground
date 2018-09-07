import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-log-component',
  templateUrl: './log-component.component.html'
})
export class LogComponentComponent implements OnInit {

  @Input() log;
  day: string;
  month: string;
  year: string;

  constructor() { }

  ngOnInit() {
    const date = moment(this.log.date).format('ll').split(' ');
    const day = date[1].replace(',', '');
    this.day = day.length === 1 ? '0' + day : day;
    this.month = date[0].toUpperCase();
    this.year = date[2].substring(2);
  }

}
