import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellTimeComponent } from './table-cell-time.component';

describe('TableCellTimeComponent', () => {
  let component: TableCellTimeComponent;
  let fixture: ComponentFixture<TableCellTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCellTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
