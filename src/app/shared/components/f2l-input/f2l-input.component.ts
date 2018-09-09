import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-f2l-input',
  templateUrl: './f2l-input.component.html'
})
export class F2lInputComponent implements OnInit {

  @Input() placeholder;
  @Output() value = new EventEmitter<string>();

  isFocus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
