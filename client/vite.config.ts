/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
console.log(process.env)
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [vue()],
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
    open: true
    // port: 443,
    // host: , // ip
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
