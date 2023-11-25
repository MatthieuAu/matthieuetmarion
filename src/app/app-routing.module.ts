import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { HebergementComponent } from './hebergement/hebergement.component';

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
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
