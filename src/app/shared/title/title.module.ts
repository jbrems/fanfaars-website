import { NgModule } from '@angular/core';
import { TitleComponent } from './title.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, RouterModule],
  exports: [TitleComponent],
})
export class TitleModule {}
