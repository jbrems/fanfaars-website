import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesPageComponent } from './activities-page.component';
import { TitleModule } from '../shared/title/title.module';
import { ActivityModule } from '../shared/activity/activity.module';

@NgModule({
  declarations: [ActivitiesPageComponent],
  imports: [
    CommonModule,
    TitleModule,
    ActivityModule
  ],
  exports: [ActivitiesPageComponent],
})
export class ActivitiesPageModule { }
