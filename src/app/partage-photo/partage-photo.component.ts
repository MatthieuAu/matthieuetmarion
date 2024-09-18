import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partage-photo',
  templateUrl: './partage-photo.component.html',
  styleUrls: ['./partage-photo.component.scss']
})
export class PartagePhotoComponent implements OnInit {
  private needRefresh = false;

  parser = new DOMParser();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getLowResolutionPhotos();
  }

  filesToUpload: Array<File> = [];
  items: {thumb: string, src: string}[] = []

  private buildDataStructure(lowList: string[]) {
    lowList.forEach((value) => {
      this.items.push(
        {
          src: "https://testforuploadreligieu.s3.eu-west-3.amazonaws.com/" + value,
          thumb: "https://upload-religieu-compressed.s3.eu-west-3.amazonaws.com/" + value
        })
    });
  }

  onFileSelected(event: any) {
    if(event.target.files.length > 0) 
      {
        this.filesToUpload = Array.from(event.target.files);
      }
  }

  uploadFiles() {
    for (const element of this.filesToUpload) {
      let formData = new FormData();
      formData.append('file', element);
      console.log(formData);
        this.http.put(`https://testforuploadreligieu.s3.eu-west-3.amazonaws.com/${element.name}`, element).subscribe({
          error: error => console.log(error)
        });
    };
  }

  // ,
	// 		"Condition": {
	// 			"StringLike": {
	// 				"aws:Referer": "https://matthieuetmarion.fr/*"
	// 			}
	// 		}

  getLowResolutionPhotos() {
    this.http.get(`https://upload-religieu-compressed.s3.eu-west-3.amazonaws.com/?list-type=2&max-keys=25`, { responseType: 'text' }).subscribe(
      data => {
        const parsed = this.parser.parseFromString(data, "text/xml");
        const array = Array.from(parsed.querySelectorAll("Key")).map((el) => el.innerHTML);
        this.buildDataStructure(array);
      }
    )
  }
}
