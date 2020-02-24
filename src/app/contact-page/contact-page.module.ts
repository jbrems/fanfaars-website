import { NgModule } from '@angular/core';
import { ContactPageComponent } from './contact-page.component';
import { TitleModule } from '../shared/title/title.module';
import { PersonCardComponent } from './person-card/person-card.component';
import { BreadcrumbModule } from '../shared/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [ContactPageComponent, PersonCardComponent],
  imports: [
    TitleModule,
    BreadcrumbModule
  ],
  exports: [ContactPageComponent],
})
export class ContactPageModule {}
