import { Routes } from '@angular/router';
import { QuotationRequestShellComponent } from './components/quotation-request-shell-component/quotation-request-shell-component';
import { LayoutComponent } from './components/layout-component/layout-component';
import { UploadComponent } from './components/upload-component/upload-component';
import { NewQuotationComponent } from './components/new-quotation-component/new-quotation-component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'requests', component: QuotationRequestShellComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'newquotation', component: NewQuotationComponent },
      
      { path: '', pathMatch: 'full', redirectTo: 'requests' },
    ],
  },
  { path: '**', redirectTo: '' },
];