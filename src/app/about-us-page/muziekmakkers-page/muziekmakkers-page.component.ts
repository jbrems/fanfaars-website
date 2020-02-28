import { Component, OnInit } from '@angular/core';
import { Activity } from '../../shared/activity/activity';
import { PhotoAlbum } from '../../shared/photo-album/photo-album';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../../shared/activity/activity.service';
import { PhotoAlbumService } from '../../shared/photo-album/photo-album.service';
import { ScrollToMeespelenComponent } from '../scroll-to-meespelen.component';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './muziekmakkers-page.component.html',
  styleUrls: ['./muziekmakkers-page.component.scss', '../../shared/shared.scss'],
})
export class MuziekmakkersPageComponent extends ScrollToMeespelenComponent implements OnInit {
  public nextActivities$: Observable<Activity[]>;
  public recentAlbums$: Observable<PhotoAlbum[]>;

  constructor(route: ActivatedRoute, private activityService: ActivityService, private photoAlbumService: PhotoAlbumService) {
    super(route);
  }

  ngOnInit(): void {
    this.nextActivities$ = this.activityService.getActivities(2, 'MM');
    this.recentAlbums$ = this.photoAlbumService.getPhotoAlbums(2, 'MM');
  }
}
