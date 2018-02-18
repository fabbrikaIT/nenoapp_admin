import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../shared/base/base.component';
import { AlertService } from '../../shared/modules/alert/alert.service';
import { SchoolService } from './../../shared/services/school.service';
import { SchoolEntity } from '../../shared/models/admin/school.model';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent extends BaseComponent implements OnInit {
  schoolList: Array<SchoolEntity> = new Array<SchoolEntity>();
  cities: Array<string> = new Array<string>();
  city: string = "";

  constructor(alert: AlertService, private service: SchoolService ) {
    super(alert);
   }

  ngOnInit() {
    this.ListAllSchools();
    this.ListCities();
  }

  ListAllSchools() {
    this.isProcessing = true;

    this.service.ListSchools().subscribe(
      ret => {
        this.isProcessing = false;

        this.schoolList = ret;
      },
      err => {
        this.isProcessing = false;
        this.alert.alertError("Listar Escolar", err);
      }
    );
  }

  ListSchoolsByCity() {
    this.isProcessing = true;

    this.service.ListSchoolsByCity(this.city).subscribe(
      ret => {
        this.isProcessing = false;

        this.schoolList = ret;
      },
      err => {
        this.isProcessing = false;
        this.alert.alertError("Listar Escolar", err);
      }
    );
  }

  ListCities() {
    this.service.ListCities().subscribe(
      ret => {
        this.cities = new Array<string>();
        this.cities.push("Todas");
        this.cities.push(ret);

        this.city = "Todas";
      },
      err => {
        this.alert.alertError("Listar Cidades", err);
      }
    );
  }

  /** Front-End interact methods */
  onSelectChange() {
    if (this.city === "" || this.city === "Todas") {
      this.ListAllSchools();
    } else {
      this.ListSchoolsByCity();
    }
  }
}
