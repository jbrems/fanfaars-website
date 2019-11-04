import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity/activity';
import { testActivities } from '../shared/activity/test-activities';
import { PhotoAlbum } from '../shared/photo-album/photo-album';
import { testAlbums } from '../shared/photo-album/test-albums';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  activities: Activity[] = testActivities;
  photoAlbums: PhotoAlbum[] = testAlbums;

  constructor() { }

  ngOnInit() { }

}
