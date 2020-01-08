import { NgModule } from '@angular/core';
import { MuziekrakkersPageComponent } from './muziekrakkers-page.component';
import { TitleModule } from '../../shared/title/title.module';
import { HeroImageModule } from '../../shared/hero-image/hero-image.module';
import { ActivityModule } from '../../shared/activity/activity.module';
import { PhotoAlbumModule } from '../../shared/photo-album/photo-album.module';

@NgModule({
  declarations: [MuziekrakkersPageComponent],
  imports: [TitleModule, HeroImageModule, ActivityModule, PhotoAlbumModule],
  exports: [MuziekrakkersPageComponent],
})
export class MuziekrakkersPageModule {}
