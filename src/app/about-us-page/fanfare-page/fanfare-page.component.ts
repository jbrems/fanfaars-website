import { Component, OnInit } from '@angular/core';
import { Activity } from '../../shared/activity/activity';
import { PhotoAlbum } from '../../shared/photo-album/photo-album';
import { ActivityService } from '../../shared/activity/activity.service';
import { PhotoAlbumService } from '../../shared/photo-album/photo-album.service';
import { ScrollToMeespelenComponent } from '../scroll-to-meespelen.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './fanfare-page.component.html',
  styleUrls: ['./fanfare-page.component.scss', '../../shared/shared.scss'],
})
export class FanfarePageComponent extends ScrollToMeespelenComponent implements OnInit {
  public nextActivities$: Observable<Activity[]>;
  public recentAlbums$: Observable<PhotoAlbum[]>;

  constructor(route: ActivatedRoute, private activityService: ActivityService, private photoAlbumService: PhotoAlbumService) {
    super(route);
  }

  ngOnInit(): void {
    this.nextActivities$ = this.activityService.getActivities(2, 'FF');
    this.recentAlbums$ = this.photoAlbumService.getPhotoAlbums(2, 'FF');
  }
}
