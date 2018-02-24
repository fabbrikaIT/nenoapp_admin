import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "./../../shared/shared.module";
import { ConfigurationsComponent } from './configurations.component';
import { ScreensComponent } from './screens/screens.component';
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ConfigurationService } from '../../shared/services/config.service';
import { DetailsComponent } from './screens/details/details.component';
import { ProfilesComponent } from './profiles/profiles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ConfigurationsRoutingModule
  ],
  declarations: [
    ConfigurationsComponent,
    ScreensComponent,
    DetailsComponent,
    ProfilesComponent
  ],
  providers: [
    ConfigurationService
  ]
})
export class ConfigurationsModule {}
