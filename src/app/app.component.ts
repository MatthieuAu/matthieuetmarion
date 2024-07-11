import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { PhotoDisplayerComponent } from './photo-displayer/photo-displayer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(PhotoDisplayerComponent) displayer!: PhotoDisplayerComponent
  title = 'matthieuetmarion';
  scrollView: HTMLElement | null = null;
  
  ngOnInit(): void {
    this.scrollView = document.getElementById("scrollable-div");
    console.log(this.scrollView?.scrollTop)
  }


  onActivate(event: Component) {
    if (event instanceof PhotoDisplayerComponent) {
      this.displayer = event
      // const diff = (Number(this.scrollView?.scrollHeight) - Number(this.scrollView?.offsetHeight))
      // console.log(this.scrollView?.scrollHeight)
      // console.log(this.scrollView?.clientHeight)

      // if (diff - Number(this.scrollView?.scrollTop) < 20) {
      //   this.displayer.onScrollended()
      // }
    }
  }

  warnChild(event: any) {
    const diff = (Number(this.scrollView?.scrollHeight) - Number(this.scrollView?.offsetHeight))
    if (this.displayer != undefined && diff - Number(this.scrollView?.scrollTop) < 20) {
      this.displayer.onScrollended()
    }
  }
}
