import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../shared/base/base.component';
import { AlertService } from '../../shared/modules/alert/alert.service';
import { PlansEntity } from '../../shared/models/admin/plans.model';
import { CrudService } from '../../shared/base/crud.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent extends BaseComponent implements OnInit {
  plansList: Array<PlansEntity> = new Array<PlansEntity>();

  constructor(alert: AlertService, private service: CrudService<PlansEntity>) {
    super(alert);
   }

  ngOnInit() {
    this.service.InitService("admin/plans", [""]);

    this.ListPlans();
  }

  private ListPlans() {
    this.isProcessing = true;

    this.service.ListItems().subscribe(
      ret => {
          this.isProcessing = false;

          this.plansList = ret;
      },
      err => {
          this.alert.alertError("Gestão de Planos", err);
          this.isProcessing = false;
      }
    );
  }


}
