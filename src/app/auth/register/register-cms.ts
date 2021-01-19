import { IRegisterConfig } from './register.interface';

export const REGISTER_CMS_CONFIG: IRegisterConfig = {
  submitLabel: 'Đăng ký',
  fields: {
    firstName: {
      label: 'First Name',
      id: 'firstName',
      value: '',
      type: 'text',
      group: {
        index: 1,
        type: 'col-2',
      },
      validationRules: [],
    },
    lastName: {
      label: 'Last Name',
      id: 'lastName',
      value: '',
      type: 'text',
      group: {
        index: 1,
        type: 'col-2',
      },
      validationRules: [],
    },
    address: {
      label: 'Address',
      id: 'address',
      value: '',
      type: 'text',
      group: {
        index: 2,
        type: 'col',
      },
      validationRules: [],
    },
    email: {
      label: 'Email Address',
      id: 'email',
      value: '',
      type: 'text',
      group: {
        index: 3,
        type: 'col',
      },
      validationRules: [['required', 'Email is required']],
    },
    phone: {
      label: 'Phone number',
      id: 'phone',
      value: '',
      type: 'text',
      group: {
        index: 4,
        type: 'col',
      },
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
      group: {
        index: 5,
        type: 'col',
      },
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
      group: {
        index: 6,
        type: 'col',
      },
      validationRules: [['required', 'Password is required']],
    },
  },
};
