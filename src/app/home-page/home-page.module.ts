import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { HeroImageModule } from '../shared/hero-image/hero-image.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [HeroImageModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
