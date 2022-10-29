module.exports = {
  root: true,
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  extends: [
    'eslint:recommended', // this maybe causes errors in defineEmits<{}>() ???
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended' // 規則較prettier不嚴謹
  ],
  ignorePatterns: ['*.cjs'],
  /* globals: {
      defineEmits: 'readonly',
      defineProps: 'readonly',
    }, */
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
    // project: ['tsconfig.json', 'tsconfig.node.json'],
  },
  // plugins: ['@typescript-eslint'], // might not be needed
  plugins: ['@typescript-eslint', 'prettier', 'tailwindcss'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'prettier/prettier': ['error', {
      'endOfLine': 'auto',
    }
    ]
  },
  settings: {
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ["classnames", "clsx", "ctl"],
      config: "tailwind.config.js",
      cssFiles: [
        "**/*.css",
        "!**/node_modules",
        "!**/.*",
        "!**/dist",
        "!**/build",
      ],
      cssFilesRefreshRate: 1_000,
      removeDuplicates: true,
      whitelist: [],
    },
  }
}
