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
    'prefer-template': 1,
    'template-curly-spacing': ["error", "never"],
    'curly': 2,
    'prefer-arrow-callback': 1,
    'no-useless-escape': 1,
    'eqeqeq': 0,
    'no-autofix/eqeqeq': 1,
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-expressions': [
      2,
      {
        allowTernary: true,
      },
    ],
    'no-multi-spaces': [
      1,
      {
        exceptions: {
          'Property': true,
          'VariableDeclarator': true,
          'ImportDeclaration': true,
        },
      },
    ],
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': true,
      },
    ],
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
    'comma-dangle': ['error', 'always-multiline'],
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
