import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home-page/home-page.module#HomePageModule' },
  { path: 'activiteiten', loadChildren: './activities-page/activities-page.module#ActivitiesPageModule' },
  { path: 'fotos', loadChildren: './photo-albums-page/photo-albums-page.module#PhotoAlbumsPageModule' },
  { path: 'over-ons', loadChildren: './about-us-page/about-us-page.module#AboutUsPageModule' },
  { path: 'contact', loadChildren: './contact-page/contact-page.module#ContactPageModule' },
  { path: 'forellenfestijn', loadChildren: './forellenfestijn-page/forellenfestijn-page.module#ForellenfestijnPageModule' },
  { path: 'paella', loadChildren: './paella-page/paella-page.module#PaellaPageModule' },
  { path: 'online-repetitie', loadChildren: './online-rehearsal/online-rehearsal.module#OnlineRehearsalModule' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
