import {NgModule} from '@angular/core';
import {InputFieldComponent} from './input-field.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [InputFieldComponent],
  imports: [CommonModule],
  exports: [InputFieldComponent],
})
export class InputFieldModule {}
