import { PhotoAlbumsComponent } from './../photo-albums.component';
import { PhotoAlbumService } from './../../../shared/photo-album/photo-album.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PhotoAlbum } from './../../../shared/photo-album/photo-album';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input'; 

@Component({
  selector: 'app-admin-photo-album',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './admin-photo-album.component.html',
  styleUrls: ['./admin-photo-album.component.scss']
})
export class AdminPhotoAlbumComponent implements OnChanges {
  @Input() public photoAlbum: PhotoAlbum;

  public editting = false;

  public photoAlbumForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
  });

  constructor(private photoAlbumService: PhotoAlbumService, private parent: PhotoAlbumsComponent) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.photoAlbumForm.setValue(this.photoAlbum);
    this.editting = !this.photoAlbum.id;
  }

  public async save(): Promise<void> {
    if (!this.photoAlbumForm.valid) return;
    await this.photoAlbumService.savePhotoAlbum(this.photoAlbumForm.value as PhotoAlbum);
    this.parent.refreshPhotoAlbums();
  }

  public async delete(): Promise<void> {
    if (confirm(`Weet je zeker dat je fotoalbum '${this.photoAlbum.id}' wil verwijderen?`)) {
      await this.photoAlbumService.deletePhotoAlbum(this.photoAlbumForm.value as PhotoAlbum);
      this.parent.refreshPhotoAlbums();
    }
  }

}
