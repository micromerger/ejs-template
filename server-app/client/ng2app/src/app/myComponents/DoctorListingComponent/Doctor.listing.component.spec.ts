import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorComponentListing } from './Doctor.listing.component';

describe('DoctorComponent', () => {
  let component: DoctorComponentListing;
  let fixture: ComponentFixture<DoctorComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});