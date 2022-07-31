import { map } from 'rxjs/operators';
import { PhotoAlbumService } from './../../shared/photo-album/photo-album.service';
import { Observable } from 'rxjs';
import { AdminPhotoAlbumComponent } from './admin-photo-album/admin-photo-album.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoAlbum } from 'src/app/shared/photo-album/photo-album';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-photo-albums',
  standalone: true,
  imports: [CommonModule, AdminPhotoAlbumComponent, MatButtonModule, MatIconModule],
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit {
  public photoAlbums$: Observable<PhotoAlbum[]>;

  constructor(private photoAlbumService: PhotoAlbumService) { }

  ngOnInit(): void {
    this.photoAlbums$ = this.photoAlbumService.getPhotoAlbums();
  }

  public refreshPhotoAlbums(): void {
    this.photoAlbums$ = this.photoAlbumService.getPhotoAlbums();
  }

  public addPhotoAlbum(): void {
    this.photoAlbums$ = this.photoAlbumService.getPhotoAlbums().pipe(map(
      (photoAlbums: PhotoAlbum[]) => [{ id: '', title: '', date: '', group: '', image: '', url: '' } as PhotoAlbum, ...photoAlbums],
    ));
  }

}
