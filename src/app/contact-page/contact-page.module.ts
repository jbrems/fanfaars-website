import { NgModule } from '@angular/core';
import { ContactPageComponent } from './contact-page.component';
import { TitleModule } from '../shared/title/title.module';
import { PersonCardComponent } from './person-card/person-card.component';
import { RouterModule } from '@angular/router';
import { ContactPageRoutingModule } from './contact-page-routing.module';

@NgModule({
  declarations: [ContactPageComponent, PersonCardComponent],
  imports: [
    ContactPageRoutingModule,
    RouterModule,
    TitleModule,
  ],
  exports: [ContactPageComponent],
})
export class ContactPageModule {}
