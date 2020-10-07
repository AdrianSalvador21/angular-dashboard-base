import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAssignmentComponent } from './users-assignment.component';

describe('UsersAssignmentComponent', () => {
  let component: UsersAssignmentComponent;
  let fixture: ComponentFixture<UsersAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
