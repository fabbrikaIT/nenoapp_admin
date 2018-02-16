import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../shared/base/base.component';
import { AlertService } from '../../shared/modules/alert/alert.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent extends BaseComponent implements OnInit {

  constructor(alert: AlertService) {
    super(alert);
   }

  ngOnInit() {
  }

}
