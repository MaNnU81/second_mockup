import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { KENDO_LAYOUT } from "@progress/kendo-angular-layout";
import { buildProductDataPanel, buildQuotationPanels, CountryCode, DEFAULT_BY_COUNTRY, FieldConfig, OptionItem, PanelConfig } from './new-quotation-component-config';
import { KENDO_DROPDOWNS } from "@progress/kendo-angular-dropdowns";
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';



type AnyformGroup = FormGroup<Record<string,  FormControl<any>>>;


@Component({
  selector: 'app-new-quotation-component',
  imports: [KENDO_LAYOUT , KENDO_DROPDOWNS, KENDO_LABELS, KENDO_INPUTS, KENDO_BUTTONS, ReactiveFormsModule, CommonModule],
  templateUrl: './new-quotation-component.html',
  styleUrl: './new-quotation-component.scss',
})
export class NewQuotationComponent {
  panels = buildQuotationPanels(null);
  private allFields: readonly FieldConfig[] = this.panels.flatMap(panel => panel.rows.flatMap(row => row));

  
  public form: AnyformGroup = this.buildForm(this.allFields);
  
  public dayOptions: OptionItem<number>[] = Array.from({ length: 31 }, (_, i) => {
  const day = i + 1;
  return { text: String(day), value: day };
  });
  
  private optionsCache = new Map<string, OptionItem[]>();

  constructor() {
    this.registerCountryListener();
    this.applyFieldDependencies(this.allFields);
    this.registerBrokerRowGating();
  }

  private registerCountryListener(): void {
    this.form.get('country')!.valueChanges.subscribe((country: CountryCode | null) => {
      const defaults = country ? DEFAULT_BY_COUNTRY[country] : null;

      this.form.patchValue({
        paymentDay: defaults ?.paymentDay ?? null,
        aging: defaults ?.aging ?? null,
      });
    });
  }


  
  private buildForm(fields: readonly FieldConfig[]): AnyformGroup {
    const controls: Record<string, FormControl<any>> = {};

    for (const field of fields) {
        controls[field.key] = new FormControl(
          { value: field.defaultValue, disabled: field.disabled ?? false },
          { validators: field.validators ? [...field.validators] : [] }
        );
    }
    return new FormGroup(controls);
  }


  

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

  private applyFieldDependencies(fields: readonly FieldConfig[]): void {
    for (const field of fields) {
      if (field.type === 'spacer') continue;
      if (!field.dependency) continue;

      const target = this.form.get(field.key);
      const source = this.form.get(field.dependency.dependsOn);

      if (!target || !source) continue;

      const rule = field.dependency;

      const apply = (sourceValue: unknown) => {
        const shouldEnable = sourceValue === rule.enableWhenValue;

        if (shouldEnable) {
          target.enable({ emitEvent: false });
            if (rule.addValidatorsWhenEnabled) {
              target.addValidators([...rule.addValidatorsWhenEnabled]);
            }
        } else {
          target.disable({ emitEvent: false });
          target.clearValidators();
          target.setValue(rule.elseResetTo ?? null, { emitEvent: false });
        }
        target.updateValueAndValidity({ emitEvent: false });
      };

      
      apply(source.value);

      source.valueChanges.subscribe(apply);
    }
  }

      //// gestione cascata broker's panel
  private isFilled(value: unknown): boolean {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    return true; 
  }

  private enableKeys(keys: string[]): void {
  for (const k of keys) this.form.get(k)?.enable({ emitEvent: false });
}

private disableAndClearKeys(keys: string[]): void {
  for (const k of keys) {
    const c = this.form.get(k);
    if (!c) continue;
    c.disable({ emitEvent: false });
    c.setValue(null, { emitEvent: false }); 
  }
}

private registerBrokerRowGating(): void {
  const row1 = ['brokerName1', 'brokerCode1', 'commission1'];
  const row2 = ['brokerName2', 'brokerCode2', 'commission2'];
  const row3 = ['brokerName3', 'brokerCode3', 'commission3'];

  const checkRowFilled = (keys: string[]) =>
    keys.every(k => this.isFilled(this.form.get(k)?.value));

  const apply = () => {
    const r1Filled = checkRowFilled(row1);
    const r2Filled = checkRowFilled(row2);

    if (r1Filled) {
      this.enableKeys(row2);
    } else {
      this.disableAndClearKeys(row2);
      this.disableAndClearKeys(row3);
      return;
    }

    if (r2Filled) {
      this.enableKeys(row3);
    } else {
      this.disableAndClearKeys(row3);
    }
  };

  // stato iniziale + reazione ai cambi
  apply();
  this.form.valueChanges.subscribe(() => apply());
}



//buttons actions
  public onSubmit(): void {
    console.log('FORM RAW VALUE:', this.form.getRawValue());
    console.log('FORM VALID:', this.form.valid);
  }

  public onReset(): void {
  this.form.reset();
  this.optionsCache.clear();
}

}
