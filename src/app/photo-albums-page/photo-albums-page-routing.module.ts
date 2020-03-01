import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PhotoAlbumsPageComponent } from './photo-albums-page.component';

const photoAlbumsRoutes: Route[] = [{
  path: '',
  component: PhotoAlbumsPageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(photoAlbumsRoutes)],
})
export class PhotoAlbumsPageRoutingModule {}
