module.exports = {
  extends: ['./index.js', 'eslint:recommended', '@vue/prettier'],
  settings: {
    'import/parsers': { 'vue-eslint-parser': ['.vue'] },
    'import/resolver': { alias: { map: [['@', './src']], extensions: ['.js', '.json', '.vue'] } }
  },
  rules: {
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
