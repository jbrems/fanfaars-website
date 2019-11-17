import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './about-us-page.component';
import { HeroImageModule } from '../shared/hero-image/hero-image.module';

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [
    CommonModule,
    HeroImageModule
  ]
})
export class AboutUsPageModule { }
