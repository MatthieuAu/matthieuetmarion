import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links = [
    { label: 'Home', path: '/home' },
    { label: 'Informations', path: '/infos' },
    { label: 'Accès', path: '/access' },
    { label: 'Hébergement', path: '/accomodation' },
    { label: 'Cérémonie', path: '/ceremony' },
    { label: 'Activités', path: '/activities' },
    { label: 'Liste de mariage', path: '/gifts' },
    { label: 'Contact', path: '/contact' },
    { label: 'RSVP', path: '/rsvp' },
  ]

  ngOnInit(): void {
    const navbar = document.getElementById("navbar");
    window.onscroll = function() {
      if (window.scrollY > 0) {
        navbar?.classList.add("moving");
      } else {
        navbar?.classList.remove("moving");
      }
    }
  }
  
}
