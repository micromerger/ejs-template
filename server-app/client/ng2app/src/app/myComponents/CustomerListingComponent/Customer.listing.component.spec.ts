import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponentListing } from './Customer.listing.component';

describe('CustomerComponent', () => {
  let component: CustomerComponentListing;
  let fixture: ComponentFixture<CustomerComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});