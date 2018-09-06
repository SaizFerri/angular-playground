import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-component',
  templateUrl: './log-component.component.html'
})
export class LogComponentComponent implements OnInit {

  @Input() log;

  constructor() { }

  ngOnInit() {
  }

}
