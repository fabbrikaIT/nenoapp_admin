import { SchoolService } from './../../shared/services/school.service';
import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from "./schools.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SchoolsRoutingModule
  ],
  declarations: [
    SchoolsComponent
  ],
  providers: [
    SchoolService
  ]
})
export class SchoolsModule {}
