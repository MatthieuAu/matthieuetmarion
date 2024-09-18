import { NgModule } from '@angular/core';
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
  ],
  bootstrap: [AppComponent],
  imports: 
    [BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
    ],
  providers: 
  [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
