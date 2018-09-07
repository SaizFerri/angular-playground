import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogbookService } from '../../../services/logbook.service';

@Component({
  selector: 'app-logbook-list',
  templateUrl: './logbook-list.component.html'
})
export class LogbookListComponent implements OnInit {

  data: [{}];

  constructor(private readonly logbookService: LogbookService, private readonly router: Router) { }

  ngOnInit() {
    this.logbookService.getLogs()
      .subscribe(
        data => {
          this.data = data;
        },
        err => {
          console.log(err);
        }
      )
  }

  navigateToDetail(id) {
    this.router.navigate([`/logbook/logs/${id}`]);
  }

}
