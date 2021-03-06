/* eslint-disable no-magic-numbers */

// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended'
  ],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },

  plugins: [
    'babel'
  ],

  globals: {
    Set: true,
    Map: true,
    WeakSet: true,
    WeakMap: true,
    Symbol: true,
    Promise: true,
    Reflect: true,
    Uint8ClampedArray: true,
    module: true
  },
  overrides: [{
    files: ['*.test.js'],
    env: {jest: true},
    globals: {
      MouseEvent: true
    },
    rules: {
      'no-magic-numbers': 'off'
    }
  }, {
    files: ['scripts/*.js'],
    env: {node: true},
    globals: {
      require: true,
      module: true
    },
    rules: {
      'no-magic-numbers': 'off'
    }
  }, {
    files: ['jest.config.js'],
    env: {node: true},
    globals: {
      require: true,
      module: true
    },
    rules: {
      'no-magic-numbers': 'off'
    }
  }],
  rules: {
    complexity: ['error', 8],
    curly: ['error', 'all'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-invalid-this': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {
      enforceConst: true,
      ignore: [0, 1, -1, 2, 90, 180, 270, 360]
    }],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new': 'error',
    'no-new-wrappers': 'error',
    // "no-param-reassign": "error",
    'no-redeclare': 'error',
    'no-return-assign': ['error', 'always'],
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': ['error', {allowTaggedTemplates: true}],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'wrap-iife': ['error', 'inside'],
    yoda: 'error',

    'init-declarations': ['error', 'always'],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': ['error', {varsIgnorePattern: '_'}],
    'no-use-before-define': 'error',

    'callback-return': ['error', ['callback', 'cb', 'next']],
    'handle-callback-err': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',

    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {allowSingleLine: false}],
    camelcase: ['error'],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true
    }],
    'id-length': ['error', {
      min: 2, max: 40,
      properties: 'always',
      exceptions: ['x', 'y', 'z', '_', 'i', 'j', 'k', 'a', 'b', 'c', 'd']
    }],
    indent: ['error', 2, {
      MemberExpression: 1,
      SwitchCase: 1,
      FunctionDeclaration: {body: 1, parameters: 2},
      FunctionExpression: {body: 1, parameters: 2}
    }],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],

    'max-depth': ['error', 4],
    'max-len': ['error', 80, 4, {ignoreUrls: true}],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': ['error', 10, {ignoreTopLevelFunctions: false}],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 2}],
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {max: 2}],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    // can't use classes
    // "no-restricted-syntax": ["error", "FunctionExpression", "WithStatement"],
    'no-spaced-func': 'error',
    'no-trailing-spaces': ['error', {skipBlankLines: true}],
    'no-underscore-dangle': ['error'],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    // conflicts with ()=> ({...\n...})
    // "object-curly-newline": ["error", {"multiline": true}],

    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    // "operator-linebreak": ["error", "none"],
    'quote-props': ['error', 'as-needed', {numbers: true}],
    quotes: ['error',
      'single', {
        avoidEscape: true,
        // avoidEscape thinks `foo "bar" 'spam'` is an error
        allowTemplateLiterals: true
      }
    ],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'sort-vars': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never'
    }],
    'space-in-parens': ['error', 'never'],
    // "space-infix-ops": "error",
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'wrap-regex': 'error',

    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {before: false, after: true}],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {before: false, after: true}],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: false
    }],
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'yield-star-spacing': ['error', {before: true, after: true}]
  }
};
