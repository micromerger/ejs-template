import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model1ComponentListing } from './Model1.listing.component';

describe('Model1Component', () => {
  let component: Model1ComponentListing;
  let fixture: ComponentFixture<Model1ComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model1ComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model1ComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});