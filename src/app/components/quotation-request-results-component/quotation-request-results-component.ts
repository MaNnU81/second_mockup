import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStateChangeEvent, KENDO_GRID } from '@progress/kendo-angular-grid';
import { KENDO_BUTTONS, ChipComponent } from '@progress/kendo-angular-buttons';



import { DataResult, SortDescriptor, State } from '@progress/kendo-data-query';



@Component({
  selector: 'app-quotation-request-results-component',
  imports: [KENDO_GRID, CommonModule, ChipComponent],
  templateUrl: './quotation-request-results-component.html',
  styleUrl: './quotation-request-results-component.scss',
})
export class QuotationRequestResultsComponent {

  @Input({ required: true }) data!: DataResult;
  @Input({ required: true }) state!: State;
  @Output() stateChange = new EventEmitter<DataStateChangeEvent>();

  public getStatusColor(status: string): 'success' | 'warning' | 'error'  {
    switch (status) {
      case 'approved':
        return 'success';
      case 'for approval':
        return 'warning';
      default:
        return 'error';
    }
  }
}
