import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNamesComponent } from './courses-names.component';

describe('CoursesNamesComponent', () => {
  let component: CoursesNamesComponent;
  let fixture: ComponentFixture<CoursesNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
