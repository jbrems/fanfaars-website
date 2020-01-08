import { Component } from '@angular/core';
import { Activity } from '../../shared/activity/activity';
import { testActivities } from '../../shared/activity/test-activities';
import { PhotoAlbum } from '../../shared/photo-album/photo-album';
import { testAlbums } from '../../shared/photo-album/test-albums';

@Component({
  templateUrl: './muziekmakkers-page.component.html',
  styleUrls: ['./muziekmakkers-page.component.scss'],
})
export class MuziekmakkersPageComponent {
  public nextActivity: Activity = testActivities[0];
  public recentAlbum: PhotoAlbum = testAlbums[0];
}
