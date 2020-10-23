import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseNotificationDetailTableComponent } from './expense-notification-detail-table.component';

describe('ExpenseNotificationDetailTableComponent', () => {
  let component: ExpenseNotificationDetailTableComponent;
  let fixture: ComponentFixture<ExpenseNotificationDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseNotificationDetailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseNotificationDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
