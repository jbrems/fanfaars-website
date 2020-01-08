import { NgModule } from '@angular/core';
import { Fanfare4FunPageComponent } from './fanfare-4-fun-page.component';
import { TitleModule } from '../../shared/title/title.module';
import { HeroImageModule } from '../../shared/hero-image/hero-image.module';
import { ActivityModule } from '../../shared/activity/activity.module';
import { PhotoAlbumModule } from '../../shared/photo-album/photo-album.module';

@NgModule({
  declarations: [Fanfare4FunPageComponent],
  imports: [TitleModule, HeroImageModule, ActivityModule, PhotoAlbumModule],
  exports: [Fanfare4FunPageComponent],
})
export class Fanfare4FunPageModule {}
