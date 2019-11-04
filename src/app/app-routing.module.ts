import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ActivitiesPageModule } from './activities-page/activities-page.module';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'activiteiten', component: ActivitiesPageComponent },
];

@NgModule({
  imports: [
    ActivitiesPageModule,
    HomePageModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
