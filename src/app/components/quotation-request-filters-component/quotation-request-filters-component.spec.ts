import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationRequestFiltersComponent } from './quotation-request-filters-component';

describe('QuotationSearchComponent', () => {
  let component: QuotationRequestFiltersComponent;
  let fixture: ComponentFixture<QuotationRequestFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationRequestFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationRequestFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
