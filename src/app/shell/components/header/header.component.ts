import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

import { BaseComponent } from "../../../shared/base/base.component";
import { LoginResultEntity } from "../../../shared/models/auth/loginResult.model";
import { ConfigProvider } from '../../../shared/config/config.service';
import { MenuEntity } from '../../../shared/models/config/MenuEntity';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @ViewChild('owners') select: ElementRef;

  pushRightClass: string = "push-right";
  processingMessage: string = "Carregando...";
  showMessage: boolean = true;
  showSubmenu: boolean = false;
  menus: Array<MenuEntity> = new Array<MenuEntity>();

  authUser: LoginResultEntity;

  constructor(public router: Router, private configProvider: ConfigProvider) {
    super(null);
  }

  ngOnInit() {
    this.authUser = this.getLoginInfo();

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });

    this.menuChangeListener();
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector("body");
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector("body");
    dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
    localStorage.removeItem("isLoggedin");

    // this.loginService.logout(JSON.parse(localStorage.getItem('loginInfo')).authenticationToken);
  }

  toggleSelect() {
    if (this.select) {
      console.log(this.select.nativeElement);
    }
  }

  menuChangeListener() {
    this.configProvider.menuChanged.subscribe(
      menu => {
        if (menu && menu.SubMenu && menu.SubMenu.length > 0) {
          this.showSubmenu = true;
          this.menus = menu.SubMenu;
        } else {
          this.showSubmenu = false;
          this.menus = new Array<MenuEntity>();
        }
      }
    );
  }
}
