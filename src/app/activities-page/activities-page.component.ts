import { Component, OnInit } from '@angular/core';
import { testActivities } from '../shared/activity/test-activities';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent implements OnInit {
  activities = testActivities;

  constructor() { }

  ngOnInit() {
  }

}
