import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySelectionComponent } from './gallery-selection.component';

describe('GallerySelectionComponent', () => {
  let component: GallerySelectionComponent;
  let fixture: ComponentFixture<GallerySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallerySelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
