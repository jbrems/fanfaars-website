import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from './firebase-config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './shared/footer/footer.module';
import { HeaderModule } from './shared/header/header.module';
import { PhotoAlbumModule } from './shared/photo-album/photo-album.module';
import { ActivityService } from './shared/activity/activity.service';
import { PhotoAlbumService } from './shared/photo-album/photo-album.service';

function initializeServices(activityService: ActivityService, photoAlbumService: PhotoAlbumService) {
  return async () => {
    await activityService.initialize();
    await photoAlbumService.initialize();
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FooterModule,
    HeaderModule,
    PhotoAlbumModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeServices,
    deps: [ActivityService, PhotoAlbumService],
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
