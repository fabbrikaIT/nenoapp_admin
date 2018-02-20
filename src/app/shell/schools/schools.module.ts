import { SchoolService } from './../../shared/services/school.service';
import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from "ng2-inputmask";

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from "./schools.component";
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SchoolsRoutingModule,
    InputMaskModule
  ],
  declarations: [
    SchoolsComponent,
    DetailsComponent
  ],
  providers: [
    SchoolService
  ]
})
export class SchoolsModule {}
