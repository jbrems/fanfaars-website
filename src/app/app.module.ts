import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, CONFIG } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from './firebase-config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './shared/footer/footer.module';
import { HeaderModule } from './shared/header/header.module';
import { PhotoAlbumModule } from './shared/photo-album/photo-album.module';

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
registerLocaleData(localeNl, 'nl-BE');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserModule,
    FooterModule,
    HeaderModule,
    PhotoAlbumModule,
  ],
  providers: [{
    provide: CONFIG,
    useValue: {
      allow_ad_personalization_signals: false,
      anonymize_ip: true,
    },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
