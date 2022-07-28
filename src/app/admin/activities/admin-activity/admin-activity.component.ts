import { ActivityService } from './../../../shared/activity/activity.service';
import { ActivitiesComponent } from './../activities.component';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Activity } from './../../../shared/activity/activity';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-activity',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './admin-activity.component.html',
  styleUrls: ['./admin-activity.component.scss']
})
export class AdminActivityComponent implements OnChanges {
  @Input() public activity: Activity;

  public editting = false;

  public activityForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
  });

  public today = new Date().toISOString().split('T')[0];

  constructor(private parent: ActivitiesComponent, private activityService: ActivityService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.activityForm.setValue(this.activity);
    this.editting = !this.activity.id;
  }

  public async save(): Promise<void> {
    if (!this.activityForm.valid) return;
    await this.activityService.saveActivity(this.activityForm.value as Activity);
    this.parent.refreshActivities();
  }

  public async delete(): Promise<void> {
    if (confirm(`Weet je zeker dat je activiteit '${this.activity.id}' wil verwijderen?`)) {
      await this.activityService.deleteActivity(this.activityForm.value as Activity);
      this.parent.refreshActivities();
    }
  }
}
