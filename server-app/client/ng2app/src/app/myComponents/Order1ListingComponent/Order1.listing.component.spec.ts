import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Order1ComponentListing } from './Order1.listing.component';

describe('Order1Component', () => {
  let component: Order1ComponentListing;
  let fixture: ComponentFixture<Order1ComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Order1ComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Order1ComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});