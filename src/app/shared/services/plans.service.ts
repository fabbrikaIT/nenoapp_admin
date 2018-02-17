import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { AppConfig } from './../config/app.config';
import { BaseService } from '../base/base.service';
import { PlansEntity } from '../models/admin/plans.model';

@Injectable()
export class PlansService extends BaseService {
  constructor(config: AppConfig, router: Router, private httpClient: HttpClient) {
    super(config, router);
  }

  public ListPlans(): Observable<Array<PlansEntity>> {
    const serviceUrl = `${this.config.baseUrl}admin/plans`;

    return this.httpClient.get(serviceUrl).map(
      (res: Response) => {
        return (res as any).Result;
      }
    ).catch(this.handleErrorObservable);
  }
}
