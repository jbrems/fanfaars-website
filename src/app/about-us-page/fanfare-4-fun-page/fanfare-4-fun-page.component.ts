import { Component, OnInit } from '@angular/core';
import { Activity } from '../../shared/activity/activity';
import { PhotoAlbum } from '../../shared/photo-album/photo-album';
import { testAlbums } from '../../shared/photo-album/test-albums';
import { ActivityService } from '../../shared/activity/activity.service';
import { Observable } from 'rxjs';
import { PhotoAlbumService } from '../../shared/photo-album/photo-album.service';

@Component({
  templateUrl: './fanfare-4-fun-page.component.html',
  styleUrls: ['./fanfare-4-fun-page.component.scss', '../../shared/shared.scss'],
})
export class Fanfare4FunPageComponent implements OnInit {
  public nextActivities: Activity[];
  public recentAlbums: PhotoAlbum[];

  constructor(private activityService: ActivityService, private photoAlbumService: PhotoAlbumService) {}

  ngOnInit(): void {
    this.nextActivities = this.activityService.getActivities(2, 'F4F');
    this.recentAlbums = this.photoAlbumService.getPhotoAlbums(2, 'F4F');
  }
}
