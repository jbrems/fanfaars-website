import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ActivitiesPageComponent } from './activities-page.component';

const activitiesRoutes: Route[] = [{
  path: '',
  component: ActivitiesPageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(activitiesRoutes)],
})
export class ActivitiesPageRoutingModule {}
