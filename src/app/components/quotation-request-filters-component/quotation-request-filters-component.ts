import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { RequestStatus } from '../../models/mock-request';
import { RequestSearchParams } from '../../models/request-search-params';

@Component({
  selector: 'app-quotation-request-filters-component',
  imports: [
    ReactiveFormsModule,
    KENDO_LAYOUT,
    KENDO_LABELS,
    KENDO_INPUTS,
    KENDO_BUTTONS,
    DateInputsModule,
    
  ],
  templateUrl: './quotation-request-filters-component.html',
  styleUrl: './quotation-request-filters-component.scss',
})
export class QuotationRequestFiltersComponent {
  public searchPanelExpanded = false;

  @Output() search = new EventEmitter<RequestSearchParams>();
  @Output() clear = new EventEmitter<void>();




  public searchForm = new FormGroup({
    dateRequest: new FormControl<Date | null>(null),
    idRequest: new FormControl<number | null>(null),
    idPortfolio: new FormControl<string>(''),
    client: new FormControl<string>(''),
    debtor: new FormControl<string>(''),
    status: new FormControl<RequestStatus | null>(null),
  });



   public onSearch(): void {
    this.search.emit(this.searchForm.value as RequestSearchParams);
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
    this.clear.emit();
  }





}
