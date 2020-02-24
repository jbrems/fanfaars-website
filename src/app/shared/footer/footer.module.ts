import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    LogoModule
  ]
})
export class FooterModule {}
