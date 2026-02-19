import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationSearchComponent } from './quotation-search-component';

describe('QuotationSearchComponent', () => {
  let component: QuotationSearchComponent;
  let fixture: ComponentFixture<QuotationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
