import { NgModule } from '@angular/core';
import { FanfarePageComponent } from './fanfare-page.component';
import { HeroImageModule } from '../../shared/hero-image/hero-image.module';
import { TitleModule } from '../../shared/title/title.module';
import { RouterModule } from '@angular/router';
import { ActivityModule } from '../../shared/activity/activity.module';
import { PhotoAlbumModule } from '../../shared/photo-album/photo-album.module';

@NgModule({
  declarations: [FanfarePageComponent],
  exports: [FanfarePageComponent],
  imports: [
    HeroImageModule,
    TitleModule,
    RouterModule,
    ActivityModule,
    PhotoAlbumModule
  ]
})
export class FanfarePageModule {}
