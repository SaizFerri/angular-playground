import { Component, OnInit } from '@angular/core';
import { MetarService } from '../../services/metar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  code: string;

  constructor(private readonly metarService: MetarService) { }

  ngOnInit() {
  }

  getMetar() {
    this.metarService.getMetar(this.code.toUpperCase())
      .subscribe(
        (success) => {
          console.log(success);
        }
      )
  }

}
