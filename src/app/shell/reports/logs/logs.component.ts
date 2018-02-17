import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../../shared/base/base.component';
import { AlertService } from './../../../shared/modules/alert/alert.service';
import { LogService } from './../../../shared/services/log.service';
import { ApplicationLog } from './../../../shared/models/logs/applicationlog.model';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent extends BaseComponent implements OnInit {
  selectedStatusFilter = 0;
  logList: Array<ApplicationLog> = new Array<ApplicationLog>();

  constructor(alert: AlertService, private service: LogService) {
    super(alert);
  }

  ngOnInit() {
    this.ListApplicationLogs();
  }

  private ListApplicationLogs() {
    this.isProcessing = true;

    this.service.ListApplicationLogs().subscribe(
      ret => {
          this.isProcessing = false;

          this.logList = ret;
      },
      err => {
          this.alert.alertError("Monitoring Log", err);
          this.isProcessing = false;
      }
    );
  }

  private ListApplicationByTypeLogs() {
    this.isProcessing = true;

    this.service.ListApplicationByTypeLogs(this.selectedStatusFilter).subscribe(
      ret => {
          this.isProcessing = false;

          this.logList = ret;
      },
      err => {
          this.alert.alertError("Monitoring Log", err);
          this.isProcessing = false;
      }
    );
  }

  onSelectChange() {
    if (this.selectedStatusFilter === 0) {
      this.ListApplicationLogs();
    } else {
      this.ListApplicationByTypeLogs();
    }
  }
}
