import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { RequestsGrid } from '../requests-grid/requests-grid';
import { MockRequest, RequestStatus } from '../../models/mock-request';
import { INPUT_MOCK_REQUESTS } from '../../mock_dati/mock_input';
import { process, State, DataResult, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-quotation-search-component',
  imports: [
    ReactiveFormsModule,
    KENDO_LAYOUT,
    KENDO_LABELS,
    KENDO_INPUTS,
    KENDO_BUTTONS,
    DateInputsModule,
    RequestsGrid,
  ],
  templateUrl: './quotation-search-component.html',
  styleUrl: './quotation-search-component.scss',
})
export class QuotationSearchComponent {
  public searchPanelExpanded = false;
  public allRequests: MockRequest[] = INPUT_MOCK_REQUESTS;
  public state: State = {
    skip: 0,
    take: 5,
    sort: [],
    filter: { logic: 'and', filters: [] },
  };

  public gridData: DataResult = process(this.allRequests, this.state);

  public searchForm = new FormGroup({
    dateRequest: new FormControl<Date | null>(null),
    idRequest: new FormControl<number | null>(null),
    idPortfolio: new FormControl<string>(''),
    client: new FormControl<string>(''),
    debtor: new FormControl<string>(''),
    status: new FormControl<string | null>(null),
  });

  private startOfDay(d: Date): Date {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  public onClear(): void {
    this.searchForm.reset({
      dateRequest: null,
      idRequest: null,
      idPortfolio: '',
      client: '',
      debtor: '',
      status: null,
    });

    this.state = {
      ...this.state,
      skip: 0,
      filter: { logic: 'and', filters: [] },
    };

    this.gridData = process(this.allRequests, this.state);
  }

  public onSearch(): void {
    const v = this.searchForm.value;

    const filters: CompositeFilterDescriptor['filters'] = [];

    if (v.dateRequest) {
      filters.push({
        field: 'dateRequest',
        operator: 'eq',
        value: this.startOfDay(v.dateRequest),
      });
    }

    if (v.idRequest != null) {
      filters.push({ field: 'idRequest', operator: 'eq', value: v.idRequest });
    }

    if (v.idPortfolio?.trim()) {
      filters.push({
        field: 'idPortfolio',
        operator: 'contains',
        value: v.idPortfolio.trim(),
        ignoreCase: true,
      });
    }

    if (v.client?.trim()) {
      filters.push({
        field: 'client',
        operator: 'contains',
        value: v.client.trim(),
        ignoreCase: true,
      });
    }

    if (v.debtor?.trim()) {
      filters.push({
        field: 'debtor',
        operator: 'contains',
        value: v.debtor.trim(),
        ignoreCase: true,
      });
    }

    if (v.status) {
      filters.push({ field: 'status', operator: 'eq', value: v.status });
    }

    this.state = {
      ...this.state,
      skip: 0,
      filter: { logic: 'and', filters },
    };

    this.gridData = process(this.allRequests, this.state);
  }

  public onStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.allRequests, this.state);
  }
}
