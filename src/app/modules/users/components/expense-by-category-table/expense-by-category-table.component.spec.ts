import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseByCategoryTableComponent } from './expense-by-category-table.component';

describe('ExpenseByCategoryTableComponent', () => {
  let component: ExpenseByCategoryTableComponent;
  let fixture: ComponentFixture<ExpenseByCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseByCategoryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseByCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
