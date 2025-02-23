import { Component } from '@angular/core';
import { GalleryItem, ImageItem, Gallery } from 'ng-gallery';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  parser = new DOMParser();

  galleryId = 'galleryId';
  galleryRef = this.gallery.ref(this.galleryId);
  items: GalleryItem[] = [];

  paramMap = new Map<string, string>([
    ["matin", "1-lematin"],
    ["ceremonie-religieuse", "2-ceremoniereligieuse"],
    ["a-deux", "3-deux"],
    ["vin-d-honneur", "4-vindhonneur"],
    ["diner", "5-diner"],
    ["soiree", "6-soiree"],
  ]);

  constructor(
    private http: HttpClient,
    public gallery: Gallery,
    private route: ActivatedRoute,
  ) {
    const lastRoute = route.snapshot.url.at(-1)?.path ?? "matin";
    this._loadItems(this.paramMap.get(lastRoute) ?? "1-lematin");
  }

  private _loadItems(category: string) {
    this.http.get(`https://photographe-mariage-bucket.s3.eu-west-3.amazonaws.com/?list-type=2&prefix=RAW/${category}`, { responseType: 'text' }).subscribe(
      data => {
        const parsed = this.parser.parseFromString(data, "text/xml");
        const array = Array.from(parsed.querySelectorAll("Key")).map((el) => el.innerHTML);
        this.items = array.map((value) => new ImageItem({
          src: "https://photographe-mariage-bucket.s3.eu-west-3.amazonaws.com/" + value,
          thumb: "https://photographe-mariage-bucket.s3.eu-west-3.amazonaws.com/COMPRESSED/" + value.replace("RAW/", ""),
        }));
        this.galleryRef.load(this.items);
      }
    )
  }

  // openGallery(index: number = 0) {
  //   this.lightbox.open(index, this.galleryId, {
  //     panelClass: 'fullscreen'
  //   });
  // }

  // ,
  // "Condition": {
  //     "StringLike": {
  //         "aws:Referer": "https://matthieuetmarion.fr/*"
  //     }
  // }

}
