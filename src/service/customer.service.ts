import { environment } from '../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDto } from '../models/customerDto.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  // Tüm müşterileri listeleme (GET)
  getAllCustomers(): Observable<CustomerDto[]> {
    const apiUrl = `${environment.apiUrl}AngularCustomer/getall`; // Dinamik URL
    console.log(apiUrl);
    return this.http.get<CustomerDto[]>(apiUrl);
  }

  // ID'ye göre müşteri detaylarını getirme (GET)
  getCustomerById(id: number): Observable<CustomerDto> {
    const apiUrl = `${environment.apiUrl}AngularCustomer/getall`;
    return this.http.get<CustomerDto>(`${apiUrl}/${id}`);
  }

  // Yeni müşteri oluşturma (POST)
  createCustomer(customer: CustomerDto): Observable<CustomerDto> {
    const apiUrl = `${environment.apiUrl}AngularCustomer`;
    return this.http.post<CustomerDto>(apiUrl, customer);
  }

  // Müşteri bilgilerini güncelleme (PUT)
  updateCustomer(id: number, customer: CustomerDto): Observable<CustomerDto> {
    const apiUrl = `${environment.apiUrl}AngularCustomer/`;
    return this.http.put<CustomerDto>(`${apiUrl}${id}`, customer);
  }

  // Müşteri silme (DELETE)
  deleteCustomer(id: number): Observable<void> {
    const apiUrl = `${environment.apiUrl}AngularCustomer/`;
    return this.http.delete<void>(`${apiUrl}${id}`);
  }
}
