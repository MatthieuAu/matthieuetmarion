import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-selection',
  templateUrl: './gallery-selection.component.html',
  styleUrl: './gallery-selection.component.scss'
})
export class GallerySelectionComponent {

  children = [
    {
      label: 'Matin',
      path: 'matin'
    },
    {
      path: 'ceremonie-religieuse', 
      label: 'Cérémonie religieuse'
    },
    {
      path: 'a-deux', 
      label: 'A deux'
    },
    {
      path: 'vin-d-honneur', 
      label: 'Vin d\'honneur'
    },
    {
      path: 'diner', 
      label: 'Dîner'
    },
    {
      path: 'soiree', 
      label: 'Soirée'
    },

  ];

}
