import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customer1ComponentListing } from './Customer1.listing.component';

describe('Customer1Component', () => {
  let component: Customer1ComponentListing;
  let fixture: ComponentFixture<Customer1ComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customer1ComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customer1ComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});