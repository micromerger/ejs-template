import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppiontmentComponentListing } from './Appiontment.listing.component';

describe('AppiontmentComponent', () => {
  let component: AppiontmentComponentListing;
  let fixture: ComponentFixture<AppiontmentComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppiontmentComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppiontmentComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});