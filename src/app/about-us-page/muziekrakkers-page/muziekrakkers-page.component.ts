import { Component, OnInit } from '@angular/core';
import { Activity } from '../../shared/activity/activity';
import { PhotoAlbum } from '../../shared/photo-album/photo-album';
import { ActivityService } from '../../shared/activity/activity.service';
import { PhotoAlbumService } from '../../shared/photo-album/photo-album.service';
import { ScrollToMeespelenComponent } from '../scroll-to-meespelen.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './muziekrakkers-page.component.html',
  styleUrls: ['./muziekrakkers-page.component.scss', '../../shared/shared.scss'],
})
export class MuziekrakkersPageComponent extends ScrollToMeespelenComponent implements OnInit{
  public nextActivities: Activity[];
  public recentAlbums: PhotoAlbum[];

  constructor(route: ActivatedRoute, private activityService: ActivityService, private photoAlbumService: PhotoAlbumService) {
    super(route);
  }

  ngOnInit(): void {
    this.nextActivities = this.activityService.getActivities(2, 'MR');
    this.recentAlbums = this.photoAlbumService.getPhotoAlbums(2, 'MR');
  }
}
