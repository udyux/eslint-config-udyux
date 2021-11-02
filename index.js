const rules = require('./rules')

module.exports = {
  env: { browser: true, node: true },
  plugins: ['babel'],
  extends: ['eslint:recommended', 'standard'],
  settings: { 'import/ignore': ['\\.s?css$'] },
  rules
}
