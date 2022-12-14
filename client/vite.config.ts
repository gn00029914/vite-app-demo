/// <reference types="vitest" />
/// <reference types="vite/client" />

import { Plugin, defineConfig, resolveConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { VitePluginPWAAPI, VitePWA } from 'vite-plugin-pwa'
import basicSsl from '@vitejs/plugin-basic-ssl'

// vite-rebuild-pwa
const RebuildPWA = (): Plugin => ({
  name: 'rebuild-pwa',
  closeBundle: async () => {
    const config = await resolveConfig({}, 'build', 'production')
    const pwaPlugin: VitePluginPWAAPI = config.plugins.find(
      (i) => i.name === 'vite-plugin-pwa'
    )?.api
    if (pwaPlugin && pwaPlugin.generateSW && !pwaPlugin.disabled)
      await pwaPlugin.generateSW()
  }
})

console.log(process.env)

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [
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
      devOptions: {
        enabled: true
      },
      workbox: {
        sourcemap: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          // {
          //   urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          //   handler: 'StaleWhileRevalidate'
          // },
          // {
          //   urlPattern: /.*\.js.*/,
          //   handler: 'StaleWhileRevalidate'
          // },
          // {
          //   urlPattern: /.*\.css.*/,
          //   handler: 'StaleWhileRevalidate'
          // },
          // {
          //   urlPattern: /.*\.html.*/,
          //   handler: 'StaleWhileRevalidate'
          // },
          {
            urlPattern: /\**/,
            handler: 'StaleWhileRevalidate'
          }
        ]
      }
    }),
    RebuildPWA(),
    basicSsl()
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
