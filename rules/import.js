const unassignedImports = [
  'babel-polyfill',
  'firebase/*',
  '**/startup',
  '**/*.polyfill',
  '**/*.loader',
  '**/*.css',
  '**/*.scss'
]

module.exports = {
  'import/default': 'error',
  'import/extensions': ['error', 'always', { js: 'never' }],
  'import/named': 'error',
  'import/namespace': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'warn',
  'import/no-cycle': 'error',
  'import/no-deprecated': 'warn',
  'import/no-dynamic-require': 'error',
  'import/no-extraneous-dependencies': 'warn',
  'import/no-mutable-exports': 'warn',
  'import/no-named-as-default': 'warn',
  'import/no-named-as-default-member': 'warn',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': ['error', { allow: unassignedImports }],
  'import/no-unresolved': 'error',
  'import/no-useless-path-segments': 'error',
  'import/order': 'warn'
}
