import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SchoolEntity } from '../../../shared/models/admin/school.model';
import { SchoolService } from '../../../shared/services/school.service';
import { AlertService } from '../../../shared/modules/alert/alert.service';
import { DialogService } from '../../../shared/modules/dialog/dialog.service';
import { BaseComponent } from '../../../shared/base/base.component';
import { CrudService } from '../../../shared/base/crud.service';
import { PlansEntity } from '../../../shared/models/admin/plans.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  headerTitle: string;
  isNew: boolean = false;
  fullAddress: string = "";

  school: SchoolEntity;
  plans: Array<PlansEntity> = new Array<PlansEntity>();

  constructor(alert: AlertService, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private service: SchoolService, private location: Location, private dialogService: DialogService,
    private planService: CrudService<PlansEntity>) {
    super(alert);
  }

  ngOnInit() {
    this.school = SchoolEntity.GetInstance();

    this.initForm();

    this.loadPlans();

    this.route.params.subscribe( params => {
      if (params["id"]) {
        this.isProcessing = true;

        this.service.GetSchool(params["id"]).subscribe(
          ret => {
            this.isProcessing = false;
            this.school = ret;
            this.school.manager.birthdate = new Date(this.school.manager.birthdate);
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Atualizar Escola", err);
          }
        );

        this.isNew = false;
        this.headerTitle = "Editar Cadastro de Escola";
      } else {
        this.isNew = true;
        this.headerTitle = "Credenciamento de Nova Escola";
      }
    });
  }

  initForm() {
    this.formFields = this.formBuilder.group({
      name: ["", Validators.required],
      legalName: ["", Validators.required],
      cnpj: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      postcode: [null, Validators.required],
      street: [{ value: "", disabled: true }],
      number: [null, Validators.required],
      complement: [""],
      district: [{ value: "", disabled: true }],
      city: [{ value: "", disabled: true }],
      state: [{ value: "", disabled: true }],
      plan: [null, Validators.required],
      contractType: [{ value: "", disabled: true }],
      cost: [{ value: "", disabled: true }],
      configurations: this.formBuilder.group({
        dbName: [{ value: "", disabled: true }],
        apiPath: [{ value: "", disabled: true }],
        portalUrl: [{ value: "", disabled: true }],
        logo: [{ value: "", disabled: true }]
      }),
      manager: this.formBuilder.group({
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        cellphone: ["", Validators.required],
        document: ["", Validators.required],
        birthdate: [null, Validators.required]
      })
    });
  }

  loadPlans() {
    this.planService.InitService("admin/plans", ["id"]);

    this.planService.ListItems().subscribe(
      ret => {
        this.plans = ret;
      }
    );
  }

  /** FrontEnd Interface Methods */
  onSave() {
    if (this.formIsValid()) {
      this.isProcessing = true;
      window.scroll(0, 0);

      if (this.isNew) {
        this.service.UpdateSchool(this.school).subscribe(
          ret => {
            this.isProcessing = false;

            if (ret) {
              this.isNew = false;
              this.alert.alertInformation("Novo Credenciado", "Escola foi credenciada com sucesso.");

              this.location.back();
            }
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Atualizar Credenciado", err);
          }
        );
      } else {
        this.service.UpdateSchool(this.school).subscribe(
          ret => {
            this.isProcessing = false;

            if (ret) {
              this.isNew = false;
              this.alert.alertInformation("Atualizar Credenciado", "Dados da escola atualizados com sucesso.");
            }
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Atualizar Credenciado", err);
          }
        );
      }
    }
  }

    /** Métodos para busca de CEP e posição Geográfica do endereço */
    searchCEP(cep) {
      cep = cep.replace(/\D/g, "");
      if (cep !== "") {
        const validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
          this.isProcessing = true;

          this.service.SearchCEP(cep).subscribe(
            ret => {
              this.isProcessing = false;

              this.populateAddress(ret);
            }
          );
        } else {
          this.alert.alertWarning("Consulta CEP", "CEP Inválido");
          this.school.postcode = null;
        }
      }
  }

  onSelectChange() {
    this.school.subscriptionPlan = this.plans.find(item => item.id === this.school.subscriptionPlanId);
  }

  populateAddress(data) {
    this.school.city = data.localidade;
    this.school.district = data.bairro;
    this.school.postcode = data.cep;
    this.school.state = data.uf;
    this.school.street = data.logradouro;
    this.school.number = null;

    this.fullAddress = `${this.school.street}, ${this.school.number}, ${this.school.city}-${this.school.state}`;
  }

}
