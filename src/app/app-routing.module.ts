import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { AccesDomaine } from './accesDomaine/accesDomaine.component';
import { accesEglise } from './accessEglise/accesEglise.component';
import { PhotoDisplayerComponent } from './photo-displayer/photo-displayer.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  { path: 'defaultsite',
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'accomodation',
    component: HebergementComponent,
  },
  {
    path: 'access',
    component: AccesDomaine,
  },
  {
    path: 'ceremony',
    component: accesEglise,
  },
  {
    path: 'rsvp',
    component: RsvpComponent,
  },
  {
    path: 'civil',
    component: PhotoDisplayerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
