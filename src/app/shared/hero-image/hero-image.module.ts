import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroImageComponent } from './hero-image.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroImageComponent],
  exports: [HeroImageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HeroImageModule {}
