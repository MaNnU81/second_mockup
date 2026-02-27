import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { KENDO_LAYOUT } from "@progress/kendo-angular-layout";
import { buildProductDataPanel, CountryCode, DEFAULT_BY_COUNTRY, FieldConfig, OptionItem } from './new-quotation-component-config';
import { KENDO_DROPDOWNS } from "@progress/kendo-angular-dropdowns";
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { CommonModule } from '@angular/common';



type AnyformGroup = FormGroup<Record<string,  FormControl<any>>>;


@Component({
  selector: 'app-new-quotation-component',
  imports: [KENDO_LAYOUT , KENDO_DROPDOWNS, KENDO_LABELS, KENDO_INPUTS, KENDO_BUTTONS, ReactiveFormsModule, CommonModule],
  templateUrl: './new-quotation-component.html',
  styleUrl: './new-quotation-component.scss',
})
export class NewQuotationComponent {

  panel = buildProductDataPanel(null);  //fa partire form da blank, senza country selezionato
  form: AnyformGroup = this.buildForm(this.panel.fields);

  constructor() {
    this.form.get('country')!.valueChanges.subscribe((country: CountryCode | null) => {
      const defaults = country ? DEFAULT_BY_COUNTRY[country] : null;

      this.form.patchValue({
        paymentDay: defaults?.paymentDay ?? null,
        aging: defaults?.aging ?? null,
      });
    
   }); 
  }

  private buildForm(fields: readonly FieldConfig[]): AnyformGroup {
    const controls: Record<string, FormControl<any>> = {};
    for (const field of fields) {
      controls[field.key] = new FormControl(field.defaultValue,  { validators: field.validators ? [...field.validators] : [] });
    }
        return new FormGroup(controls);
  }

  private optionsCache = new Map<string, OptionItem[]>();
  public optionsFor(field: FieldConfig): OptionItem[] {
    const cached = this.optionsCache.get(field.key);
    if (cached) return cached;

    const source =
      field.type === 'dayOfMonth'
        ? this.dayOptions
        : (field.options ? [...field.options] : []);

    
    this.optionsCache.set(field.key, source);
    return source;
  }

  public dayOptions: OptionItem<number>[] = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    return { text: String(day), value: day };
  });
  ;


  public onSubmit(): void {
    console.log('FORM RAW VALUE:', this.form.getRawValue());
    console.log('FORM VALID:', this.form.valid);
  }

  public onReset(): void {
  this.form.reset();
  
}

}
