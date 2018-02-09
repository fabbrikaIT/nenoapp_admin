import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

import { BaseComponent } from "../../../shared/base/base.component";
import { LoginResultEntity } from "../../../shared/models/auth/loginResult.model";

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

  authUser: LoginResultEntity;

  constructor(public router: Router) {
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
}