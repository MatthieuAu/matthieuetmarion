import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-displayer',
  templateUrl: './photo-displayer.component.html',
  styleUrls: ['./photo-displayer.component.scss'],
})
export class PhotoDisplayerComponent implements OnInit{
  photosName: String[] = [];
  parser = new DOMParser();
  lastPhotoName: string = "";
  needToFetchNextPhotos = true;
  maxPhotosPerFetch = 30;
  modalImage="";
  showPhotos = false;
  mdpSubmission = "";

  constructor(private http: HttpClient) {
  }
  
  
  ngOnInit(): void {
    this.http.get(`https://mariage-civil.s3.eu-west-3.amazonaws.com/?list-type=2&max-keys=${this.maxPhotosPerFetch}`, { responseType: 'text' }).subscribe(
      (value)=> {
        const parsed = this.parser.parseFromString(value, "text/xml");
        const array = Array.from(parsed.querySelectorAll("Key"));
        this.photosName = array.map((value) => "https://mariage-civil.s3.eu-west-3.amazonaws.com/" + value.innerHTML);
        this.lastPhotoName = array.at(-1)!.innerHTML;
        if (array.length == 0 || array.length < this.maxPhotosPerFetch) {
          this.needToFetchNextPhotos = false;
        } 
      }
    );
  }

  onScrollended() {
    if (this.needToFetchNextPhotos) {
      console.log("Fetching...")
      this.http.get(`https://mariage-civil.s3.eu-west-3.amazonaws.com/?list-type=2&max-keys=${this.maxPhotosPerFetch}&start-after=${this.lastPhotoName}`, { responseType: 'text' }).subscribe(
        (value)=> {
          console.log("Parsing...")
          const parsed = this.parser.parseFromString(value, "text/xml");
          const array = Array.from(parsed.querySelectorAll("Key"));
          if (array.length == 0 || array.length < this.maxPhotosPerFetch) {
            this.needToFetchNextPhotos = false;
          } 
          if (array.length > 0) {
            this.photosName.push(...array.map((value) => "https://mariage-civil.s3.eu-west-3.amazonaws.com/" + value.innerHTML));
            this.lastPhotoName = array.at(-1)!.innerHTML;
          }
      });
    }
  }

  onClickImage(event: any){
    this.modalImage=event.target.currentSrc
  }

  imageDidLoad(evt: any) {
    if (evt && evt.target) {
      const width = evt.target.naturalWidth;
      const height = evt.target.naturalHeight;
      if (height < width) {
        evt.target.classList.add('landscape');
      } else {
        evt.target.classList.remove('landscape');
      }
    }
  
  }

  onSubmit() {
    const input = document.getElementById("input");
    input?.classList.remove("can-invalid");
    this.http.post("https://ewrz3dlbfdcdhai54eshvftjwa0xpxgu.lambda-url.us-east-1.on.aws/", {'mdp_submission': this.mdpSubmission},)
     .subscribe((value) => {
      this.showPhotos = value as boolean;
      if (!this.showPhotos) {
        input?.classList.add("can-invalid");
      }
     })
  
  }
}
