import { Component, OnInit } from "@angular/core";

import { MenuEntity } from './../../../shared/models/config/MenuEntity';
import { LoginResultEntity } from './../../../shared/models/auth/loginResult.model';
import { BaseComponent } from "../../../shared/base/base.component";
import { ConfigProvider } from '../../../shared/config/config.service';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent extends BaseComponent implements OnInit {
  isActive: boolean = false;
  showMenu: string = "";

  authUser: LoginResultEntity;
  menus: Array<MenuEntity> = new Array<MenuEntity>();

  constructor(private configProvider: ConfigProvider) {
    super(null);
  }

  ngOnInit() {
    this.authUser = this.getLoginInfo();

    this.menus = this.configProvider.GetApplicationMenu();
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = "0";
    } else {
      this.showMenu = element;
    }
  }

  onMenuSelected(menu) {
    this.configProvider.menuChanged.emit(menu);
  }
}
