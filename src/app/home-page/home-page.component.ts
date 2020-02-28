import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity/activity';
import { PhotoAlbum } from '../shared/photo-album/photo-album';
import { ActivityService } from '../shared/activity/activity.service';
import { PhotoAlbumService } from '../shared/photo-album/photo-album.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  activities$: Observable<Activity[]>;
  photoAlbums$: Observable<PhotoAlbum[]>;

  constructor(private activityService: ActivityService, private photoAlbumService: PhotoAlbumService) { }

  ngOnInit() {
    this.activities$ = this.activityService.getActivities(4);
    this.photoAlbums$ = this.photoAlbumService.getPhotoAlbums(4);
  }

}
