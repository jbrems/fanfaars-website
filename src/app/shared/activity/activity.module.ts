import { NgModule } from '@angular/core';
import { ActivityComponent } from './activity.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule, DatePipe } from '@angular/common';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [ActivityComponent, CalendarComponent],
  imports: [
    CommonModule,
    LogoModule
  ],
  exports: [ActivityComponent],
})
export class ActivityModule {}
