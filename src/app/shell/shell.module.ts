import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';

import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule,
    FormsModule,
    SharedModule,
    CalendarModule.forRoot(),
    NgbDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  declarations: [
    ShellComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CalendarComponent
  ],
  providers: [
  ]
})
export class ShellModule {

}
