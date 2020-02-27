import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
