import { LogService } from './../../shared/services/log.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SharedModule } from "./../../shared/shared.module";
import { LogsComponent } from "./logs/logs.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReportsRoutingModule
  ],
  declarations: [
    ReportsComponent,
    LogsComponent
  ],
  providers: [
    LogService
  ]
})
export class ReportsModule {}
