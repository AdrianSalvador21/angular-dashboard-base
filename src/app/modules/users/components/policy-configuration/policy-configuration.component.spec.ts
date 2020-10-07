import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyConfigurationComponent } from './policy-configuration.component';

describe('PolicyConfigurationComponent', () => {
  let component: PolicyConfigurationComponent;
  let fixture: ComponentFixture<PolicyConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
