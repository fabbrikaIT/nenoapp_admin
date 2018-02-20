import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputMaskModule } from "ng2-inputmask";

import { PlansComponent } from './plans.component';
import { PlansRoutingModule } from './plans-routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PlansRoutingModule,
    InputMaskModule
  ],
  declarations: [
    PlansComponent,
    DetailsComponent
  ],
  providers: [

  ]
})
export class PlansModule {}
