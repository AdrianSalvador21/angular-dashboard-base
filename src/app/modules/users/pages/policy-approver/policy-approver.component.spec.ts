import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyApproverComponent } from './policy-approver.component';

describe('PolicyApproverComponent', () => {
  let component: PolicyApproverComponent;
  let fixture: ComponentFixture<PolicyApproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyApproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
