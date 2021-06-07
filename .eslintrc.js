module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'max-len': ['error', { code: 200 }],
  },
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaVersion": 6,
  },
  globals: {
    _sdi: 'writable',
    TcsJSBridge: 'readonly',
    define: 'readonly',
  },
};
