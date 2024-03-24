import { Component, OnInit } from '@angular/core';
import { accomodation } from "../../data/accomodation";
import { environment } from '../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss']
})
export class HebergementComponent implements OnInit{
  constructor( public sanitizer: DomSanitizer) { }
  
  mainMapUrl: SafeResourceUrl | undefined;
  baseMapUrl: SafeResourceUrl | undefined;
  content: any[] = [];
  googleApiKey? = environment.GOOGLE_MAPS_API_KEY;
  baseGoogleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=${this.googleApiKey}`
  
  ngOnInit(): void {
    this.content = accomodation;
    let acc = "";
    this.content.forEach((element: any) => {
      element.location = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseGoogleMapsUrl}&q=${element.location}`);
      acc += `&q=${element.location}`;
    });
    this.mainMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseGoogleMapsUrl}&center=48.566808682257765,+2.670359046028263&zoom=13${acc}`);
  }

}
