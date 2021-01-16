import { IRegisterConfig } from "./register.interface";

export const REGISTER_CMS_CONFIG: IRegisterConfig = {
  submitLabel: 'Đăng ký',
  fields: {
    firstName: {
      label: 'First Name',
      id: 'firstName',
      value: '',
      type: 'text',
      validationRules: [],
    },
    lastName: {
      label: 'Last Name',
      id: 'lastName',
      value: '',
      type: 'text',
      validationRules: [],
    },
    address: {
      label: 'Address',
      id: 'address',
      value: '',
      type: 'text',
      validationRules: [],
    },
    email: {
      label: 'Email Address',
      id: 'email',
      value: '',
      type: 'text',
      validationRules: [
        ['required', 'Email is required']
      ],
    },
    phoneNumber: {
      label: 'Phone number',
      id: 'phoneNumber',
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
    confirmPassword: {
      label: 'Confirm Password',
      id: 'confirmPassword',
      value: '',
      type: 'text',
      validationRules: [
        ['required', 'Password is required'],
      ],
    },
  },
}
