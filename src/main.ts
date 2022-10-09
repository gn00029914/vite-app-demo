import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import './assets/css/reset.less'
import './style.css'
import '../node_modules/flowbite/dist/flowbite.js'
import App from './App.vue'
import routes from './routes'
//import { store } from './store'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const head = createHead()

const store = createPinia()

createApp(App).use(head).use(router).use(store).mount('#app')
