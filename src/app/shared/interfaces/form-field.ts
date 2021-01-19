export interface IFormField {
  id: string;
  label?: string;
  class?: string;
  style?: object;
  group?: {
    index: number;
    type: string; // how many cols or special style
  };
  value: any;
  type: string;
  validationRules: any[];
}
