import './style.css'
import '../node_modules/accessible-nprogress/dist/accessible-nprogress.min.css'
import './nprogress-custom.css'

import 'vite/modulepreload-polyfill'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import routes from './routes'
// import { store } from './store'
import NProgress from 'accessible-nprogress'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const head = createHead()

const store = createPinia()

createApp(App).use(head).use(store).use(router).mount('#app')

NProgress.configure({ easing: 'ease', speed: 1200 }).start().done()
