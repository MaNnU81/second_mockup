import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationRequestShellComponent } from './quotation-request-shell-component';

describe('HomeComponent', () => {
  let component: QuotationRequestShellComponent;
  let fixture: ComponentFixture<QuotationRequestShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationRequestShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationRequestShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
