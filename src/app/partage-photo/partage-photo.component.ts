import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

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
  items: {thumb: string, src: string, type: string, position: number}[] = [];
  modalSrc = {thumb: "", src: "", type: "", position: 0};


  private buildDataStructure(itemList: string[]) {
    let iterator = 0;
    itemList.forEach((value) => {
      if (
        value.toLowerCase().endsWith(".mp4") || 
        value.toLowerCase().endsWith(".mov") ||
        value.toLowerCase().endsWith(".avi") ||
        value.toLowerCase().endsWith(".wmv") ||
        value.toLowerCase().endsWith(".webm")) {
          this.items.push(
            {
              src: "https://testforuploadreligieu.s3.eu-west-3.amazonaws.com/" + value,
              thumb: "https://beanscafe.org/wp-content/uploads/2021/04/Video-Placeholder.jpg",
              type: "video",
              position: iterator
            })
        } else {
          this.items.push(
            {
              src: "https://testforuploadreligieu.s3.eu-west-3.amazonaws.com/" + value,
              thumb: "https://upload-religieu-compressed.s3.eu-west-3.amazonaws.com/" + value,
              type: "image",
              position: iterator 
            })
        }
        iterator += 1;
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
        this.http.put(`https://testforuploadreligieu.s3.eu-west-3.amazonaws.com/${uuid()}-${element.name}`, element).subscribe({
          error: error => console.log(error)
        });
    };
  }

  getAllItemsFromBucket() {
    this.http.get(`https://testforuploadreligieu.s3.eu-west-3.amazonaws.com/?list-type=2`, { responseType: 'text' }).subscribe(
      data => {
        const parsed = this.parser.parseFromString(data, "text/xml");
        const array = Array.from(parsed.querySelectorAll("Key")).map((el) => el.innerHTML);
        this.buildDataStructure(array);
      }
    )
  }

  resetModal() {
    this.modalSrc = {thumb: "", src: "", type: "", position: 0};
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

  previousImage(event: Event) {
    event.stopPropagation();
    if (this.modalSrc.position != 0) {
      this.modalSrc = this.items[this.modalSrc.position - 1];
    }
    
  }

  nextImage(event: Event) {
    event.stopPropagation();
    if (this.modalSrc.position < this.items.length) {
      this.modalSrc = this.items[this.modalSrc.position + 1];
    }
  }

  scrollToImage() {
    const imageToScroll = document.getElementById("item"+this.modalSrc.position);
    imageToScroll?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  }
}
