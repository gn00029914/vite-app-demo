module.exports = {
  env: { node: true },
  extends: [
    'eslint:recommended', // this maybe causes errors in defineEmits<{}>() ???
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  /* globals: {
      defineEmits: 'readonly',
      defineProps: 'readonly',
    }, */
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  // plugins: ['@typescript-eslint'], // might not be needed
  rules: { '@typescript-eslint/no-explicit-any': ['off'] }
}
