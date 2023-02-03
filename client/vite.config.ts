/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import webfontDownload from 'vite-plugin-webfont-dl'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { compression } from 'vite-plugin-compression2'
import { constants, gzip } from 'zlib'

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
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // return id.toString().split('node_modules/.pnpm/')[1].split('/')[0] // avoid stackoverflow
            return id.toString().split('node_modules/.pnpm/')[1].split('/')[2] // for simple app
          }
        },
        chunkFileNames:
          process.env.NPM_ENV === 'development'
            ? '[format]-[name]-[hash].js'
            : '[hash].js'
      }
    }
  },
  plugins: [
    webfontDownload(
      [
        'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap'
      ], // https://fonts.google.com/share?selection.family=Source%20Sans%20Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900
      {
        injectAsStyleTag: false,
        minifyCss: true,
        async: true,
        cache: true // node_modules\.pnpm\vite-plugin-webfont-dl@3.6.0_vite@4.0.4\node_modules\flat-cache\.cache\vite-plugin-webfont-dl
      }
    ),
    Icons({
      scale: 3
    }),
    vue({
      template: {
        compilerOptions: {
          delimiters: ['@{{', '}}']
        }
      }
    }),
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
        sourcemap: true,
        globPatterns: ['**'],
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
    }),
    basicSsl(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router'
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
      ],
      dts: 'src/auto-import.d.ts',
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      dirs: ['src'],
      deep: true,
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver(),
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
    compression({
      // algorithm: brotliCompress || deflateRaw || deflate || gzip,
      // algorithm: brotliCompress, // 設置br要檢查伺服器政策是否有優先支援否則可能發生資源存取問題
      algorithm: gzip, // for GitHub
      compressionOptions: {
        brotliCompress: {
          params: { [constants.BROTLI_PARAM_QUALITY]: 11 }
        },
        deflateRaw: { level: 9 },
        deflate: { level: 9 },
        gzip: { level: 9 }
      },
      filename: '[path][base].br',
      exclude: [
        /\.(html)$/,
        /\.(css)$/,
        /\.(js)$/,
        /\.(json)$/,
        /\.(webmanifest)$/
      ], // 解/壓縮導致'content-type'資訊無法被瀏覽器識別而發生 404 Not Found 用戶端錯誤回應碼需排除的檔案
      deleteOriginalAssets: true
    })
  ],
  base: '/' + process.env.npm_package_name + '/',
  publicDir: 'public',
  resolve: {
    alias: {
      //resolve.alias
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@store': path.resolve(__dirname, 'src/store')
    }
  },
  server: {
    https: true,
    open: true,
    port: 443,
    host: 'localhost'
    // headers: {
    //   'content-encoding': 'br, deflate, gzip, identity'
    // }
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
