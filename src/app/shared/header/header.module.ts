import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
