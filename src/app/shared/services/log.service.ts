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
export class LogService extends BaseService {
  constructor(config: AppConfig, router: Router, httpClient: HttpClient) {
    super(config, router, httpClient);
  }

  public ListApplicationLogs(): Observable<Array<ApplicationLog>> {
    const serviceUrl = `${this.config.baseUrl}monitoring/logs`;

    return this.httpClient.get(serviceUrl).map(
      (res: Response) => {
        return (res as any).Result;
      }
    ).catch(this.handleErrorObservable);
  }

  public ListApplicationByTypeLogs(type: ELogType): Observable<Array<ApplicationLog>> {
    const serviceUrl = `${this.config.baseUrl}monitoring/logs/${type}`;

    return this.httpClient.get(serviceUrl).map(
      (res: Response) => {
        return (res as any).Result;
      }
    ).catch(this.handleErrorObservable);
  }
}
