import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { ParagraphotoComponent } from './shared/paragraphoto/paragraphoto.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { PhotoDisplayerComponent } from './photo-displayer/photo-displayer.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PartagePhotoComponent } from './partage-photo/partage-photo.component';
import { CommonModule } from '@angular/common';
import { GalleryModule } from 'ng-gallery';
import { provideAnimations } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';
import { LightboxModule } from 'ng-gallery/lightbox';
import { ImageSizingDirective } from './directives/image-sizing.directive';
import { GallerySelectionComponent } from './gallery-selection/gallery-selection.component';


@NgModule({ 
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    CollapsibleComponent,
    HebergementComponent,
    ParagraphotoComponent,
    RsvpComponent,
    PhotoDisplayerComponent,
    PartagePhotoComponent,
    GalleryComponent,
    ImageSizingDirective,
    GallerySelectionComponent
  ],
  bootstrap: [AppComponent],
  imports: 
    [BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    GalleryModule,
    LightboxModule
    ],
  providers: 
  [provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    importProvidersFrom(GalleryModule)]
})
export class AppModule { }
