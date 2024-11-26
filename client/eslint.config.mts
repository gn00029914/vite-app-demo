// import { fileURLToPath } from "node:url";
// import path from "node:path";
// import { FlatCompat } from "@eslint/eslintrc";
import eslint from '@eslint/js'
// import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
// baseDirectory: __dirname,
// baseDirectory: process.cwd(),
// recommendedConfig: eslint.configs.recommended,
// allConfig: eslint.configs.all
// });

// export default tseslint.config([
export default [
    {
        ignores: ['**/*.cjs', '**/auto-import.d.ts'],
        files: ['**/*.js', '**/*.ts', '**/*.vue']
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    ...pluginVue.configs['flat/recommended'],
    ...eslintPluginTailwindCSS.configs['flat/recommended'],
    eslintPluginPrettierRecommended, // https://github.com/prettier/eslint-plugin-prettier/issues/659
    ...vuejsAccessibility.configs['flat/recommended'],
    // ...compat.extends(
    // "eslint:recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:vue/vue3-recommended",
    // "plugin:tailwindcss/recommended",
    // "plugin:prettier/recommended",
    // "prettier",
    // "plugin:vuejs-accessibility/recommended",
    // process.env.NPM_ENV === "development"
    //         ? "./.eslintrc-auto-import.json"
    //         : "",
    // ),
    {
        // plugins: {
        // "@typescript-eslint": typescriptEslint,
        // vue,
        // tailwindcss,
        // prettier,
        // "vuejs-accessibility": vuejsAccessibility,
        // },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            },
            parser: vueParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                // parser: "@typescript-eslint/parser",
                // parser: tseslint.parser,
                parser: tsParser,
                ecmaFeatures: {
                    jsx: true
                },
                vueFeatures: {
                    filter: true,
                    interpolationAsNonHTML: false
                }
            }
        },

        rules: {
            'no-undef': 'off', // https://github.com/antfu/unplugin-auto-import#eslint
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            // '@typescript-eslint/no-explicit-any': 'warn',
            // '@typescript-eslint/consistent-type-imports': 'warn',
            // 'tailwindcss/classnames-order': 'warn',
            'tailwindcss/no-custom-classname': 'off',
            // 'prettier/prettier': [
            //   'error',
            //   {
            //     endOfLine: 'auto'
            //   }
            // ]
            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': 'error',
            // "vuejs-accessibility/rule-name": "error"
            'vuejs-accessibility/label-has-for': 'warn'
            // 'no-commonjs': 'warn' // [WIP] https://github.com/primefaces/tailwindcss-primeui/issues/1
        }
    }
    // ])
]
