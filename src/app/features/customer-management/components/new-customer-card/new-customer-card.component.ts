import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // NgIf ve diğer yapısal direktifler burada bulunur
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from '../../../../../service/customer.service'; // CustomerService import
import { CustomerDto } from '../../../../../models/customerDto.model'; // CustomerDto import
import { NgxPaginationModule } from 'ngx-pagination';
import { firstValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-new-customer-card',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, NgxPaginationModule],
  templateUrl: './new-customer-card.component.html',
  styleUrls: ['./new-customer-card.component.scss'],
})
export class NewCustomerCardComponent implements OnInit {
  @ViewChild('newCustomerForm') customerForm!: NgForm;
  @ViewChild('editCustomerForm') editCustomerForm!: NgForm;
  newCustomer: any = {
    id: 0,
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
    debt: 0,
    credit: 0,
    balanceDebt: 0,
    balanceCredit: 0,
  };

  customers: CustomerDto[] = []; // Müşteri listesi
  p: number = 1; // Mevcut sayfa numarası
  itemsPerPage: number = 5; // Her sayfada gösterilecek öğe sayısı
  totalItems: number = 0; // Toplam öğe sayısı
  filteredCustomers: any[] = []; // Filtered customer data
  filterTitle: string = ''; // New property for title filter
  filterAuthorized: string = ''; // New property for authorized filter
  filterCity: string = ''; // New property for city filter
  // selectedCustomer: CustomerDto | null = null; // **BU ALANI EKLİYORUZ**: Seçilen müşteri verilerini tutmak için

  @ViewChild('customerDetailsModal') customerDetailsModal: any; // Modal referansı
  @ViewChild('editCustomerModal') editCustomerModal: any;

  selectedCustomer: CustomerDto = {
    id: 0,
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
    debt: 0,
    credit: 0,
    balanceDebt: 0,
    balanceCredit: 0,
  };
  constructor(
    private modalService: NgbModal,
    private customerService: CustomerService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getCustomers(); // Use the existing method to load customers
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
    // if (this.customerForm?.form?.valid) {
    // Kayıt işlemi başarılı olursa

    console.log('kaydetme işlemine girdi');
    this.customerService.createCustomer(this.newCustomer).subscribe(
      (response) => {
        this.toastr.success('Müşteri başarıyla kaydedildi.', 'Başarılı!');
        this.getCustomers(); // Güncel müşteri listesini getir
        this.modalService.dismissAll(); // Modal'ı kapat
        this.resetForm(); // Formu sıfırla
      },
      (error) => {
        this.toastr.error('Müşteri kaydedilirken bir hata oluştu.', 'Hata!');
      }
    );
    //  } else {
    //   this.toastr.warning('Formda eksik veya hatalı alanlar var.', 'Dikkat!');
    //  }
  }

  resetForm() {
    this.newCustomer = {
      id: 0,
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
      debt: 0,
      credit: 0,
      balanceDebt: 0,
      balanceCredit: 0,
    };
    if (this.customerForm) {
      this.customerForm.resetForm();
    }
  }
  // Müşteri verilerini çekmek için servis çağrısı
  getCustomers() {
    console.log('GetCustomersAll service');
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data; // Müşteri listesine atıyoruz
        this.filterCustomers(); // Apply initial filtering (which will show all customers)
        this.totalItems = this.customers.length; // Toplam öğe sayısını güncelle
        console.log(data);

        console.log('Müşteri verileri alındı:', this.customers);
      },
      (error) => {
        console.error('Müşteri verileri alınırken hata:', error);
      }
    );
  }

  onItemsPerPageChange(items: number): void {
    this.itemsPerPage = items; // Kullanıcının seçtiği öğe sayısı
    this.p = 1; // Sayfa numarasını sıfırlıyoruz
  }

  onPageChange(page: number) {
    this.p = page;
  }

  filterCustomers() {
    console.log('Filtering with:', this.filterAuthorized, this.filterCity); // Debugging için güncellendi

    this.filteredCustomers = this.customers.filter((customer) => {
      const companyMatch = customer.company
        ? customer.company
            .toLocaleLowerCase('tr')
            .includes(this.filterTitle.toLocaleLowerCase('tr'))
        : true;

      const authorizedMatch =
        this.filterAuthorized.trim() === '' || // Eğer yetkili filtre boşsa tüm sonuçlar gelir
        (customer.firstName &&
          customer.firstName
            .toLocaleLowerCase('tr')
            .includes(this.filterAuthorized.toLocaleLowerCase('tr'))) ||
        (customer.lastName &&
          customer.lastName
            .toLocaleLowerCase('tr')
            .includes(this.filterAuthorized.toLocaleLowerCase('tr')));

      const cityMatch = customer.city
        ? customer.city
            .toLocaleLowerCase('tr')
            .includes(this.filterCity.toLocaleLowerCase('tr'))
        : true;

      return companyMatch && authorizedMatch && cityMatch;
    });

    this.totalItems = this.filteredCustomers.length;
    this.p = 1; // Filtreleme yapıldığında ilk sayfaya dön
  }
  // Müşteri detaylarını gösteren modal'ı açma fonksiyonu
  showCustomerDetails(customer: CustomerDto): void {
    this.selectedCustomer = customer; // **SEÇİLEN MÜŞTERİYİ ATAMA**: Tıklanan müşteri bilgilerini seçiyoruz
    this.modalService.open(this.customerDetailsModal, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      keyboard: false,
    }); // Modal'ı açıyoruz
  }
  // Müşteri güncelleme işlemi
  async updateCustomer(): Promise<void> {
    if (this.selectedCustomer) {
      try {
        const response = await firstValueFrom(
          this.customerService.updateCustomer(
            this.selectedCustomer.id,
            this.selectedCustomer
          )
        );
        this.toastr.success('Müşteri başarıyla güncellendi!', 'Başarılı');
        console.log('Güncelleme başarılı:', response);
        await this.getCustomers();
        this.modalService.dismissAll();
      } catch (error) {
        this.toastr.error('Müşteri güncellenirken hata oluştu!', 'Başarılı');
        console.error('Müşteri güncellenirken hata oluştu:', error);
      }
    }
  }

  // Müşteri düzenleme modal'ını açma fonksiyonu
  showEditCustomerModal(customer: CustomerDto): void {
    this.selectedCustomer = { ...customer }; // Seçilen müşteriyi klonluyoruz
    this.modalService.open(this.editCustomerModal, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      keyboard: false,
    }); // Modal'ı açıyoruz
  }
  // Silme onayı modalını açma
  openDeleteConfirmationModal(content: any, customer: CustomerDto): void {
    this.selectedCustomer = customer; // Silmek istediğimiz müşteriyi seçiyoruz
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      centered: true, // Modal'ı ekranın ortasında göstermek için
      keyboard: false,
    });
  }
  // Silme işlemini gerçekleştirme
  confirmDelete(modal: any): void {
    if (this.selectedCustomer) {
      this.customerService.deleteCustomer(this.selectedCustomer.id).subscribe(
        (response) => {
          this.toastr.success('Müşteri başarıyla silindi.', 'Başarılı');
          this.getCustomers(); // Müşteri listesini yeniden alıyoruz
          modal.close(); // Modal'ı kapatıyoruz
        },
        (error) => {
          this.toastr.error('Müşteri silinirken bir hata oluştu.', 'Hata');
          console.error('Silme işlemi sırasında hata oluştu', error);
        }
      );
    }
  }
}
