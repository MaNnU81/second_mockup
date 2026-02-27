import { Validators, ValidatorFn } from "@angular/forms";




export type CountryCode = 'IT' | 'PT' | 'GR' | 'FR' | 'ES';  

// Default payment day and aging by country, used when creating a new quotation request

export const DEFAULT_BY_COUNTRY: Record<CountryCode, { paymentDay: number; aging: number } | null> = {
    IT: { paymentDay: 15, aging: 12 },
    PT: { paymentDay: 12, aging: 24 },
    GR: null,
    FR: null,
    ES: { paymentDay: 20, aging: 30 },
};


export type FieldType = 'dropdown' | 'multiselect' | 'dayOfMonth' | 'number';
export type ColSpan = 1 | 2 | 3 | 4;

export interface OptionItem<T = any> { text: string; value: T; }

export interface FieldConfig<TValue = any> {
    key: string;
    label: string;
    type: FieldType;
    colSpan: ColSpan;
    defaultValue: TValue;
    options?: readonly OptionItem[];  //un errore mi obbliga a metterlo readonly
    validators?: readonly ValidatorFn[];
}

export function buildProductDataPanel(selectedCountry: CountryCode | null) {
const defaults = selectedCountry ? DEFAULT_BY_COUNTRY[selectedCountry] : null;

return {
    title: 'Product Data',
    fields: [
        {
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
        },
        {
            key: 'factoringProducts',
            label: 'Factoring products',
            type: 'multiselect',
            colSpan: 1,
            defaultValue: [] as string[],
            validators: [Validators.required],
            options: [
                { text: 'Product A', value: 'productA' },
                { text: 'Product B', value: 'productB' },
                { text: 'Product C', value: 'productC' },
            ],
        },
        {
            key: 'paymentDay',
            label: 'Payment day',
            type: 'dayOfMonth',
            colSpan: 1,
            defaultValue: defaults?.paymentDay ?? null,
            validators: [Validators.required, Validators.min(1), Validators.max(31)],
        },
        {
            key: 'aging',
            label: 'Aging',
            type: 'number',
            colSpan: 1,
            defaultValue: defaults?.aging ?? null,
            validators: [Validators.required, Validators.min(1)],
        },
    ],
}as const;
}