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
    this.getAllItemsFromBucket();
  }

  filesToUpload: Array<File> = [];
  items: {thumb: string, src: string, type: string}[] = [];
  modalSrc = {thumb: "", src: "", type: ""};


  private buildDataStructure(itemList: string[]) {
    itemList.forEach((value) => {
      if (
        value.endsWith(".mp4") || 
        value.endsWith(".mov") ||
        value.endsWith(".avi") ||
        value.endsWith(".wmv") ||
        value.endsWith(".webm")) {
          console.log(value);
          this.items.push(
            {
              src: "https://testforuploadreligieu.s3.eu-west-3.amazonaws.com/" + value,
              thumb: "https://beanscafe.org/wp-content/uploads/2021/04/Video-Placeholder.jpg",
              type: "video"
            })
        } else {
          this.items.push(
            {
              src: "https://testforuploadreligieu.s3.eu-west-3.amazonaws.com/" + value,
              thumb: "https://upload-religieu-compressed.s3.eu-west-3.amazonaws.com/" + value,
              type: "image"
            })
        }
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

  getAllItemsFromBucket() {
    this.http.get(`https://testforuploadreligieu.s3.eu-west-3.amazonaws.com/?list-type=2`, { responseType: 'text' }).subscribe(
      data => {
        const parsed = this.parser.parseFromString(data, "text/xml");
        const array = Array.from(parsed.querySelectorAll("Key")).map((el) => el.innerHTML);
        this.buildDataStructure(array);
      }
    )
  }

  onClickImage(photo: any){
    this.modalSrc = photo
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
}
