import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeroImageModule } from '../shared/hero-image/hero-image.module';
import { TitleModule } from '../shared/title/title.module';
import { ActivityModule } from '../shared/activity/activity.module';
import { PhotoAlbumModule } from '../shared/photo-album/photo-album.module';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [HomePageComponent, HeroCarouselComponent],
  imports: [
    ActivityModule,
    CommonModule,
    HeroImageModule,
    TitleModule,
    PhotoAlbumModule,
    CarouselModule,
    HomePageRoutingModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
