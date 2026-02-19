import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStateChangeEvent, KENDO_GRID } from '@progress/kendo-angular-grid';
import { MockRequest } from '../../models/mock-request';


import { DataResult, State } from '@progress/kendo-data-query';



@Component({
  selector: 'app-requests-grid',
  imports: [KENDO_GRID, CommonModule],
  templateUrl: './requests-grid.html',
  styleUrl: './requests-grid.scss',
})
export class RequestsGrid {

  @Input({ required: true }) data!: DataResult;
  @Input({ required: true }) state!: State;
  @Output() stateChange = new EventEmitter<DataStateChangeEvent>();

}
