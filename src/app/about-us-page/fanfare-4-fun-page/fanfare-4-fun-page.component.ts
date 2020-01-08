import { Component } from '@angular/core';
import { Activity } from '../../shared/activity/activity';
import { testActivities } from '../../shared/activity/test-activities';
import { PhotoAlbum } from '../../shared/photo-album/photo-album';
import { testAlbums } from '../../shared/photo-album/test-albums';

@Component({
  templateUrl: './fanfare-4-fun-page.component.html',
  styleUrls: ['./fanfare-4-fun-page.component.scss'],
})
export class Fanfare4FunPageComponent {
  public nextActivity: Activity = testActivities[0];
  public recentAlbum: PhotoAlbum = testAlbums[0];
}
