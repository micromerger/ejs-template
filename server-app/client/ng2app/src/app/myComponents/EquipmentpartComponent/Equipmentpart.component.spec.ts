import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentpartComponent } from './Equipmentpart.component';

describe('EquipmentpartComponent', () => {
  let component: EquipmentpartComponent;
  let fixture: ComponentFixture<EquipmentpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});