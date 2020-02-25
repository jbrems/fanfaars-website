import { NgModule } from '@angular/core';
import { PhotoAlbumComponent } from './photo-album.component';
import { CommonModule } from '@angular/common';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [PhotoAlbumComponent],
  imports: [
    CommonModule,
    LogoModule
  ],
  exports: [PhotoAlbumComponent],
})
export class PhotoAlbumModule { }
