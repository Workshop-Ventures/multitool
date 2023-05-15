module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'arrow-body-style': ["error", "as-needed"],
    'indent': ['warn', 2, { SwitchCase: 1 }],
  },
  parserOptions: {
    "ecmaVersion": 2017,
    "sourceType": "module",
  },
};
