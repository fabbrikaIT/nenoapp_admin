import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule,
    FormsModule,
    SharedModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [
    ShellComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  providers: [
  ]
})
export class ShellModule {

}
