import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page.component';
import { MuziekmakkersPageComponent } from './muziekmakkers-page/muziekmakkers-page.component';
import { MuziekrakkersPageComponent } from './muziekrakkers-page/muziekrakkers-page.component';
import { Fanfare4FunPageComponent } from './fanfare-4-fun-page/fanfare-4-fun-page.component';
import { FanfarePageComponent } from './fanfare-page/fanfare-page.component';

const aboutUsRoutes: Route[] = [
  { path: '', component: AboutUsPageComponent },
  { path: 'fanfare', component: FanfarePageComponent },
  { path: 'muziekmakkers', component: MuziekmakkersPageComponent },
  { path: 'muziekrakkers', component: MuziekrakkersPageComponent },
  { path: 'fanfare-4-fun', component: Fanfare4FunPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(aboutUsRoutes)],
})
export class AboutUsPageRoutingModule {}
