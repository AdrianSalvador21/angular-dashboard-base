import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseNotificationTableComponent } from './expense-notification-table.component';

describe('ExpenseNotificationTableComponent', () => {
  let component: ExpenseNotificationTableComponent;
  let fixture: ComponentFixture<ExpenseNotificationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseNotificationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseNotificationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
