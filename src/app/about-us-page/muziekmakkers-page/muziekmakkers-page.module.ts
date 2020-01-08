import { NgModule } from '@angular/core';
import { MuziekmakkersPageComponent } from './muziekmakkers-page.component';
import { TitleModule } from '../../shared/title/title.module';
import { HeroImageModule } from '../../shared/hero-image/hero-image.module';
import { ActivityModule } from '../../shared/activity/activity.module';
import { PhotoAlbumModule } from '../../shared/photo-album/photo-album.module';

@NgModule({
  declarations: [MuziekmakkersPageComponent],
  imports: [TitleModule, HeroImageModule, ActivityModule, PhotoAlbumModule],
  exports: [MuziekmakkersPageComponent],
})
export class MuziekmakkersPageModule {}
