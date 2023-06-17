import './style.css'
import '../node_modules/accessible-nprogress/dist/accessible-nprogress.min.css' // 不建議直接由 CDN 引入, 待完成專案部署後再由 CDN 重新導向
import './nprogress-custom.css'

import 'vite/modulepreload-polyfill'
import { registerSW } from 'virtual:pwa-register'
import NProgress from 'accessible-nprogress'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { createHead } from '@vueuse/head'
import { SchemaOrgUnheadPlugin } from '@vueuse/schema-org'
import EventCounter from './components/EventCounter.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
// import { store } from './store'
import routes from './routes'

const i18n = createI18n({
  // something vue-i18n options here ...
  legacy: false, // you must specify 'legacy: false' option
  mode: 'composition',
  globalInjection: true,
  locale: 'zh-TW',
  fallbackLocale: 'en-US',
  messages
})
export default i18n

useSchemaOrg([
  // @todo Select Identity: https://unhead-schema-org.harlanzw.com//guide/guides/identity
  defineWebSite({
    name: 'My Awesome Website'
  }),
  defineWebPage()
])

registerSW({ immediate: true })

const head = createHead()
head.use(
  SchemaOrgUnheadPlugin(
    {
      // config
      host: 'https://example.com',
      title: 'My awesome site'
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

NProgress.configure({ easing: 'ease', speed: 1200 }).start().done()
createApp(App)
  .use(i18n)
  .use(head)
  .use(store)
  .use(router)
  .component('EventCounter', EventCounter)
  .mount('#app')

import { Drawer } from 'flowbite'
import type { DrawerOptions, DrawerInterface } from 'flowbite'

// set the drawer menu element
const $targetEl: HTMLElement | null = document.getElementById('drawer-button')
const $buttonElement: HTMLElement | null = document.querySelector(
  '#drawer-hide-button'
)
// options with default values
const options: DrawerOptions = {
  placement: 'right',
  backdrop: true,
  bodyScrolling: false,
  edge: true,
  edgeOffset: 'bottom-[60px]',
  backdropClasses:
    'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
  onHide: () => {
    console.log('drawer is hidden')
  },
  onShow: () => {
    console.log('drawer is shown')
  },
  onToggle: () => {
    console.log('drawer has been toggled')
  }
}

/*
 * $targetEl: required
 * options: optional
 */
const drawer: DrawerInterface = new Drawer($targetEl, options)
$buttonElement?.addEventListener('click', () => {
  drawer.hide()
  $targetEl?.classList.remove('-translate-x-full')
})
// show the drawer
// drawer.show()
