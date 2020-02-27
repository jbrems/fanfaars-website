import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { IconModule } from '../icon/icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    IconModule,
    RouterModule
  ]
})
export class FooterModule {}
