module.exports = {
  extends: ['./index.js', 'plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['warn', { singleline: 20, multiline: { max: 1, allowFirstLine: false } }],
    'vue/html-self-closing': ['error', { html: { void: 'any', normal: 'always', component: 'always' } }],
    'vue/html-closing-bracket-spacing': ['warn', { startTag: 'never', endTag: 'never', selfClosingTag: 'always' }],
    'vue/require-default-prop': 'off'
  },
  settings: {
    'import/ignore': ['\\.s?css$'],
    'import/parsers': { 'vue-eslint-parser': ['.vue'] },
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.json', '.vue']
      }
    }
  }
}
