import { IFormField } from '@/shared/interfaces/form-field';

export interface IRegisterConfig {
  fields: {
    [key: string]: IFormField;
  };
  [key: string]: any;
}
