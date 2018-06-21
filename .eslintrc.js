module.exports = {
  env: {
    browser: true,
    jquery: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  rules: {
    quotes: ['error', 'single']
  },
  globals: {}
};
