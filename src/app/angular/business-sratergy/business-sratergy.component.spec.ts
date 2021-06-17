import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSratergyComponent } from './business-sratergy.component';

describe('BusinessSratergyComponent', () => {
  let component: BusinessSratergyComponent;
  let fixture: ComponentFixture<BusinessSratergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessSratergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSratergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
