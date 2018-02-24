import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../base/base.service';
import { MenuEntity } from '../models/config/MenuEntity';
import { AppConfig } from './app.config';

@Injectable()
export class ConfigProvider extends BaseService {
  constructor(config: AppConfig, router: Router, httpClient: HttpClient) {
    super(config, router, httpClient);
  }

  public menuChanged: EventEmitter<MenuEntity> = new EventEmitter<MenuEntity>();

  public GetApplicationMenu(): Array<MenuEntity> {
    const menus: Array<MenuEntity> = new Array<MenuEntity>();
    menus.push(<MenuEntity>{
      Id: 1,
      Code: "MNU001",
      DisplayName: "Dashboard",
      RoutePath: "/dashboard",
      Icon: "fa-dashboard",
      SubMenu: null}
    );
    menus.push(<MenuEntity>{
      Id: 2,
      Code: "MNU002",
      DisplayName: "Planos e Preços",
      RoutePath: "/plans",
      Icon: "fa-money",
      SubMenu: null}
    );
    menus.push(<MenuEntity>{
      Id: 3,
      Code: "MNU003",
      DisplayName: "Escolas",
      RoutePath: "/schools",
      Icon: "fa-graduation-cap",
      SubMenu: null}
    );
    menus.push(<MenuEntity>{
      Id: 3,
      Code: "MNU004",
      DisplayName: "Configurações",
      RoutePath: "/configurations",
      Icon: "fa-gear",
      SubMenu: [
        {
          Id: 6,
          Code: "MNU006",
          DisplayName: "Funcionalidades",
          RoutePath: "/configurations/screens",
          Icon: "fa-desktop",
          SubMenu: null
        },
        {
          Id: 6,
          Code: "MNU007",
          DisplayName: "Perfis de Acesso",
          RoutePath: "/configurations/profiles",
          Icon: "fa-object-group",
          SubMenu: null
        }
      ]}
    );
    menus.push(<MenuEntity>{
      Id: 4,
      Code: "MNU005",
      DisplayName: "Analítico",
      RoutePath: "/reports",
      Icon: "fa-bar-chart",
      SubMenu: [
        {
          Id: 5,
          Code: "MNU005",
          DisplayName: "Logs",
          RoutePath: "/reports/logs",
          Icon: "fa-bar-chart",
          SubMenu: null
        }
      ]}
    );

    return menus;
  }
}
