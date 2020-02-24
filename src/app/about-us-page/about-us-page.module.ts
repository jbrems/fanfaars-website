import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './about-us-page.component';
import { HeroImageModule } from '../shared/hero-image/hero-image.module';
import { FanfarePageModule } from './fanfare-page/fanfare-page.module';
import { MuziekmakkersPageModule } from './muziekmakkers-page/muziekmakkers-page.module';
import { MuziekrakkersPageModule } from './muziekrakkers-page/muziekrakkers-page.module';
import { Fanfare4FunPageModule } from './fanfare-4-fun-page/fanfare-4-fun-page.module';
import { TitleModule } from '../shared/title/title.module';
import { BreadcrumbModule } from '../shared/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [
    CommonModule,
    FanfarePageModule,
    Fanfare4FunPageModule,
    HeroImageModule,
    MuziekmakkersPageModule,
    MuziekrakkersPageModule,
    TitleModule,
    BreadcrumbModule,
  ]
})
export class AboutUsPageModule { }
