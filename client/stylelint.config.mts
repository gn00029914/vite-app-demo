/** @type {import('stylelint').Config} */
export default {
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'config',
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen'
                ]
            }
        ],
        'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
        'custom-property-empty-line-before': null,
        'selector-class-pattern': null,
        'value-keyword-case': null
    },
    extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue']
}
