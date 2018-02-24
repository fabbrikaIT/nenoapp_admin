import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AlertService } from './../../../../shared/modules/alert/alert.service';
import { BaseComponent } from '../../../../shared/base/base.component';
import { ConfigurationService } from '../../../../shared/services/config.service';
import { ScreenEntity } from './../../../../shared/models/config/screen.model';
import { DialogService } from '../../../../shared/modules/dialog/dialog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  public screenList: Array<ScreenEntity> = new Array<ScreenEntity>();
  public screen: ScreenEntity = ScreenEntity.GetInstance();

  isNew: boolean = false;
  headerTitle: string = "";

  constructor(alert: AlertService, private service: ConfigurationService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,  private dialogService: DialogService, private location: Location) {
    super(alert);
  }

  ngOnInit() {
    this.service.Init();

    this.initForm();

    this.loadScreens();

    this.route.params.subscribe( params => {
      if (params["id"]) {
        this.isProcessing = true;

        this.service.ScreenService.GetItem([params["id"]]).subscribe(
          ret => {
            this.isProcessing = false;
            this.screen = ret;
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Editar Tela", err);
          }
        );

        this.isNew = false;
        this.headerTitle = "Editar Tela/Funcionalidade";
      } else {
        this.isNew = true;
        this.headerTitle = "Criar Nova Tela/Funcionalidade";
      }
    });
  }

  initForm() {
    this.formFields = this.formBuilder.group({
      name: ["", Validators.required],
      code: ["", Validators.required],
      parentId: [null],
      path: ["", Validators.required],
      icon: ["", Validators.required]
    });
  }

  loadScreens() {
    this.service.ScreenService.ListItems().subscribe(
      ret => {
        this.screenList = ret;
      },
      err => {
        this.alert.alertError("Listar Telas", err);
      }
    );
  }

  // Front-End Methods
  onDelete() {
    this.dialogService.dialogConfirm("Excluir Tela", "Deseja realmente excluir o funcionalidade da aplicação?", "Excluir", "Cancelar", ret => {
      if (ret) {
        this.isProcessing = true;

        this.service.ScreenService.DeleteItem([this.screen.id.toString()]).subscribe(
          result => {
            this.location.back();
          },
          err => {
            this.alert.alertError("Excluir tela", err);
              this.isProcessing = false;
          }
        );
      }
    });
  }

  onSave() {
    if (this.formIsValid()) {
      this.isProcessing = true;

      window.scrollTo(0, 0);

      if (this.isNew) {
        this.service.ScreenService.CreateItem(this.screen).subscribe(
          ret => {
            this.isProcessing = false;
            this.isNew = false;

            this.location.back();
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Nova Tela", err);
          }
        );
      } else {
        this.service.ScreenService.UpdateItem(this.screen).subscribe(
          ret => {
            this.isProcessing = false;

            this.alert.alertInformation("Tela/Funcionalidade", "Funcionalidade atualizada com sucesso");
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Nova Tela", err);
          }
        );
      }
     }
  }
}
