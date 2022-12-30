// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'eslint:recommended', // this maybe causes errors in defineEmits<{}>() ???
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    // "prettier"
  ],
  ignorePatterns: ['*.cjs'],
  // /* globals: {
  //     defineEmits: 'readonly',
  //     defineProps: 'readonly',
  //   }, */
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    vueFeatures: {
      filter: true,
      interpolationAsNonHTML: false,
    }
    // project: ['tsconfig.json', 'tsconfig.node.json'],
  },
  // plugins: ['@typescript-eslint'], // might not be needed
  plugins: ['@typescript-eslint', 'vue', 'tailwindcss', 'prettier'],
  rules: {
    // '@typescript-eslint/no-explicit-any': 'warn',
    // '@typescript-eslint/consistent-type-imports': 'warn',
    // 'tailwindcss/classnames-order': 'warn',
    // 'tailwindcss/no-custom-classname': 'warn',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     endOfLine: 'auto'
    //   }
    // ]
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error"
  }
});
