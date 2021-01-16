import { IRegisterConfig } from "./register.interface";

export const REGISTER_CMS_CONFIG: IRegisterConfig = {
  submitLabel: 'Đăng ký',
  fields: [
    {
      label: 'First Name',
      id: 'firstName',
      value: '',
      type: 'text',
      validationRules: [],
    },
    {
      label: 'Last Name',
      id: 'lastName',
      value: '',
      type: 'text',
      validationRules: [],
    },
    {
      label: 'Address',
      id: 'address',
      value: '',
      type: 'text',
      validationRules: [],
    },
    {
      label: 'Email Address',
      id: 'email',
      value: '',
      type: 'text',
      validationRules: [],
    },
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
    {
      label: 'Confirm Password',
      id: 'confirmPassword',
      value: '',
      type: 'text',
      validationRules: [
        ['required', 'Password is required'],
        ['minLength', 'Password must be has length than 6', 6],
      ],
    },
  ],
}
