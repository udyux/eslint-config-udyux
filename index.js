const rules = require('./rules')

module.exports = {
  env: { browser: true },
  extends: ['eslint:recommended', 'standard', 'esnext/style-guide'],
  settings: { 'import/ignore': ['\.s?css$'] },
  rules
}
