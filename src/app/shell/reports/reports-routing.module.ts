import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
    {  path: '', component: ReportsComponent },
    {  path: 'logs', component: LogsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule {

}
