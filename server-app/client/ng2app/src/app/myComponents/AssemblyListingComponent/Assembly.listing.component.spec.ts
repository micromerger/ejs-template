import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyComponentListing } from './Assembly.listing.component';

describe('AssemblyComponent', () => {
  let component: AssemblyComponentListing;
  let fixture: ComponentFixture<AssemblyComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});