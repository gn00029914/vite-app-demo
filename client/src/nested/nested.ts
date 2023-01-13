import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

import App from './App.vue'

const head = createHead()

const store = createPinia()

createApp(App).use(head).use(store).mount('#app')
