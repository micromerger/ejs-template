import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientComponentListing } from './Patient.listing.component';

describe('PatientComponent', () => {
  let component: PatientComponentListing;
  let fixture: ComponentFixture<PatientComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});