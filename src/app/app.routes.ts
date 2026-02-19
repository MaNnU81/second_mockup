import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout-component/layout-component';
import { QuotationSearchComponent } from './components/quotation-search-component/quotation-search-component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'quotation_search' },
      { path: 'quotation_search', component: QuotationSearchComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];