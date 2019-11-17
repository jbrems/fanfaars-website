import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ActivitiesPageModule } from './activities-page/activities-page.module';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { PhotoAlbumsPageModule } from './photo-albums-page/photo-albums-page.module';
import { PhotoAlbumsPageComponent } from './photo-albums-page/photo-albums-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AboutUsPageModule } from './about-us-page/about-us-page.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'activiteiten', component: ActivitiesPageComponent },
  { path: 'fotos', component: PhotoAlbumsPageComponent },
  { path: 'over-ons', component: AboutUsPageComponent },
];

@NgModule({
  imports: [
    AboutUsPageModule,
    ActivitiesPageModule,
    HomePageModule,
    PhotoAlbumsPageModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
