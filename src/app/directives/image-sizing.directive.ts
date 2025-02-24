import { AfterViewInit, Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appImageSizing]',
})
export class ImageSizingDirective {

  ngAfterViewChecked() {
    const element = (this as any).elementRef.nativeElement;
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    console.log(`Width: ${width}, Height: ${height}`);
  }

  @HostBinding('class.landscape') get isLandscape() {
    const element = (this as any).elementRef.nativeElement;
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    return height <= width;
  }
  constructor(private elementRef: ElementRef) {}
}
