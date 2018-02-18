import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PlansComponent } from './plans.component';
import { PlansRoutingModule } from './plans-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PlansRoutingModule
  ],
  declarations: [
    PlansComponent
  ],
  providers: [

  ]
})
export class PlansModule {}
