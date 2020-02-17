module.exports = {
  extends: ['./index.js', 'eslint:recommended', '@vue/prettier'],
  settings: {
    'import/parsers': { 'vue-eslint-parser': ['.vue'] },
    'import/resolver': { alias: { map: [['@', './src']], extensions: ['.js', '.json', '.vue'] } }
  },
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 20, multiline: { max: 1, allowFirstLine: false } }],
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
