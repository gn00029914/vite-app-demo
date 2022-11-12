import './style.css'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import routes from './routes'
// import { store } from './store'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const head = createHead()

const store = createPinia()

createApp(App).use(head).use(store).use(router).mount('#app')
