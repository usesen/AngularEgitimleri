import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelCustomerCardComponent } from './cancel-customer-card.component';

describe('CancelCustomerCardComponent', () => {
  let component: CancelCustomerCardComponent;
  let fixture: ComponentFixture<CancelCustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelCustomerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelCustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
