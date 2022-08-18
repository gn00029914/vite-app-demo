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
    environment: 'happy-dom', // or edge-runtime ???
    globals: true
  }
})
