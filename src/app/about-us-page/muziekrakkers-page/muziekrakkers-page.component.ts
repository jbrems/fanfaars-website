import { Component, OnInit } from '@angular/core';
import { Activity } from '../../shared/activity/activity';
import { testActivities } from '../../shared/activity/test-activities';
import { PhotoAlbum } from '../../shared/photo-album/photo-album';
import { testAlbums } from '../../shared/photo-album/test-albums';
import { ActivityService } from '../../shared/activity/activity.service';
import { PhotoAlbumService } from '../../shared/photo-album/photo-album.service';

@Component({
  templateUrl: './muziekrakkers-page.component.html',
  styleUrls: ['./muziekrakkers-page.component.scss', '../../shared/shared.scss'],
})
export class MuziekrakkersPageComponent implements OnInit{
  public nextActivities: Activity[];
  public recentAlbums: PhotoAlbum[];

  constructor(private activityService: ActivityService, private photoAlbumService: PhotoAlbumService) {}

  ngOnInit(): void {
    this.nextActivities = this.activityService.getActivities(2, 'MR');
    this.recentAlbums = this.photoAlbumService.getPhotoAlbums(2, 'MR');
  }
}
