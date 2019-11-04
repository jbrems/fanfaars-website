import { Component, Input, OnInit } from '@angular/core';
import { PhotoAlbum } from './photo-album';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {
  @Input() photoAlbum: PhotoAlbum;

  constructor() { }

  ngOnInit() {
  }

}
