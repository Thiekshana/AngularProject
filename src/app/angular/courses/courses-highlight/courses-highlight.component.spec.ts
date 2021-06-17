import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesHighlightComponent } from './courses-highlight.component';

describe('CoursesHighlightComponent', () => {
  let component: CoursesHighlightComponent;
  let fixture: ComponentFixture<CoursesHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
