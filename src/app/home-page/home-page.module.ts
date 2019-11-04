import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeroImageModule } from '../shared/hero-image/hero-image.module';
import { TitleModule } from '../shared/title/title.module';
import { ActivityModule } from '../shared/activity/activity.module';
import { PhotoAlbumModule } from '../shared/photo-album/photo-album.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    ActivityModule,
    CommonModule,
    HeroImageModule,
    TitleModule,
    PhotoAlbumModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
