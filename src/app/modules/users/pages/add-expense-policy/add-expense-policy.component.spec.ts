import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpensePolicyComponent } from './add-expense-policy.component';

describe('AddExpensePolicyComponent', () => {
  let component: AddExpensePolicyComponent;
  let fixture: ComponentFixture<AddExpensePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpensePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpensePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
