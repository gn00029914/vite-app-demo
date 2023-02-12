import './style.css'
import '../node_modules/accessible-nprogress/dist/accessible-nprogress.min.css'
import './nprogress-custom.css'

import 'vite/modulepreload-polyfill'
import { registerSW } from 'virtual:pwa-register'
import NProgress from 'accessible-nprogress'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { SchemaOrgUnheadPlugin } from '@vueuse/schema-org'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
// import { store } from './store'
import routes from './routes'

registerSW({ immediate: true })
NProgress.configure({ easing: 'ease', speed: 1200 }).start().done()
const head = createHead()
head.use(
  SchemaOrgUnheadPlugin(
    {
      // config
      host: 'https://example.com'
    },
    () => {
      const route = router.currentRoute.value
      return {
        path: route.path,
        ...route.meta
      }
    }
  )
)
const store = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(head).use(store).use(router).mount('#app')
