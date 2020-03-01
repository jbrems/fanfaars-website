import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesPageComponent } from './activities-page.component';
import { TitleModule } from '../shared/title/title.module';
import { ActivityModule } from '../shared/activity/activity.module';
import { ActivitiesPageRoutingModule } from './activities-page-routing.module';

@NgModule({
  declarations: [ActivitiesPageComponent],
  imports: [
    ActivitiesPageRoutingModule,
    ActivityModule,
    CommonModule,
    TitleModule,
  ],
  exports: [ActivitiesPageComponent],
})
export class ActivitiesPageModule { }
