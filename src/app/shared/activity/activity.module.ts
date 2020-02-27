import { NgModule } from '@angular/core';
import { ActivityComponent } from './activity.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [ActivityComponent, CalendarComponent],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [ActivityComponent],
})
export class ActivityModule {}
