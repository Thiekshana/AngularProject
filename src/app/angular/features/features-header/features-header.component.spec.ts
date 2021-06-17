import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesHeaderComponent } from './features-header.component';

describe('FeaturesHeaderComponent', () => {
  let component: FeaturesHeaderComponent;
  let fixture: ComponentFixture<FeaturesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
