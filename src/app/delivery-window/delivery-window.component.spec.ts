import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryWindowComponent } from './delivery-window.component';

describe('DeliveryWindowComponent', () => {
  let component: DeliveryWindowComponent;
  let fixture: ComponentFixture<DeliveryWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
