import { ILoginConfig } from './login.interface';

export const LOGIN_CMS_CONFIG: ILoginConfig = {
  submitLabel: 'Đăng nhập',
  fields: {
    phone: {
      label: 'Phone number',
      id: 'phone',
      value: '',
      type: 'text',
      validationRules: [
        ['required', 'Phone number is required'],
        ['minLength', 'Phone number invalid', 10],
      ],
    },
    password: {
      label: 'Password',
      id: 'password',
      value: '',
      type: 'text',
      validationRules: [
        ['required', 'Password is required'],
        ['minLength', 'Password must be has length than 6', 6],
      ],
    },
  },
};
