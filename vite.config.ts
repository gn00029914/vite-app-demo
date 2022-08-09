/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vite-app-demo/',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  test: {
    environment: 'jsdom', // or happy-dom ???
    globals: true
  }
})
