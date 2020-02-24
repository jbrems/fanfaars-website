import { NgModule } from '@angular/core';
import { Fanfare4FunPageComponent } from './fanfare-4-fun-page.component';
import { TitleModule } from '../../shared/title/title.module';
import { HeroImageModule } from '../../shared/hero-image/hero-image.module';
import { ActivityModule } from '../../shared/activity/activity.module';
import { PhotoAlbumModule } from '../../shared/photo-album/photo-album.module';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '../../shared/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [Fanfare4FunPageComponent],
  imports: [
    CommonModule,
    TitleModule,
    HeroImageModule,
    ActivityModule,
    PhotoAlbumModule,
    BreadcrumbModule
  ],
  exports: [Fanfare4FunPageComponent],
})
export class Fanfare4FunPageModule {}
