import { NgModule } from '@angular/core';
import { PhotoAlbumComponent } from './photo-album.component';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [PhotoAlbumComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [PhotoAlbumComponent],
})
export class PhotoAlbumModule { }
