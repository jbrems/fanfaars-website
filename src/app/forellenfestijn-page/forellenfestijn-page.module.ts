import { NgModule } from '@angular/core';
import { ForellenfestijnPageComponent } from './forellenfestijn-page.component';
import { CommonModule } from '@angular/common';
import { ForellenfestijnPageRoutingModule } from './forellenfestijn-page-routing.module';
import { TitleModule } from '../shared/title/title.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../shared/icon/icon.module';
import {InputFieldModule} from './input-field/input-field.module';
import {SelectListModule} from './select-list/select-list.module';
import {TextAreaModule} from './text-area/text-area.module';
import { ActivityModule } from '../shared/activity/activity.module';
import {
  PersonsInputModule
} from "./persons-input/persons-input.module";
import {
  TimeInputModule
} from "./time-input/time-input.module";

@NgModule({
  declarations: [ForellenfestijnPageComponent],
  imports: [
    CommonModule,
    ForellenfestijnPageRoutingModule,
    IconModule,
    InputFieldModule,
    ReactiveFormsModule,
    SelectListModule,
    TextAreaModule,
    TitleModule,
    ActivityModule,
    PersonsInputModule,
    TimeInputModule,
  ],
})
export class ForellenfestijnPageModule {}
