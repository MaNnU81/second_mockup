import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationRequestResultsComponent } from './quotation-request-results-component';

describe('RequestsGrid', () => {
  let component: QuotationRequestResultsComponent;
  let fixture: ComponentFixture<QuotationRequestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationRequestResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationRequestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
