import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';

const contactRoutes: Route[] = [{
  path: '',
  component: ContactPageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
})
export class ContactPageRoutingModule {}
