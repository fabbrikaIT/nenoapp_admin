import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreensComponent } from './screens/screens.component';
import { ConfigurationsComponent } from './configurations.component';
import { DetailsComponent } from './screens/details/details.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
    {  path: '', component: ConfigurationsComponent },
    {  path: 'screens', component: ScreensComponent },
    {  path: 'screens/details', component: DetailsComponent },
    {  path: 'screens/details/:id', component: DetailsComponent },
    {  path: 'profiles', component: ProfilesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigurationsRoutingModule {

}
