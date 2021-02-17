import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleModule } from '../shared/title/title.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../shared/icon/icon.module';
import { PaellaPageComponent } from './paella-page.component';
import { PaellaPageRoutingModule } from './paella-page-routing.module';
import {ForellenfestijnPageModule} from '../forellenfestijn-page/forellenfestijn-page.module';
import {InputFieldModule} from '../forellenfestijn-page/input-field/input-field.module';
import {SelectListModule} from '../forellenfestijn-page/select-list/select-list.module';
import {TextAreaModule} from '../forellenfestijn-page/text-area/text-area.module';
import { InfoModule } from '../shared/info/info.module';

@NgModule({
  declarations: [PaellaPageComponent],
  imports: [
    CommonModule,
    IconModule,
    InfoModule,
    InputFieldModule,
    PaellaPageRoutingModule,
    ReactiveFormsModule,
    SelectListModule,
    TextAreaModule,
    TitleModule,
  ],
})
export class PaellaPageModule {}
