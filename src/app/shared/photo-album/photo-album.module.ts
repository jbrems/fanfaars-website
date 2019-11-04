import { NgModule } from '@angular/core';
import { PhotoAlbumComponent } from './photo-album.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PhotoAlbumComponent],
  imports: [CommonModule],
  exports: [PhotoAlbumComponent],
})
export class PhotoAlbumModule { }
