import { Component, OnInit } from '@angular/core';
import { testActivities } from '../shared/activity/test-activities';
import { Observable } from 'rxjs';
import { Activity } from '../shared/activity/activity';
import { ActivityService } from '../shared/activity/activity.service';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent implements OnInit {
  activities: Activity[];

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.activities = this.activityService.getActivities();
  }
}
