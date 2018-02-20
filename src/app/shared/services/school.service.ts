import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { AppConfig } from './../config/app.config';
import { BaseService } from '../base/base.service';
import { ApplicationLog, ELogType } from './../models/logs/applicationlog.model';

@Injectable()
export class SchoolService extends BaseService {

  constructor(config: AppConfig, router: Router, httpClient: HttpClient) {
    super(config, router, httpClient);
  }

  public ListSchools = () => {
    const serviceUrl = `${this.config.baseUrl}admin/schools`;

    return this.GetRequest(serviceUrl);
  }

  public ListSchoolsByCity = (city: string) => {
    const serviceUrl = `${this.config.baseUrl}admin/schoolsByCity/${city}`;

    return this.GetRequest(serviceUrl);
  }

  public ListCities = () => {
    const serviceUrl = `${this.config.baseUrl}admin/schools/list/city`;

    return this.GetRequest(serviceUrl);
  }

  public GetSchool = (schoolId: number) => {
    const serviceUrl = `${this.config.baseUrl}admin/schools/${schoolId}`;

    return this.GetRequest(serviceUrl);
  }

  public SearchCEP = (cep: string) => {
    return this.httpClient.get(`//viacep.com.br/ws/${cep}/json`)
      .map(
        (res) => {
          return res;
        }
    );
  }
}
