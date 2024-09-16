import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtCreditReportComponent } from './debt-credit-report.component';

describe('DebtCreditReportComponent', () => {
  let component: DebtCreditReportComponent;
  let fixture: ComponentFixture<DebtCreditReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtCreditReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebtCreditReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
