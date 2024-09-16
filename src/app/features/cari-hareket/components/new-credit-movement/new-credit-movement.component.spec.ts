import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreditMovementComponent } from './new-credit-movement.component';

describe('NewCreditMovementComponent', () => {
  let component: NewCreditMovementComponent;
  let fixture: ComponentFixture<NewCreditMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCreditMovementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCreditMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
