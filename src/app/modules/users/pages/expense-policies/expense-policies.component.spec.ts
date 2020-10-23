import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensePoliciesComponent } from './expense-policies.component';

describe('ExpensePoliciesComponent', () => {
  let component: ExpensePoliciesComponent;
  let fixture: ComponentFixture<ExpensePoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensePoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
