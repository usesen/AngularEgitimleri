import { Routes, CanActivateFn,Router } from '@angular/router';


import { NewCustomerCardComponent } from './features/customer-management/components/new-customer-card/new-customer-card.component';
import { EditCustomerCardComponent } from './features/customer-management/components/edit-customer-card/edit-customer-card.component';
import { CancelCustomerCardComponent } from './features/customer-management/components/cancel-customer-card/cancel-customer-card.component';
import { CustomerReportsComponent } from './features/customer-management/components/customer-reports/customer-reports.component';
import { NewCreditMovementComponent } from './features/cari-hareket/components/new-credit-movement/new-credit-movement.component';
import { NewDebtMovementComponent } from './features/cari-hareket/components/new-debt-movement/new-debt-movement.component';
import { DebtCreditReportComponent } from './features/customerReports/debt-credit-report/debt-credit-report.component';
import { MovementReportComponent } from './features/customerReports/movement-report/movement-report.component';
import { CustomerStatementComponent } from './features/customerReports/customer-statement/customer-statement.component';
import { authGuard } from '../app/auth/auth.guard'; // Guard'ı import edin

export const routes: Routes = [
  {
    path: 'new-customer',
    component: NewCustomerCardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'edit-customer',
    component: EditCustomerCardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cancel-customer',
    component: CancelCustomerCardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'customer-reports',
    component: CustomerReportsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'new-debt-movement',
    component: NewDebtMovementComponent,
    canActivate: [authGuard]
  },
  {
    path: 'new-credit-movement',
    component: NewCreditMovementComponent,
    canActivate: [authGuard]
  },
  {
    path: 'debt-credit-report',
    component: DebtCreditReportComponent,
    canActivate: [authGuard]
  },
  {
    path: 'movement-report',
    component: MovementReportComponent,
    canActivate: [authGuard]
  },
  {
    path: 'customer-statement',
    component: CustomerStatementComponent,
    canActivate: [authGuard]
  },
  { path: '', redirectTo: '/new-customer', pathMatch: 'full' }, // Varsayılan rota
];

