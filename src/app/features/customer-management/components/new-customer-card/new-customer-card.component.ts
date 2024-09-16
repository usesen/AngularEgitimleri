import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // NgIf ve diğer yapısal direktifler burada bulunur
@Component({
  selector: 'app-new-customer-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-customer-card.component.html',
  styleUrls: ['./new-customer-card.component.scss'],
})
export class NewCustomerCardComponent implements OnInit {
  @ViewChild('customerForm') customerForm!: NgForm;

  newCustomer: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    company: '',
    position: '',
    notes: '',
  };

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    // Any initialization logic
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  openNewCustomerModal(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      keyboard: false,
    });
  }

  saveCustomer() {
    if (this.customerForm.form.valid) {
      console.log('Yeni müşteri kaydediliyor:', this.newCustomer);
      // Burada müşteri kaydetme işlemini gerçekleştirin
      this.modalService.dismissAll();
      this.resetForm();
    } else {
      Object.keys(this.customerForm.controls).forEach((key) => {
        const control = this.customerForm.controls[key];
        if (control.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  resetForm() {
    this.newCustomer = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      company: '',
      position: '',
      notes: '',
    };
    if (this.customerForm) {
      this.customerForm.resetForm();
    }
  }
}
