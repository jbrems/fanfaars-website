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
import { FanfarePageComponent } from './about-us-page/fanfare-page/fanfare-page.component';
import { MuziekmakkersPageComponent } from './about-us-page/muziekmakkers-page/muziekmakkers-page.component';
import { MuziekrakkersPageComponent } from './about-us-page/muziekrakkers-page/muziekrakkers-page.component';
import { Fanfare4FunPageComponent } from './about-us-page/fanfare-4-fun-page/fanfare-4-fun-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactPageModule } from './contact-page/contact-page.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'activiteiten', component: ActivitiesPageComponent },
  { path: 'fotos', component: PhotoAlbumsPageComponent },
  { path: 'over-ons', component: AboutUsPageComponent },
  { path: 'over-ons/fanfare', component: FanfarePageComponent },
  { path: 'over-ons/muziekmakkers', component: MuziekmakkersPageComponent },
  { path: 'over-ons/muziekrakkers', component: MuziekrakkersPageComponent },
  { path: 'over-ons/fanfare-4-fun', component: Fanfare4FunPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [
    AboutUsPageModule,
    ActivitiesPageModule,
    ContactPageModule,
    HomePageModule,
    PhotoAlbumsPageModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
