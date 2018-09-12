import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LogbookService } from '../../../services/logbook.service';

@Component({
  selector: 'app-logbook-detail',
  templateUrl: './logbook-detail.component.html'
})
export class LogbookDetailComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly logbookService: LogbookService
  ) { }

  isLoading: boolean = false;
  dataLoaded: boolean = false;
  data: {};

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.logbookService.getLog(id).subscribe(
      data => {
        this.isLoading = false;
        this.data = data;
        this.dataLoaded = true;
      },
      err => {
        this.isLoading = false;
        console.log(err);
      }
    )
  }

}
