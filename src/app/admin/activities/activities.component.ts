import { map } from 'rxjs/operators';
import { AdminActivityComponent } from './admin-activity/admin-activity.component';
import { ActivityService } from './../../shared/activity/activity.service';
import { Activity } from './../../shared/activity/activity';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, AdminActivityComponent, MatButtonModule, MatIconModule],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  public activities$: Observable<Activity[]>;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.refreshActivities();
  }

  public refreshActivities(): void {
    this.activities$ = this.activityService.getAllActivities();
  }

  public addActivity(): void {
    this.activities$ = this.activityService.getAllActivities().pipe(map(
      (activities: Activity[]) => [{ id: '', title: '', date: '', time: '', description: '', group: '', place: '' } as Activity, ...activities],
    ));
  }
}
