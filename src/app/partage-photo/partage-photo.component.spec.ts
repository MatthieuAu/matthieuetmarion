import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartagePhotoComponent } from './partage-photo.component';

describe('PartagePhotoComponent', () => {
  let component: PartagePhotoComponent;
  let fixture: ComponentFixture<PartagePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartagePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartagePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
