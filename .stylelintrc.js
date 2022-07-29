module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  customSyntax: require('postcss-less'),
  rules: {
    'no-empty-source': null,
    'number-leading-zero': 'never' // 小数不带0
  }
}
