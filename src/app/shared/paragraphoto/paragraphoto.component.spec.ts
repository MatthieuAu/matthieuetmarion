import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphotoComponent } from './paragraphoto.component';

describe('ParagraphotoComponent', () => {
  let component: ParagraphotoComponent;
  let fixture: ComponentFixture<ParagraphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
