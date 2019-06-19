module.exports = {
  extends: ['./index.js', 'plugin:vue/recommended', 'prettier'],
  settings: {
    'import/parsers': { 'vue-eslint-parser': ['.vue'] },
    'import/resolver': { alias: { map: [['@', './src']], extensions: ['.js', '.json', '.vue'] } }
  },
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': ['warn', { singleline: 'never', multiline: 'never' }],
    'vue/max-attributes-per-line': ['warn', { singleline: 20, multiline: { max: 1, allowFirstLine: false } }],
    'vue/require-default-prop': 'off'
  }
}
