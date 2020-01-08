import { NgModule } from '@angular/core';
import { ContactPageComponent } from './contact-page.component';
import { TitleModule } from '../shared/title/title.module';
import { PersonCardComponent } from './person-card/person-card.component';

@NgModule({
  declarations: [ContactPageComponent, PersonCardComponent],
  imports: [TitleModule],
  exports: [ContactPageComponent],
})
export class ContactPageModule {}
