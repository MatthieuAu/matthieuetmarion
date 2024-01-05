import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementComponent } from './accesDomaine.component';

describe('HebergementComponent', () => {
  let component: HebergementComponent;
  let fixture: ComponentFixture<HebergementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebergementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
