/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { resolve } from 'path'
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
                globIgnores: ['**/*.br'],
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
        alias: {
            // resolve.alias
            '@': resolve(__dirname, 'src'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@components': resolve(__dirname, 'src/components'),
            '@images': resolve(__dirname, 'src/assets/images'),
            '@views': resolve(__dirname, 'src/views'),
            '@store': resolve(__dirname, 'src/store'),
            find: 'vue-i18n',
            replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
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
