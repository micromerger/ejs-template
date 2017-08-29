import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model2ComponentListing } from './Model2.listing.component';

describe('Model2Component', () => {
  let component: Model2ComponentListing;
  let fixture: ComponentFixture<Model2ComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model2ComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model2ComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});