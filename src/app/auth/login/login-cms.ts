export const LOGIN_CMS_CONFIG = Object.freeze({
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
      text: 'text',
      validationRules: [
        ['required', 'Password is required'],
        ['minLength', 'Password must be has length than 6', 6],
      ],
    },
  ],
});
