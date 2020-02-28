import { Component, OnInit } from '@angular/core';
import { testAlbums } from '../shared/photo-album/test-albums';
import { PhotoAlbum } from '../shared/photo-album/photo-album';
import { PhotoAlbumService } from '../shared/photo-album/photo-album.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-albums-page',
  templateUrl: './photo-albums-page.component.html',
  styleUrls: ['./photo-albums-page.component.scss', '../shared/shared.scss'],
})
export class PhotoAlbumsPageComponent implements OnInit {
  photoAlbums$: Observable<PhotoAlbum[]>;

  constructor(private photoAlbumService: PhotoAlbumService) { }

  ngOnInit() {
    this.photoAlbums$ = this.photoAlbumService.getPhotoAlbums();
  }

}
