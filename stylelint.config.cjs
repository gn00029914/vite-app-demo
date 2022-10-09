module.exports = {
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
    'custom-property-empty-line-before': null,
    'selector-class-pattern': null,
    'value-keyword-case': null
  },
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier'
  ]
}
