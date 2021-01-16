import { IFormField } from '@/shared/interfaces/form-field';

export interface IRegisterConfig {
  fields: IFormField[];
  [key: string]: any;
}
