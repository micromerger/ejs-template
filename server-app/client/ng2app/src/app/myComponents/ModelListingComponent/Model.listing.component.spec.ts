import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelComponentListing } from './Model.listing.component';

describe('ModelComponent', () => {
  let component: ModelComponentListing;
  let fixture: ComponentFixture<ModelComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});