import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {OnlineRehearsalComponent} from './online-rehearsal.component';

const onlineRehearsalRoutes: Route[] = [{
  path: '',
  component: OnlineRehearsalComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(onlineRehearsalRoutes)],
})
export class OnlineRehearsalRoutingModule {}
