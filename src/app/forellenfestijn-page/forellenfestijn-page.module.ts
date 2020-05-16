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
  ],
})
export class ForellenfestijnPageModule {}
