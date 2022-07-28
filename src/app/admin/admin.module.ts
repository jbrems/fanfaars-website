import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ActivitiesComponent,
    PhotoAlbumsComponent,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class AdminModule { }
