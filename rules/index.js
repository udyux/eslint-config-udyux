const importRules = require('./import')

module.exports = {
  'array-bracket-newline': ['warn', { multiline: true }],
  'array-bracket-spacing': ['warn', 'never'],
  'array-callback-return': 'error',
  'array-element-newline': ['warn', { multiline: true }],
  'arrow-body-style': ['error', 'as-needed'],
  'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
  'babel/generator-star-spacing': 'off',
  'block-scoped-var': 'error',
  'block-spacing': 'warn',
  'callback-return': 'error',
  camelcase: ['warn', { properties: 'never' }],
  'comma-dangle': ['error', 'never'],
  'comma-spacing': ['warn', { after: true, before: false }],
  'comma-style': 'error',
  'computed-property-spacing': ['warn', 'never'],
  'consistent-this': ['error', 'self'],
  curly: ['error', 'multi-line'],
  'default-case': 'error',
  'dot-location': ['warn', 'property'],
  'dot-notation': 'warn',
  'eol-last': ['error', 'always'],
  eqeqeq: 'warn',
  'for-direction': 'off',
  'function-paren-newline': ['error', 'multiline'],
  'generator-star-spacing': 'off',
  'global-require': 'error',
  'handle-callback-err': 'off',
  indent: ['error', 2],
  'linebreak-style': 'off',
  'max-len': ['warn', 120],
  'multiline-ternary': ['warn', 'always-multiline'],
  'new-cap': 'off',
  'newline-per-chained-call': 'warn',
  'no-alert': 'error',
  'no-array-constructor': 'off',
  'no-cond-assign': 'error',
  'no-console': 'warn',
  'no-debugger': 'error',
  'no-constant-condition': 'error',
  'no-control-regex': 'off',
  'no-duplicate-imports': 'error',
  'no-else-return': 'warn',
  'no-eval': 'error',
  'no-extra-bind': 'warn',
  'no-extra-boolean-cast': 'off',
  'no-extra-parens': 'error',
  'no-fallthrough': 'off',
  'no-global-assign': 'warn',
  'no-implicit-coercion': ['warn', { allow: ['!!', '~'] }],
  'no-implicit-globals': 'error',
  'no-inner-declarations': 'off',
  'no-irregular-whitespace': 'warn',
  'no-label-var': 'off',
  'no-labels': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'warn',
  'no-mixed-operators': 'off',
  'no-mixed-requires': 'error',
  'no-mixed-spaces-and-tabs': 'warn',
  'no-multi-assign': 'error',
  'no-multi-spaces': 'warn',
  'no-multi-str': 'off',
  'no-multiple-empty-lines': ['warn', { max: 1 }],
  'no-negated-in-lhs': 'off',
  'no-nested-ternary': 'error',
  'no-new-object': 'off',
  'no-obj-calls': 'off',
  'no-regex-spaces': 'off',
  'no-return-assign': 'error',
  'no-return-await': 'warn',
  'no-script-url': 'error',
  'no-shadow': 'error',
  'no-tabs': 'warn',
  'no-trailing-spaces': 'warn',
  'no-undef-init': 'off',
  'no-unexpected-multiline': 'warn',
  'no-unneeded-ternary': 'error',
  'no-unreachable': 'warn',
  'no-unused-expressions': ['error', { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true }],
  'no-unused-labels': 'off',
  'no-unused-vars': ['error', { args: 'after-used', caughtErrors: 'none', ignoreRestSiblings: true, vars: 'all' }],
  'no-use-before-define': ['error', { classes: false, functions: false, variables: false }],
  'no-useless-call': 'warn',
  'no-useless-concat': 'warn',
  'no-useless-escape': 'warn',
  'no-var': 'error',
  'no-whitespace-before-property': 'warn',
  'nonblock-statement-body-position': ['warn', 'beside'],
  'object-curly-newline': ['warn', { multiline: true }],
  'object-curly-spacing': ['warn', 'always'],
  'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
  'object-shorthand': 'error',
  'one-var': 'off',
  'one-var-declaration-per-line': 'off',
  'operator-linebreak': ['warn', 'before'],
  'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
  'prefer-const': 'error',
  'prefer-destructuring': 'warn',
  'prefer-rest-params': 'error',
  'prefer-template': 'error',
  'promise/param-names': 'off',
  'quote-props': ['warn', 'as-needed'],
  quotes: ['warn', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
  'require-atomic-updates': 'error',
  'require-await': 'error',
  'require-yield': 'off',
  'rest-spread-spacing': ['warn', 'never'],
  'semi-spacing': 'off',
  'sort-imports': 'off',
  'sort-keys': 'off',
  'space-before-blocks': ['warn', 'always'],
  'space-before-function-paren': ['error', { anonymous: 'never', asyncArrow: 'always', named: 'never' }],
  'space-in-parens': ['warn', 'never'],
  'space-infix-ops': 'warn',
  'space-unary-ops': ['warn', { nonwords: false, words: true }],
  'spaced-comment': [
    'warn',
    'always',
    {
      block: { balanced: true, exceptions: ['*'], markers: ['*package', '!', ',', ':', '::', 'flow-include'] },
      line: { markers: ['*package', '!', '/', ',', '='] }
    }
  ],
  'standard/array-bracket-even-spacing': 'off',
  'standard/computed-property-even-spacing': 'off',
  'standard/no-callback-literal': 'off',
  'standard/object-curly-even-spacing': 'off',
  'switch-colon-spacing': ['warn', { after: true, before: false }],
  'template-curly-spacing': ['warn', 'never'],
  'template-tag-spacing': ['warn', 'always'],
  'unicode-bom': 'off',
  'valid-jsdoc': 'off',
  'valid-typeof': ['error'],
  'wrap-iife': 'error',
  'yield-star-spacing': ['warn', 'both'],
  yoda: 'error',
  ...importRules
}
