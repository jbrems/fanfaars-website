import { NgModule } from '@angular/core';
import { ActivityComponent } from './activity.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [ActivityComponent, CalendarComponent],
  imports: [CommonModule],
  exports: [ActivityComponent],
})
export class ActivityModule {}
