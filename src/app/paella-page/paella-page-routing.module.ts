import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {PaellaPageComponent} from './paella-page.component';

const paellaRoutes: Route[] = [
  { path: '', component: PaellaPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(paellaRoutes)],
})
export class PaellaPageRoutingModule {}
