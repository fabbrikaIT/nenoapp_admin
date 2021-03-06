import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { QRCodeModule, QRCodeComponent } from 'angular2-qrcode';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/guard/auth.guard';
import { AppConfig } from './shared/config/app.config';
import { LoadingComponent } from './shared/modules/loading/loading.component';
import { SharedModule } from './shared/shared.module';
import { AlertService } from './shared/modules/alert/alert.service';
import { DialogService } from './shared/modules/dialog/dialog.service';
import { AdDirective } from './shared/modules/dialog/dialog.component';
import { CrudService } from './shared/base/crud.service';
import { ConfigProvider } from './shared/config/config.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    QRCodeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-br" },
    AuthGuard,
    AppConfig,
    AlertService,
    DialogService,
    CrudService,
    ConfigProvider
  ],
  exports: [
    QRCodeComponent
  ],
  entryComponents: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
