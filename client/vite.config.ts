/* eslint-disable prettier/prettier */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'
import externalGlobals from 'rollup-plugin-external-globals' //打包後使用cdn
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'
import vue from '@vitejs/plugin-vue'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { SchemaOrgResolver, schemaAutoImports } from '@vueuse/schema-org'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
// loader helpers
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { compression } from 'vite-plugin-compression2'
import { constants } from 'zlib'

// console.log(process.env) // environment variables log for nodejs

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        devSourcemap: process.env.NPM_ENV === 'development' ? true : false
    },
    optimizeDeps: {
        force: true
    },
    build: {
        modulePreload: true,
        sourcemap: process.env.NPM_ENV === 'development' ? true : false,
        target: 'esnext',
        manifest: true,
        cssCodeSplit: true,
        rollupOptions: {
            external: [
                // 不打包的 packages' name 從 cdn 引入記得在 index.html 掛上 cdn 不然會出錯
                // 'accessible-nprogress',
                // 'vue',
                // 'hookable',
                // 'vue-i18n',
                // '@intlify/unplugin-vue-i18n',
                // '@vueuse/head',
                // '@vueuse/core',
                // '@vueuse/schema-org',
                // 'vue-demi',
                // 'pinia',
                // 'vue-router',
                // 'flowbite',
                // 'flowbite-vue',
                // 'tailwindcss-animatecss'
            ],
            plugins: [
                externalGlobals({
                    // // key 是引入時的 package name，value 是 import ... from "" <- 的全域變數
                    // 'accessible-nprogress': 'accessible-nprogress',
                    // vue: 'vue',
                    // hookable: 'hookable',
                    // 'vue-i18n': 'vue-i18n',
                    // '@intlify/unplugin-vue-i18n': '@intlify/unplugin-vue-i18n',
                    // '@vueuse/head': '@vueuse/head',
                    // '@vueuse/core': '@vueuse/core',
                    // '@vueuse/schema-org': '@vueuse/schema-org',
                    // 'vue-demi': 'vue-demi',
                    // pinia: 'pinia',
                    // 'vue-router': 'vue-router',
                    // flowbite: 'flowbite',
                    // 'flowbite-vue': 'flowbite-vue',
                    // 'tailwindcss-animatecss': 'tailwindcss-animatecss'
                }),
                visualizer({ brotliSize: true, open: true })
            ],
            input: {
                main: resolve(__dirname, './index.html')
            },
            output: {
                compact: true,
                chunkFileNames:
                    process.env.NPM_ENV === 'development'
                        ? '[format]-[name]-[hash].js'
                        : '[hash].js'
            }
        }
    },
    plugins: [
        importToCDN({
            modules: [
                {
                    name: 'accessible-nprogress',
                    var: 'NProgress',
                    path: 'dist/accessible-nprogress.min.js',
                    css: 'dist/accessible-nprogress.min.css'
                }
                // autoComplete('vue'),
                // {
                //   name: 'vue',
                //   var: 'vue',
                //   path: '+esm'
                // },
                // {
                //   name: 'hookable',
                //   var: 'hookable',
                //   path: 'dist/hookable.min.js'
                // },
                // {
                //   name: 'vue-i18n',
                //   var: 'vue-i18n',
                //   path: 'dist/vue-i18n.global.js'
                // },
                // {
                //   name: '@intlify/unplugin-vue-i18n',
                //   var: '@intlify/unplugin-vue-i18n',
                //   path: 'dist/@intlify/unplugin-vue-i18n.min.js'
                // },
                // {
                //   name: '@vueuse/head',
                //   var: '@vueuse/head',
                //   path: 'dist/index.mjs'
                // },
                // autoComplete('@vueuse/core'),
                // {
                //   name: '@vueuse/core',
                //   var: '@vueuse/core',
                //   path: '+esm'
                // },
                // {
                //   name: '@vueuse/schema-org',
                //   var: '@vueuse/schema-org',
                //   path: 'dist/@vueuse/schema-org.min.js'
                // },
                // {
                //   name: 'pinia',
                //   var: 'pinia',
                //   path: 'dist/pinia.min.js'
                // },
                // {
                //   name: 'vue-router',
                //   var: 'vue-router',
                //   path: 'dist/vue-router.min.js'
                // },
                // {
                //   name: 'flowbite',
                //   var: 'flowbite',
                //   path: 'dist/flowbite.min.js'
                // },
                // {
                //   name: 'flowbite-vue',
                //   var: 'flowbite-vue',
                //   path: 'dist/flowbite-vue.min.js'
                // },
                // {
                //   name: 'tailwindcss-animatecss',
                //   var: 'tailwindcss-animatecss',
                //   path: 'dist/tailwindcss-animatecss.min.js'
                // }
            ]
        }),
        splitVendorChunkPlugin(),
        basicSsl(),
        process.env.NPM_ENV === 'development' ? false : ViteMinifyPlugin({}),
        VitePWA({
            useCredentials: true,
            manifest: {
                name: process.env.npm_package_name,
                description: process.env.npm_package_name + ' PWA',
                theme_color: '#00bd7e',
                scope: './',
                start_url: './',
                display: 'standalone',
                icons: [
                    {
                        src: './android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: './android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    },
                    {
                        src: './android-chrome-maskable-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable'
                    },
                    {
                        src: './android-chrome-maskable-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    },
                    {
                        src: './apple-touch-icon-60x60.png',
                        sizes: '60x60',
                        type: 'image/png'
                    },
                    {
                        src: './apple-touch-icon-76x76.png',
                        sizes: '76x76',
                        type: 'image/png'
                    },
                    {
                        src: './apple-touch-icon-120x120.png',
                        sizes: '120x120',
                        type: 'image/png'
                    },
                    {
                        src: './apple-touch-icon-152x152.png',
                        sizes: '152x152',
                        type: 'image/png'
                    },
                    {
                        src: './apple-touch-icon-180x180.png',
                        sizes: '180x180',
                        type: 'image/png'
                    },
                    {
                        src: './apple-touch-icon.png',
                        sizes: '180x180',
                        type: 'image/png'
                    },
                    {
                        src: './favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png'
                    },
                    {
                        src: './favicon-32x32.png',
                        sizes: '32x32',
                        type: 'image/png'
                    },
                    {
                        src: './msapplication-icon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png'
                    },
                    {
                        src: './mstile-150x150.png',
                        sizes: '150x150',
                        type: 'image/png'
                    }
                ]
                // shortcuts: [
                //   {
                //     name: "Open About",
                //     short_name: "About",
                //     description: "Open the about page",
                //     url: "/about",
                //     icons: [{ src: "/App_icon192.png", sizes: "192x192" }],
                //   },
                //   {
                //     name: "Report issue",
                //     short_name: "Report",
                //     description: "Open the issue report page",
                //     url: "/report",
                //     icons: [{ src: "/App_icon192.png", sizes: "192x192" }],
                //   },
                // ],
            },
            registerType: 'autoUpdate',
            workbox: {
                skipWaiting: true,
                clientsClaim: true,
                cleanupOutdatedCaches: true,
                inlineWorkboxRuntime: true,
                sourcemap: process.env.NPM_ENV === 'development' ? true : false,
                globPatterns: ['**'],
                globIgnores: ['**.br'],
                runtimeCaching: [
                    // {
                    //   urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                    //   handler: 'NetworkFirst'
                    // },
                    // {
                    //   urlPattern: /.*\.js.*/,
                    //   handler: 'NetworkFirst'
                    // },
                    // {
                    //   urlPattern: /.*\.css.*/,
                    //   handler: 'NetworkFirst'
                    // },
                    // {
                    //   urlPattern: /.*\.html.*/,
                    //   handler: 'NetworkFirst'
                    // },
                    {
                        urlPattern: /.*/,
                        handler: 'NetworkFirst'
                    }
                ]
            }
        }), // 有 race condition 的宣告要在PWA後呼叫
        ViteWebfontDownload(
            [
                'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap'
            ], // https://fonts.google.com/share?selection.family=Source%20Sans%20Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900
            {
                injectAsStyleTag: false,
                minifyCss: process.env.NPM_ENV === 'development' ? false : true,
                async: true,
                cache: true // node_modules\.pnpm\vite-plugin-webfont-dl@3.6.0_vite@4.0.4\node_modules\flat-cache\.cache\vite-plugin-webfont-dl
            }
        ), // 注意網路連線特別是IPv6租約期限
        vue({
            template: {
                compilerOptions: {
                    delimiters: ['@{{', '}}']
                }
            }
        }),
        VueI18nVitePlugin({
            /* options */
            // locale messages resource pre-compile option
            runtimeOnly: true,
            compositionOnly: true,
            include: resolve(__dirname, './src/locales/**')
            // resolve(
            //   dirname(fileURLToPath(import.meta.url)),
            //   './src/locales/**'
            // )
        }),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/ // .md
            ],
            // global imports to register
            imports: [
                // auto-import schema-org composables
                {
                    '@vueuse/schema-org': schemaAutoImports
                },
                // presets
                'vue',
                'vue-router',
                'vue-i18n',
                '@vueuse/head',
                '@vueuse/core'
                // 'vuex', // 以下按需引入
                // {
                //   // custom
                //   '@vueuse/core': [
                //     // named imports
                //     'useMouse', // import { useMouse } from '@vueuse/core',
                //     // alias
                //     ['useFetch', 'useMyFetch']
                //   ],
                //   axios: [
                //     // default imports
                //     ['default', 'axios']
                //   ]
                // }
            ],
            resolvers: [
                // (autoImportName) => {
                //   console.log(autoImportName) // 先查auto-import.d.ts再看runtime log
                // }
                IconsResolver({
                    prefix: 'Icon'
                })
            ],
            dts: 'src/auto-import.d.ts', // 變更路徑需手動清除舊檔
            eslintrc: {
                enabled: true
            }
        }),
        Components({
            dirs: ['src'],
            deep: true,
            dts: 'src/components.d.ts', // 變更路徑需手動清除舊檔
            resolvers: [
                // auto-import schema-org components
                SchemaOrgResolver(),
                (componentName) => {
                    // console.log(componentName) // 先查components.d.ts再看runtime log
                    // where `componentName` is always CapitalCase
                    // if (componentName.startsWith('Dropdown')) // 按需過濾
                    return {
                        name: componentName,
                        from: 'flowbite-vue'
                    }
                }
            ]
        }),
        Icons({
            // scale: 3, // a11y 最小要求 48x48 px
            customCollections: {
                // key as the collection name
                // a helper to load icons from the file system
                // files under `./assets/icons` with `.svg` extension will be loaded as it's file name
                // you can also provide a transform callback to change each icon (optional)
                'my-icons': FileSystemIconLoader(
                    './assets/icons'
                    // , (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" ')
                )
            },
            iconCustomizer(collection, icon, props) {
                // customize this @iconify icon in this collection
                if (collection === 'mdi' && icon === 'my-icons') {
                    props.width = '3em'
                    props.height = '3em'
                }
            }
        }),
        compression({
            algorithm: 'brotliCompress',
            // exclude: /.*?(?<=.html)$/,
            compressionOptions: {
                params: {
                    [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT,
                    [constants.BROTLI_PARAM_LGWIN]:
                        constants.BROTLI_MAX_WINDOW_BITS,
                    [constants.BROTLI_PARAM_LGBLOCK]:
                        constants.BROTLI_MAX_INPUT_BLOCK_BITS,
                    [constants.BROTLI_PARAM_QUALITY]:
                        constants.BROTLI_MAX_QUALITY
                }
            }
        })
    ],
    base: '/' + process.env.npm_package_name + '/',
    publicDir: 'public',
    resolve: {
        // resolve.alias
        alias:
            process.env.NPM_ENV === 'development'
                ? {
                      '@': resolve(__dirname, 'src'),
                      '@assets': resolve(__dirname, 'src/assets'),
                      '@components': resolve(__dirname, 'src/components'),
                      '@images': resolve(__dirname, 'src/assets/images'),
                      '@views': resolve(__dirname, 'src/views'),
                      '@store': resolve(__dirname, 'src/store'),
                      find: 'vue-i18n',
                      replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
                  }
                : {
                      '@': resolve(__dirname, 'src')
                      // 'vite': 'https://esm.sh/vite',
                      // 'accessible-nprogress': 'https://esm.sh/accessible-nprogress',
                      // 'vue': 'https://esm.sh/vue@3.2.47',
                      // 'hookable': 'https://esm.sh/hookable',
                      // '@intlify/core-base': 'https://esm.sh/@intlify/core-base',
                      // '@intlify/shared': 'https://esm.sh/@intlify/shared',
                      // '@intlify/unplugin-vue-i18n': 'https://esm.sh/@intlify/unplugin-vue-i18n',
                      // '@intlify/message-compiler': 'https://esm.sh/@intlify/message-compiler',
                      // '@intlify/devtools-if': 'https://esm.sh/@intlify/devtools-if',
                      // 'vue-i18n': 'https://esm.sh/vue-i18n@9.2.2/dist/vue-i18n.runtime.esm-bundler.js?deps=vue@3.2.47',
                      // 'workbox-window': 'https://esm.sh/workbox-window/build/workbox-window.prod.es5.mjs',
                      // '@vueuse/head': 'https://esm.sh/@vueuse/head',
                      // '@vueuse/core': 'https://esm.sh/@vueuse/core',
                      // '@vueuse/schema-org': 'https://esm.sh/@vueuse/schema-org',
                      // 'vue-demi': 'https://esm.sh/vue-demi',
                      // 'pinia': 'https://esm.sh/pinia',
                      // 'vue-router': 'https://esm.sh/vue-router',
                      // 'flowbite': 'https://esm.sh/flowbite',
                      // 'flowbite-vue': 'https://esm.sh/flowbite-vue',
                      // 'tailwindcss-animatecss': 'https://esm.sh/tailwindcss-animatecss',
                  }
    },
    server: {
        https: true,
        open: true,
        port: 443,
        host: 'localhost',
        headers: {
            'content-encoding': 'br, deflate, gzip, identity'
        }
    },
    test: {
        coverage: {
            reporter: ['html', 'json', 'text']
        },
        environment: 'happy-dom', // or edge-runtime ???
        // exclude: ['cypress', 'lib', 'node_modules', 'docs'],
        exclude: ['node_modules'],
        globals: true
        // setupFiles: './src/App.tests.ts'
    }
})
