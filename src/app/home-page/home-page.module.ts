import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeroImageModule } from '../shared/hero-image/hero-image.module';
import { TitleModule } from '../shared/title/title.module';
import { ActivityModule } from '../shared/activity/activity.module';
import { PhotoAlbumModule } from '../shared/photo-album/photo-album.module';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomePageRoutingModule } from './home-page-routing.module';
import {AnnouncementComponent} from './announcement/announcement.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomePageComponent, HeroCarouselComponent, AnnouncementComponent],
  imports: [
    ActivityModule,
    CommonModule,
    HeroImageModule,
    TitleModule,
    PhotoAlbumModule,
    CarouselModule,
    HomePageRoutingModule,
    RouterModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
