/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.base.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?',
          },
          Function: {
            message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?',
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?',
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-body-style': 'error',
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'error',
    'eol-last': 'error',
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        code: 140,
      },
    ],
    'new-parens': 'error',
    'no-array-constructor': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'error',
    'no-new-wrappers': 'error',
    'no-restricted-imports': ['error', 'rxjs/Rx'],
    'no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'quote-props': ['error', 'as-needed'],
    'require-await': 'off',
    'use-isnan': 'error',
    'valid-typeof': 'off',
  },
};
