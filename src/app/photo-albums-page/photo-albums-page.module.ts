import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoAlbumsPageComponent } from './photo-albums-page.component';
import { TitleModule } from '../shared/title/title.module';
import { PhotoAlbumModule } from '../shared/photo-album/photo-album.module';
import { PhotoAlbumsPageRoutingModule } from './photo-albums-page-routing.module';

@NgModule({
  declarations: [PhotoAlbumsPageComponent],
  imports: [
    CommonModule,
    PhotoAlbumModule,
    PhotoAlbumsPageRoutingModule,
    TitleModule,
  ]
})
export class PhotoAlbumsPageModule { }
