import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraphoto',
  templateUrl: './paragraphoto.component.html',
  styleUrls: ['./paragraphoto.component.scss']
})
export class ParagraphotoComponent {
  @Input() content: string[] = [];
  @Input() img: string = "";
  @Input() reverse: boolean = false;
}
