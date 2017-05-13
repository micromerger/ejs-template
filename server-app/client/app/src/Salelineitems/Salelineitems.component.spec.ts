import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalelineitemsComponent } from './Salelineitems.component';

describe('SalelineitemsComponent', () => {
  let component: SalelineitemsComponent;
  let fixture: ComponentFixture<SalelineitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalelineitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalelineitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});