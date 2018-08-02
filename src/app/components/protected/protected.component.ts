import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html'
})
export class ProtectedComponent implements OnInit {

  name: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
