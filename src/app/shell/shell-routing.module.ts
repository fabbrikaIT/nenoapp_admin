import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShellComponent } from "./shell.component";

const routes: Routes = [
  {
    path: "", component: ShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
      { path: 'schools', loadChildren: './schools/schools.module#SchoolsModule' },
      { path: 'plans', loadChildren: './plans/plans.module#PlansModule' },
      { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
      { path: 'configurations', loadChildren: './configurations/configurations.module#ConfigurationsModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {}
