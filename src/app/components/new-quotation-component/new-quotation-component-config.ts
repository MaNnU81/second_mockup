import { Validators, ValidatorFn } from '@angular/forms';

export type CountryCode = 'IT' | 'PT' | 'GR' | 'FR' | 'ES';

// Default payment day and aging by country, used when creating a new quotation request

export const DEFAULT_BY_COUNTRY: Record<CountryCode, { paymentDay: number; aging: number } | null> =
  {
    IT: { paymentDay: 15, aging: 12 },
    PT: { paymentDay: 12, aging: 24 },
    GR: null,
    FR: null,
    ES: { paymentDay: 20, aging: 30 },
  };

export type FieldType = 'dropdown' | 'multiselect' | 'dayOfMonth' | 'number' | 'text' | 'checkbox' | 'spacer';
export type ColSpan = 1 | 2 | 3 | 4;

export interface OptionItem<T = any> {
  text: string;
  value: T;
}

export interface FieldConfig<TValue = any> {
  key: string;
  label: string;
  type: FieldType;
  colSpan: ColSpan;
  defaultValue: TValue;
  options?: readonly OptionItem[]; //un errore mi obbliga a metterlo readonly
  validators?: readonly ValidatorFn[];
  disabled?: boolean;

  dependency?:  fieldDependencyRule;
}

export interface PanelConfig {
  id: string;
  title: string;
  rows: readonly (readonly FieldConfig[])[];
}

export interface fieldDependencyRule {
  dependsOn: string;
  enableWhenValue: unknown;
  elseResetTo?: unknown;
   addValidatorsWhenEnabled?: readonly ValidatorFn[];
} 


export function buildProductDataPanel(selectedCountry: CountryCode | null): PanelConfig {
  const defaults = selectedCountry ? DEFAULT_BY_COUNTRY[selectedCountry] : null;

  const country: FieldConfig<CountryCode | null> = {
    key: 'country',
    label: 'Country',
    type: 'dropdown',
    colSpan: 4,
    defaultValue: selectedCountry,
    validators: [Validators.required],
    options: [
      { text: 'Italy', value: 'IT' },
      { text: 'Portugal', value: 'PT' },
      { text: 'Greece', value: 'GR' },
      { text: 'France', value: 'FR' },
      { text: 'Spain', value: 'ES' },
    ],
  };

  const factoringProducts: FieldConfig<string[]> = {
    key: 'factoringProducts',
    label: 'Factoring Products',
    type: 'multiselect',
    colSpan: 1,
    defaultValue: [],
    options: [
      { text: 'Product A', value: 'productA' },
      { text: 'Product B', value: 'productB' },
      { text: 'Product C', value: 'productC' },
    ],
  };

  const paymentDay: FieldConfig<number | null> = {
    key: 'paymentDay',
    label: 'Payment Day',
    type: 'dayOfMonth',
    colSpan: 1,
    defaultValue: defaults?.paymentDay ?? null,
    validators: [Validators.min(1), Validators.max(31)],
  };

  const aging: FieldConfig<number | null> = {
    key: 'aging',
    label: 'Aging (months)',
    type: 'number',
    colSpan: 1,
    defaultValue: defaults?.aging ?? null,
    validators: [Validators.required, Validators.min(1)],
  };

  return {
    id: 'productData',
    title: 'Product Data',
    rows: [[country], [factoringProducts, paymentDay, aging]],
  };
}

export function buildClientAndDebtorPanel(selectedCountry: CountryCode | null): PanelConfig {
  const clientName: FieldConfig<string> = {
    key: 'clientName',
    label: 'Client Name',
    type: 'text',
    colSpan: 1,
    defaultValue: '',
    validators: [Validators.required],
  };

  const NDGOfTheClient: FieldConfig<string> = {
    key: 'NDGOfTheClient',
    label: 'NDG of the Client',
    type: 'text',
    colSpan: 1,
    defaultValue: '',
    validators: [Validators.required],
  };

  const contract: FieldConfig<string> = {
    key: 'contract',
    label: 'Contract',
    type: 'text',
    colSpan: 1,
    defaultValue: '',
    validators: [Validators.required],
  };

  const capitalReliefAvailable: FieldConfig<boolean> = {
    key: 'capitalReliefAvailable',
    label: 'Capital Relief Available',
    type: 'checkbox',
    colSpan: 1,
    defaultValue: false,
  };

  const typeOfLips: FieldConfig<string> = {
    key: 'typeOfLips',
    label: 'Type of LIPs', 
    type: 'dropdown',
    colSpan: 1,
    defaultValue: '',
    options: [
        { text: 'LIP Type A', value: 'lipTypeA' },
        { text: 'LIP Type B', value: 'lipTypeB' },
        { text: 'LIP Type C', value: 'lipTypeC' },
    ],
    };

    const notStandardLips: FieldConfig<string> = {
    key: 'notStandardLips',
    label: 'Not Standard LIPs', 
    type: 'dropdown',    
    colSpan: 1,
    defaultValue: '',
    options: [
        { text: 'Not Standard LIP ', value: 'notStandardLip' },
        { text: 'Standard LIP', value: 'standardLip' },
    ],
    };

    const lpis40Fee: FieldConfig<string> = {
    key: 'lpis40Fee',
    label: 'LIPs 40 Fee', 
    type: 'dropdown',    
    colSpan: 1,
    defaultValue: '',
    options: [
        { text: 'no fee', value: 'noFee' },
        { text: 'fee 40 €', value: 'standardFee' },
        { text: 'custom fee', value: 'customFee' },
    ],
    };

      const specifyAmount: FieldConfig<number | null> = {
    key: 'specifyAmount',
    label: 'Amount (only if customFee)', 
    type: 'number',
    colSpan: 1,
    defaultValue: null,
    disabled: true,

    dependency: {
      dependsOn: 'lpis40Fee',
      enableWhenValue: 'customFee',
      elseResetTo: null,
      addValidatorsWhenEnabled: [Validators.required, Validators.min(1)],
    }
    };

    const typeOfDebtor: FieldConfig<string> = {
    key: 'typeOfDebtor',
    label: 'Type of Debtor', 
    type: 'dropdown',    
    colSpan: 1,
    defaultValue: '',
    options: [
        { text: 'New Customer ', value: 'newCustomer' },
        { text: 'Returning Customer', value: 'returningCustomer' },
        { text: 'Current Customer', value: 'currentCustomer' },
    ],
    };

    const amountOfTheDeal: FieldConfig<string> = {
    key: 'amountOfTheDeal',
    label: 'Amount of the Deal', 
    type: 'dropdown',    
    colSpan: 1,
    defaultValue: '',
    options: [
        { text: 'full', value: 'fullAmount' },
        { text: 'partial amount ', value: 'partialAmount' },
        { text: 'no Amount', value: 'noAmount' },
    ],
    };



  return {
    id: 'clientAndDebtorData',
    title: 'Client and Debtor Data',
    rows: [
      [clientName, NDGOfTheClient, contract, capitalReliefAvailable],
      [typeOfLips, notStandardLips, lpis40Fee, spacer()],
      [specifyAmount, typeOfDebtor, amountOfTheDeal],
    ],
  };
  
}

export function buildBrokerPanel(selectedCountry: CountryCode | null): PanelConfig {
  const brokerName1: FieldConfig<string> = {
    key: 'brokerName1',
    label: 'Broker Name 1',
    type: 'text',
    colSpan: 1,
    defaultValue: '',
    validators: [Validators.required],
  }

  const brokerCode1: FieldConfig<string> = {
    key: 'brokerCode1',
    label: 'Broker Code 1',
    type: 'text',
    colSpan: 1,
    defaultValue: '',
    validators: [Validators.required],
  }

  const commission1: FieldConfig<number | null> = {
    key: 'commission1',
    label: 'Commission 1 (%)',
    type: 'number',
    colSpan: 1,
    defaultValue: null,
    validators: [Validators.required, Validators.min(0), Validators.max(100)],
  }
  
  // row 2 (disabled, NON required)
  const brokerName2: FieldConfig<string> = {
    key: 'brokerName2',
    label: 'Broker Name 2',
    type: 'text',
    colSpan: 1,
    defaultValue: '',
    disabled: true,
    // niente required
  };

  const brokerCode2: FieldConfig<string> = {
    key: 'brokerCode2',
    label: 'Broker Code 2',
    type: 'text',
    colSpan: 1,
    defaultValue: '',
    disabled: true,
  };

  const commission2: FieldConfig<number | null> = {
    key: 'commission2',
    label: 'Commission 2 (%)',
    type: 'number',
    colSpan: 1,
    defaultValue: null,
    disabled: true,
    validators: [Validators.min(0), Validators.max(100)], // non required
  };

  // row 3 (disabled, NON required)
  const brokerName3: FieldConfig<string> = {
    key: 'brokerName3',
    label: 'Broker Name 3',
    type: 'text',
    colSpan: 1,
    defaultValue: '',
    disabled: true,
  };

  const brokerCode3: FieldConfig<string> = {
    key: 'brokerCode3',
    label: 'Broker Code 3',
    type: 'text',
    colSpan: 1,
    defaultValue: '',
    disabled: true,
  };

  const commission3: FieldConfig<number | null> = {
    key: 'commission3',
    label: 'Commission 3 (%)',
    type: 'number',
    colSpan: 1,
    defaultValue: null,
    disabled: true,
    validators: [Validators.min(0), Validators.max(100)],
  };
  return {
    id: 'brokerData',
    title: 'Broker Data',
    rows: [[brokerName1, brokerCode1, commission1, spacer()],
           [brokerName2, brokerCode2, commission2, spacer()], 
           [brokerName3, brokerCode3, commission3, spacer()]],
  };
}

export function buildQuotationPanels(selectedCountry: CountryCode | null): readonly PanelConfig[] {
  return [
    buildProductDataPanel(selectedCountry),
    buildClientAndDebtorPanel(selectedCountry),
    buildBrokerPanel(selectedCountry),

    
  ] as const;
}


export function spacer(colSpan: ColSpan = 1): FieldConfig<null> {
  return {
    key: `__spacer_${Math.random().toString(36).substring(2, 9)}`,
    label: '',
    type: 'spacer',
    colSpan,
    defaultValue: null,
  };
}