import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ForellenfestijnPageComponent } from './forellenfestijn-page.component';

const forellenfestijnRoutes: Route[] = [
  { path: '', component: ForellenfestijnPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(forellenfestijnRoutes)],
})
export class ForellenfestijnPageRoutingModule {}
