import { Component, OnInit } from '@angular/core';
import { Activity } from '../../shared/activity/activity';
import { PhotoAlbum } from '../../shared/photo-album/photo-album';
import { ActivityService } from '../../shared/activity/activity.service';
import { Observable } from 'rxjs';
import { PhotoAlbumService } from '../../shared/photo-album/photo-album.service';
import { ScrollToMeespelenComponent } from '../scroll-to-meespelen.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './fanfare-4-fun-page.component.html',
  styleUrls: ['./fanfare-4-fun-page.component.scss', '../../shared/shared.scss'],
})
export class Fanfare4FunPageComponent extends ScrollToMeespelenComponent implements OnInit {
  public nextActivities$: Observable<Activity[]>;
  public recentAlbums$: Observable<PhotoAlbum[]>;

  constructor(route: ActivatedRoute, private activityService: ActivityService, private photoAlbumService: PhotoAlbumService) {
    super(route);
  }

  ngOnInit(): void {
    this.nextActivities$ = this.activityService.getActivities(2, 'F4F');
    this.recentAlbums$ = this.photoAlbumService.getPhotoAlbums(2, 'F4F');
  }
}
