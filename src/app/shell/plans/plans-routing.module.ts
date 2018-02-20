import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlansComponent } from './plans.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    { path: '', component: PlansComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlansRoutingModule {

}
