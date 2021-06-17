import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDescriptionsComponent } from './courses-descriptions.component';

describe('CoursesDescriptionsComponent', () => {
  let component: CoursesDescriptionsComponent;
  let fixture: ComponentFixture<CoursesDescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesDescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
