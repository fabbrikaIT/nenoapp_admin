import { Component, OnInit } from '@angular/core';

import { ScreenEntity } from '../../../shared/models/config/screen.model';
import { BaseComponent } from '../../../shared/base/base.component';
import { ConfigurationService } from '../../../shared/services/config.service';
import { AlertService } from './../../../shared/modules/alert/alert.service';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss']
})
export class ScreensComponent extends BaseComponent implements OnInit {
  public screenList: Array<ScreenEntity> = new Array<ScreenEntity>();

  constructor(alert: AlertService, private service: ConfigurationService) {
    super(alert);
  }

  ngOnInit() {
    this.service.Init();

    this.loadScreens();
  }

  loadScreens() {
    this.isProcessing = true;

    this.service.ScreenService.ListItems().subscribe(
      ret => {
        this.isProcessing = false;

        this.screenList = ret;
      },
      err => {
        this.isProcessing = false;
        this.alert.alertError("Listar Telas", err);
      }
    );
  }
}
