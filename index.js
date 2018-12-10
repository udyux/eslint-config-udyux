const rules = require('./rules')

module.exports = {
  extends: ['eslint:recommended', 'standard', 'esnext/style-guide'],
  settings: { 'import/ignore': ['\.s?css$'] },
  rules
}
