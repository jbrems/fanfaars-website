import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    LogoModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
