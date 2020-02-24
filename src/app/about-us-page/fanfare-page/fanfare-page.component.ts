import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from '../../shared/activity/activity';
import { testActivities } from '../../shared/activity/test-activities';
import { PhotoAlbum } from '../../shared/photo-album/photo-album';
import { testAlbums } from '../../shared/photo-album/test-albums';
import { ActivityService } from '../../shared/activity/activity.service';
import { PhotoAlbumService } from '../../shared/photo-album/photo-album.service';

@Component({
  templateUrl: './fanfare-page.component.html',
  styleUrls: ['./fanfare-page.component.scss', '../../shared/shared.scss'],
})
export class FanfarePageComponent implements OnInit, AfterViewInit {
  public nextActivities: Activity[];
  public recentAlbums: PhotoAlbum[];

  // TODO: fix below
  private fragment;

  constructor(private route: ActivatedRoute, private activityService: ActivityService, private photoAlbumService: PhotoAlbumService) {}

  ngOnInit(): void {
    this.nextActivities = this.activityService.getActivities(2, 'FF');
    this.recentAlbums = this.photoAlbumService.getPhotoAlbums(2, 'FF');

    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}
