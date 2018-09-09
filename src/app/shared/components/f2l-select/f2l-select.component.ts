import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-f2l-select',
  templateUrl: './f2l-select.component.html'
})
export class F2lSelectComponent implements OnInit, OnChanges {

  @Input() items;
  @Input() placeholder;
  @Output() select = new EventEmitter<string>();

  selectedValue: string;

  constructor() { }

  ngOnInit() {
    this.selectedValue = this.placeholder;
  }

  ngOnChanges() {
    this.select.emit(this.selectedValue);
  }
}
