// import './assets/css/reset.less'
// import '../node_modules/flowbite/dist/flowbite.min.css' //flowbite modified taildwindcss
import './style.css'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import routes from './routes'
// import { store } from './store'

// import '../node_modules/flowbite/dist/flowbite.js'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const head = createHead()

const store = createPinia()

createApp(App).use(head).use(store).use(router).mount('#app')

// It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes. 要等掛載完才行
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
  document.getElementById('theme-toggle-light-icon')?.classList.add('hidden')
  document.getElementById('theme-toggle-dark-icon')?.classList.remove('hidden')
  localStorage.theme = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  document.getElementById('theme-toggle-light-icon')?.classList.remove('hidden')
  document.getElementById('theme-toggle-dark-icon')?.classList.add('hidden')
  localStorage.theme = 'light'
}
