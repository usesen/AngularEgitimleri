export interface CustomerDto {
  id: number;
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
  debt: number; // Decimal değer olabilir
  credit: number; // Decimal değer olabilir
  balanceDebt: number; // Decimal değer olabilir
  balanceCredit: number; // Decimal değer olabilir
  // Gerekli diğer özellikleri buraya ekleyebilirsin
}
