import { Component, OnInit } from '@angular/core';
import { FlightRoleEnum } from '../../enum/flight-role.enum';
import { DatepickerOptions } from 'ng2-datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html'
})
export class NewLogComponent implements OnInit {

  flightRoleItems(): Array<string> {
    return Object.values(FlightRoleEnum);
  }

  rolesPlaceholder: FlightRoleEnum = FlightRoleEnum.PILOT;
  role: string = 'Pilot';
  date: Date;
  dateOptions: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'YYYY-MM-DD',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    placeholder: 'yyyy-mm-dd',
    useEmptyBarTitle: false
  };

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  navigateBack() {
    this.router.navigate(['/logbook/logs']);
  }

  getFlightRole(selected: string) {
    for (const key in FlightRoleEnum) {
      if (Object.keys(FlightRoleEnum[key] === selected)) {
        this.role = selected;
      }
    }
  }
}

/**
* {
    "date": "2018-09-06",
    "aircraft": {
      "registration": "D-EPPO",
      "model": "DA-20",
      "type": "single engine"
    },
    "pic": {
      "duty": "PIC"
    },
    "pm": {
      "name": "",
      "duty": ""
    },
    "from": "EDAY",
    "to": "EDAY",
    "time": {
      "start": "09:12",
      "end": "10:16",
      "nextDay": false,
      "total": null,
      "dayTime": "day"
    },
    "remarks": "This is a remark"
  }
 */
