import { IFormField } from '@/shared/interfaces/form-field';

export interface ILoginConfig {
  fields: {
    [key: string]: IFormField;
  };
  [key: string]: any;
}

export interface ILoginRequest {
  phoneNumber: string;
  password: string;
}
