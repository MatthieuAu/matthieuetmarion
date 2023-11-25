import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(document:click)': 'onClickOutside($event)',
  },
})
export class NavbarComponent implements OnInit {
  links = [
    { label: 'Home', path: '/home' },
    { label: 'Accès au domaine', path: '/access' },
    // { label: 'Hébergement', path: '/accomodation' }, //hidden for now
    { label: 'Cérémonie', path: '/ceremony' },
    { label: 'Contact', path: '/contact' },
    { label: 'RSVP', path: '/rsvp' },
  ]

  constructor(private _eref: ElementRef) { }

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

  myFunction() {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  onClickOutside(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      document.getElementById("myDropdown")?.classList.remove("show");
    }
  }
  
}
