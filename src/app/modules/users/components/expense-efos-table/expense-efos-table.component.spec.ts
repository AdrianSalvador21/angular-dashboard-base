import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEfosTableComponent } from './expense-efos-table.component';

describe('ExpenseEfosTableComponent', () => {
  let component: ExpenseEfosTableComponent;
  let fixture: ComponentFixture<ExpenseEfosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseEfosTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseEfosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
