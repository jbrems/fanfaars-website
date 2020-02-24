import { NgModule } from '@angular/core';
import { MuziekmakkersPageComponent } from './muziekmakkers-page.component';
import { TitleModule } from '../../shared/title/title.module';
import { HeroImageModule } from '../../shared/hero-image/hero-image.module';
import { ActivityModule } from '../../shared/activity/activity.module';
import { PhotoAlbumModule } from '../../shared/photo-album/photo-album.module';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '../../shared/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [MuziekmakkersPageComponent],
  imports: [
    CommonModule,
    TitleModule,
    HeroImageModule,
    ActivityModule,
    PhotoAlbumModule,
    BreadcrumbModule
  ],
  exports: [MuziekmakkersPageComponent],
})
export class MuziekmakkersPageModule {}
