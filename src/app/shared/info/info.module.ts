import { NgModule } from '@angular/core';
import { InfoComponent } from './info.component';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [InfoComponent],
  imports: [CommonModule, IconModule],
  exports: [InfoComponent],
})
export class InfoModule {}
