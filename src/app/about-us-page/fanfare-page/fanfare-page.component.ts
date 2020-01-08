import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from '../../shared/activity/activity';
import { testActivities } from '../../shared/activity/test-activities';
import { PhotoAlbum } from '../../shared/photo-album/photo-album';
import { testAlbums } from '../../shared/photo-album/test-albums';

@Component({
  templateUrl: './fanfare-page.component.html',
  styleUrls: ['./fanfare-page.component.scss'],
})
export class FanfarePageComponent implements OnInit, AfterViewInit {
  public nextActivity: Activity = testActivities[0];
  public recentAlbum: PhotoAlbum = testAlbums[0];

  // TODO: fix below
  private fragment;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}
