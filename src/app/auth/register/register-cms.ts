export const LOGIN_CMS_CONFIG = Object.freeze({
  submitLabel: 'Đăng ký',
  fields: [
    {
      label: 'First Name',
      id: 'firstName',
      value: '',
      text: 'text',
      validationRules: [],
    },
    {
      label: 'Last Name',
      id: 'lastName',
      value: '',
      text: 'text',
      validationRules: [],
    },
    {
      label: 'Address',
      id: 'address',
      value: '',
      text: 'text',
      validationRules: [],
    },
    {
      label: 'Email Address',
      id: 'email',
      value: '',
      text: 'text',
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
      text: 'text',
      validationRules: [
        ['required', 'Password is required'],
        ['minLength', 'Password must be has length than 6', 6],
      ],
    },
  ],
});
