import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const homepageRoutes: Route[] = [{
  path: '',
  component: HomePageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(homepageRoutes)],
})
export class HomePageRoutingModule {}
