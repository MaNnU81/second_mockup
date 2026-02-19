import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsGrid } from './requests-grid';

describe('RequestsGrid', () => {
  let component: RequestsGrid;
  let fixture: ComponentFixture<RequestsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
