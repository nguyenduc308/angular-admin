import { ILoginConfig } from "./login.interface";

export const LOGIN_CMS_CONFIG: ILoginConfig = {
  submitLabel: 'Đăng nhập',
  fields: [
    {
      label: 'Phone number',
      id: 'phoneNumber',
      value: '',
      type: 'text',
      validationRules: [
        ['required', 'Phone number is required'],
        ['minLength', 'Phone number invalid', 10],
      ],
    },
    {
      label: 'Password',
      id: 'password',
      value: '',
      type: 'text',
      validationRules: [
        ['required', 'Password is required'],
        ['minLength', 'Password must be has length than 6', 6],
      ],
    },
  ],
};
