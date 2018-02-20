import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseComponent } from '../../../shared/base/base.component';
import { AlertService } from '../../../shared/modules/alert/alert.service';
import { PlansEntity } from './../../../shared/models/admin/plans.model';
import { CrudService } from '../../../shared/base/crud.service';
import { DialogService } from '../../../shared/modules/dialog/dialog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  headerTitle: string;
  isNew: boolean = false;

  plan: PlansEntity;

  constructor(alert: AlertService, private formBuilder: FormBuilder, private route: ActivatedRoute,
              private service: CrudService<PlansEntity>, private location: Location, private dialogService: DialogService) {
    super(alert);

    this.service.InitService("admin/plans", ["id"]);
  }

  ngOnInit() {
    this.plan = PlansEntity.GetInstance();

    this.initForm();

    this.route.params.subscribe( params => {
      if (params["id"]) {
        this.isProcessing = true;

        this.service.GetItem([params["id"]]).subscribe(
          ret => {
            this.isProcessing = false;
            this.plan = ret;
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Editar Plano", err);
          }
        );

        this.isNew = false;
        this.headerTitle = "Editar Plano de Contratação";
      } else {
        this.isNew = true;
        this.headerTitle = "Criar Novo Plano de Contratação";
      }
    });
  }

  initForm() {
    this.formFields = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      contractType: [1, Validators.required],
      cost: ["", Validators.required]
    });
  }

  /** FrontEnd Interface Methods */
  onSave() {
    if (this.formIsValid()) {
      this.isProcessing = true;

      window.scrollTo(0, 0);

      if (this.isNew) {
        this.service.CreateItem(this.plan).subscribe(
          ret => {
            this.isProcessing = false;
            this.isNew = false;

            this.location.back();
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Novo Plano", err);
          }
        );
      } else {
        this.service.UpdateItem(this.plan).subscribe(
          ret => {
            this.isProcessing = false;

            this.alert.alertInformation("Plano de Contratação", "Plano de Contratação atualizado com sucesso");
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Novo Plano", err);
          }
        );
      }
     }
  }

  onDelete() {
    this.dialogService.dialogConfirm("Excluir Plano", "Deseja realmente excluir o plao de contratação?", "Excluir", "Cancelar", ret => {
      if (ret) {
        this.isProcessing = true;

        this.service.DeleteItem([this.plan.id.toString()]).subscribe(
          result => {
            this.location.back();
          },
          err => {
            this.alert.alertError("Excluir Plano", err);
              this.isProcessing = false;
          }
        );
      }
    });
  }
}
