import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailComponentListing } from './Email.listing.component';

describe('EmailComponent', () => {
  let component: EmailComponentListing;
  let fixture: ComponentFixture<EmailComponentListing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailComponentListing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponentListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});