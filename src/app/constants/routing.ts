export const ROUTING_MAP = Object.freeze({
  home: {
    root: '',
  },
  auth: {
    root: 'auth',
    children: {
      login: 'login',
    },
  },
});
