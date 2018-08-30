import { Component, OnInit } from '@angular/core';
import { MetarService } from '../../services/metar.service';

@Component({
  selector: 'app-metar',
  templateUrl: './metar.component.html'
})
export class MetarComponent implements OnInit {

  code: {
    valid: boolean,
    icao: string
  };
  airportOcurrences: {}[];
  metar: {};
  taf: {};
  metarError: string;
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
    this.code = {
      valid: false,
      icao: ''
    }
  }

  ngOnInit() {
  }

  getAirportOcurrences() {
    this.code.valid = false;
    if (this.code.icao.length >= 2 && this.code.icao.length <= 4) {
      this.metarService.getAirports(this.code.icao)
      .subscribe(
        (response) => {
          this.airportOcurrences = response;
        }
      )
    } else {
      this.airportOcurrences = null;
    }
  }

  getMetar() {
    if (!this.code.valid) {
      return;
    }
    this.metarService.getMetar(this.code.icao)
      .subscribe(
        (response) => {
          const data = response.data[0];
          if (typeof data === 'string') {
            this.metarError = data;

            setTimeout(() => {
              this.metarError = null;
            }, 2000);
          } else {
            this.metarError = null;
            this.metar = data;
            for(const flightCategory in this.flightCategories) {
              if(data.flight_category === flightCategory) {
                this.flightCategories[flightCategory] = true;
              }
            }
          }
        },
        (err) => {
          console.log("error");
        }
      );
    this.metarService.getTaf(this.code.icao)
      .subscribe(
        (response) => {
          const data = response.data[0];
          this.taf = data;
        },
        (err) => {
          console.log("Error");
        }
      )
  }

  selectAirport(airport: any): void {
    this.code.icao = airport.icao;
    this.code.valid = true;
    this.airportOcurrences = null;
  }
}
