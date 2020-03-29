import {NgModule} from '@angular/core';
import {OnlineRehearsalComponent} from './online-rehearsal.component';
import {OnlineRehearsalRoutingModule} from './online-rehearsal-routing.module';
import {TitleModule} from '../shared/title/title.module';
import {IconModule} from '../shared/icon/icon.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [OnlineRehearsalComponent],
  imports: [OnlineRehearsalRoutingModule, TitleModule, IconModule, CommonModule],
  exports: [OnlineRehearsalComponent]
})
export class OnlineRehearsalModule {}
