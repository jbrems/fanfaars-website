import { Component, OnInit } from '@angular/core';
import { testAlbums } from '../shared/photo-album/test-albums';

@Component({
  selector: 'app-photo-albums-page',
  templateUrl: './photo-albums-page.component.html',
  styleUrls: ['./photo-albums-page.component.scss']
})
export class PhotoAlbumsPageComponent implements OnInit {
  photoAlbums = testAlbums;

  constructor() { }

  ngOnInit() {
  }

}
