import { IFormField } from '@/shared/interfaces/form-field';

export interface ILoginConfig {
  fields: IFormField[];
  [key: string]: any;
}
