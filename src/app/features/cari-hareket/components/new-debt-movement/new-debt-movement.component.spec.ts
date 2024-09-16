import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDebtMovementComponent } from './new-debt-movement.component';

describe('NewDebtMovementComponent', () => {
  let component: NewDebtMovementComponent;
  let fixture: ComponentFixture<NewDebtMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDebtMovementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDebtMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
