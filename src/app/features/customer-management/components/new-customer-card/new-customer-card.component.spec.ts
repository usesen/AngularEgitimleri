import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerCardComponent } from './new-customer-card.component';

describe('NewCustomerCardComponent', () => {
  let component: NewCustomerCardComponent;
  let fixture: ComponentFixture<NewCustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCustomerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
