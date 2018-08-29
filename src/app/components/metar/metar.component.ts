import { Component, OnInit } from '@angular/core';
import { MetarService } from '../../services/metar.service';

@Component({
  selector: 'app-metar',
  templateUrl: './metar.component.html'
})
export class MetarComponent implements OnInit {

  code: string;
  data: {};
  observedTime: string;
  observedDate: string;
  flightCategories: {
    VFR: boolean,
    MVFR: boolean,
    IFR: boolean,
    LIFR: boolean
  };

  constructor(private readonly metarService: MetarService) {
    this.flightCategories = {
      VFR: false,
      MVFR: false,
      IFR: false,
      LIFR: false
    };
  }

  ngOnInit() {
  }

  getMetar() {
    this.metarService.getMetar(this.code.toUpperCase())
      .subscribe(
        (response) => {
          const data = response.data[0];
          this.data = data;
          for(const flightCategory in this.flightCategories) {
            if(data.flight_category === flightCategory) {
              this.flightCategories[flightCategory] = true;
            }
          }
          this.observedDate = data.observed.split('@')[0];
          this.observedTime = data.observed.split('@')[1];
        },
        (err) => {
          console.log("Error");
        }
      )
  }
}
