import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../base/base.service';
import { AppConfig } from '../config/app.config';
import { CrudService } from '../base/crud.service';
import { ScreenEntity } from '../models/config/screen.model';

@Injectable()
export class ConfigurationService extends BaseService {

  constructor(config: AppConfig, router: Router, httpClient: HttpClient, public ScreenService: CrudService<ScreenEntity>) {
    super(config, router, httpClient);
  }

  public Init() {
    this.ScreenService.InitService("admin/screens", ["id"]);
  }

  // Integrações para telas e funcionalidades
  // public ListScreens = () => {
  //   const serviceUrl = `${this.config.baseUrl}admin/screens`;

  //   return this.GetRequest(serviceUrl);
  // }

  // public GetScreen = (screenId: number) => {
  //   const serviceUrl = `${this.config.baseUrl}admin/screens/${screenId}`;

  //   return this.GetRequest(serviceUrl);
  // }
}
