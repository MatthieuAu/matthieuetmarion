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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
