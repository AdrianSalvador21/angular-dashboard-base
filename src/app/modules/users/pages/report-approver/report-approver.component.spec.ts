import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportApproverComponent } from './report-approver.component';

describe('ReportApproverComponent', () => {
  let component: ReportApproverComponent;
  let fixture: ComponentFixture<ReportApproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportApproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
