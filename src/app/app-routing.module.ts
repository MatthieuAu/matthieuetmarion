import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { AccesDomaine } from './accesDomaine/accesDomaine.component';
import { accesEglise } from './accessEglise/accesEglise.component';
import { PhotoDisplayerComponent } from './photo-displayer/photo-displayer.component';
import { PartagePhotoComponent } from './partage-photo/partage-photo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GallerySelectionComponent } from './gallery-selection/gallery-selection.component';

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
  },
  {
    path: 'partage',
    component: PartagePhotoComponent,
  },
  {
    path: 'religieux',
    component: GallerySelectionComponent,
    children: [
      {
        path: '',
        redirectTo: 'matin',
        pathMatch: 'full'
      },
      {
        path: 'matin',
        component: GalleryComponent, 
      },
      {
        path: 'ceremonie-religieuse', 
        component: GalleryComponent, 
      },
      {
        path: 'a-deux', 
        component: GalleryComponent, 
      },
      {
        path: 'vin-d-honneur', 
        component: GalleryComponent, 
      },
      {
        path: 'diner', 
        component: GalleryComponent, 
      },
      {
        path: 'soiree', 
        component: GalleryComponent, 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
