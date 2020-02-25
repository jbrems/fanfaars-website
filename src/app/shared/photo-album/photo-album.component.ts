import { Component, Input } from '@angular/core';
import { PhotoAlbum } from './photo-album';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent  {
  @Input() photoAlbum: PhotoAlbum;

  public getFormatForDate(date: string): string {
    if (date === '0000-00-00') { return ''; }
    if (date.includes('-00-00')) { return 'yyyy'; }
    if (date.includes('-00')) { return 'MMMM yyyy'; }
    return 'd MMMM yyyy';
  }

  public openAlbum(url: string) {
    window.open(url);
  }

}
