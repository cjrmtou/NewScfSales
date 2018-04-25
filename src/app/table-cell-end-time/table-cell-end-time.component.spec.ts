import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellEndTimeComponent } from './table-cell-end-time.component';

describe('TableCellEndTimeComponent', () => {
  let component: TableCellEndTimeComponent;
  let fixture: ComponentFixture<TableCellEndTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCellEndTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellEndTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
