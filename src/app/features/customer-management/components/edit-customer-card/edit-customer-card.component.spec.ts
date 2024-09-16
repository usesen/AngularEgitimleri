import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerCardComponent } from './edit-customer-card.component';

describe('EditCustomerCardComponent', () => {
  let component: EditCustomerCardComponent;
  let fixture: ComponentFixture<EditCustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCustomerCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
