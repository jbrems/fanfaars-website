import { NgModule } from '@angular/core';
import { ForellenfestijnPageComponent } from './forellenfestijn-page.component';
import { CommonModule } from '@angular/common';
import { ForellenfestijnPageRoutingModule } from './forellenfestijn-page-routing.module';
import { TitleModule } from '../shared/title/title.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';
import { SelectListComponent } from './select-list/select-list.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { IconModule } from '../shared/icon/icon.module';

@NgModule({
  declarations: [ForellenfestijnPageComponent, InputFieldComponent, SelectListComponent, TextAreaComponent],
  imports: [
    CommonModule,
    ForellenfestijnPageRoutingModule,
    TitleModule,
    ReactiveFormsModule,
    IconModule,
  ],
})
export class ForellenfestijnPageModule {}
