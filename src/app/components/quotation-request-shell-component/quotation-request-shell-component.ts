import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { process, State, DataResult, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';


import { QuotationRequestFiltersComponent } from '../quotation-request-filters-component/quotation-request-filters-component';
import { QuotationRequestResultsComponent } from '../quotation-request-results-component/quotation-request-results-component';

import { DataService } from '../../services/data-service';
import { MockRequest } from '../../models/mock-request';
import { RequestSearchParams } from '../../models/request-search-params';



@Component({
  selector: 'app-quotation-request-shell-component',
  imports: [CommonModule, QuotationRequestFiltersComponent, QuotationRequestResultsComponent],
  templateUrl: './quotation-request-shell-component.html',
  styleUrl: './quotation-request-shell-component.scss',
})
export class QuotationRequestShellComponent {

  public allRequests: MockRequest[] = [];

  public state: State = {
    skip: 0,
    take: 5,
    sort: [{ field: 'dateRequest', dir: 'desc' }],
    filter: { logic: 'and', filters: [] },
  };

  public gridData: DataResult =  { data: [], total: 0 };

  constructor(private dataService: DataService) {
    this.dataService.getRequests().subscribe((requests) => {
      this.allRequests = requests;
      this.gridData = process(this.allRequests, this.state);
    });
  }

  private startOfDay(d: Date): Date {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

   public onSearch(params: RequestSearchParams): void {
    const filters: CompositeFilterDescriptor['filters'] = [];

    if (params.dateRequest) {
      filters.push({ field: 'dateRequest', operator: 'eq', value: this.startOfDay(params.dateRequest) });
    }
    if (params.idRequest != null) {
      filters.push({ field: 'idRequest', operator: 'eq', value: params.idRequest });
    }
    if (params.idPortfolio?.trim()) {
      filters.push({ field: 'idPortfolio', operator: 'contains', value: params.idPortfolio.trim(), ignoreCase: true });
    }
    if (params.client?.trim()) {
      filters.push({ field: 'client', operator: 'contains', value: params.client.trim(), ignoreCase: true });
    }
    if (params.debtor?.trim()) {
      filters.push({ field: 'debtor', operator: 'contains', value: params.debtor.trim(), ignoreCase: true });
    }
    if (params.status) {
      filters.push({ field: 'status', operator: 'eq', value: params.status });
    }

    this.state = {
      ...this.state,
      skip: 0,
      filter: { logic: 'and', filters },
    };

    this.gridData = process(this.allRequests, this.state);
  }

  public onClear(): void {
    this.state = { ...this.state, skip: 0, filter: { logic: 'and', filters: [] } };
    this.gridData = process(this.allRequests, this.state);
  }

  public onStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.allRequests, this.state);
  }


}
