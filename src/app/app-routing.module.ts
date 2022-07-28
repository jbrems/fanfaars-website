import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'activiteiten', loadChildren: () => import('./activities-page/activities-page.module').then(m => m.ActivitiesPageModule) },
  { path: 'fotos', loadChildren: () => import('./photo-albums-page/photo-albums-page.module').then(m => m.PhotoAlbumsPageModule) },
  { path: 'over-ons', loadChildren: () => import('./about-us-page/about-us-page.module').then(m => m.AboutUsPageModule) },
  { path: 'contact', loadChildren: () => import('./contact-page/contact-page.module').then(m => m.ContactPageModule) },
  { path: 'forellenfestijn', loadChildren: () => import('./forellenfestijn-page/forellenfestijn-page.module').then(m => m.ForellenfestijnPageModule) },
  { path: 'paella', loadChildren: () => import('./paella-page/paella-page.module').then(m => m.PaellaPageModule) },
  { path: 'online-repetitie', loadChildren: () => import('./online-rehearsal/online-rehearsal.module').then(m => m.OnlineRehearsalModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
