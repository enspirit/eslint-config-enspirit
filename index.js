const consoleLogRule = process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : ['warn'];

module.exports = {
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "ecmaFeatures": {}
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'semi': [2, 'always'],
    'no-console': consoleLogRule,
    'no-debugger': 'error',
    'no-unused-expressions': ['error'],
    'no-unused-vars': ['warn'],
    'chai-friendly/no-unused-expressions': 2,
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-before-blocks': ['error', 'always'],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'no-multi-spaces': ['error'],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'space-in-parens': ['error', 'never'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-const-assign': ['error'],
    'no-undef': ['error'],
    'no-only-tests/no-only-tests': process.env.NODE_ENV === 'test' ? 'error' : 'warn',
    'comma-dangle': ['error', 'never']
  },
  env: {
    mocha: true,
    node: true,
    es6: true
  },
  plugins: [
    'chai-friendly',
    'no-only-tests'
  ]
}
