/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

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
      '@': path.resolve(__dirname, '/src')
    }
  },
  test: {
    coverage: {
      reporter: ['html', 'json', 'text']
    },
    environment: 'happy-dom', // or edge-runtime ???
    // exclude: ['cypress', 'lib', 'node_modules', 'docs'],
    exclude: ['node_modules'],
    globals: true,
    setupFiles: 'src/App.tests.ts'
  }
})
