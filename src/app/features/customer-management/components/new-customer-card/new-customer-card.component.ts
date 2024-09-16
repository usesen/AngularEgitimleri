import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  company: string;
  position: string;
  notes: string;
}

@Component({
  selector: 'app-new-customer-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-customer-card.component.html',
  styleUrl: './new-customer-card.component.scss'
})
export class NewCustomerCardComponent {
  customer: Customer = {
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
    notes: ''
  };

  saveCustomer() {
    console.log('Müşteri kaydedildi:', this.customer);
    // Burada müşteriyi kaydetme işlemi yapılacak
  }
}
