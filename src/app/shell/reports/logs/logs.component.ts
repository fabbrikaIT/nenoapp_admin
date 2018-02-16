import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  selectedStatusFilter = 0;

  constructor() { }

  ngOnInit() {
  }

  onSelectChange() {
    if (this.selectedStatusFilter === 0) {

    } else {

    }
  }
}
