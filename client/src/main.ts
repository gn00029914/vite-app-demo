import './style.css'
import '../node_modules/accessible-nprogress/dist/accessible-nprogress.min.css' // 不建議直接由 CDN 引入, 待完成專案部署後再由 CDN 重新導向
import './nprogress-custom.css'
import 'vite/modulepreload-polyfill'
import { registerSW } from 'virtual:pwa-register'
import NProgress from 'accessible-nprogress'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { SchemaOrgUnheadPlugin } from '@unhead/schema-org-vue'
import { createHead } from '@unhead/vue'
import { RouterLink } from 'vue-router'
import EventCounter from './components/EventCounter.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:meta-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import PrimeVue from 'primevue/config' // import PrimeVue
import { usePassThrough } from 'primevue/passthrough'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Wind from '@presets/wind' // https://tailwind.primevue.org/overview/#preset https://github.com/primefaces/primevue-tailwind/releases/tag/0.8.2 https://github.com/primefaces/primevue-examples/issues/6#issuecomment-1959753222
import BadgeDirective from 'primevue/badgedirective'
import Tooltip from 'primevue/tooltip'
import StyleClass from 'primevue/styleclass'
import FocusTrap from 'primevue/focustrap'
import Ripple from 'primevue/ripple'
import AnimateOnScroll from 'primevue/animateonscroll'
import '../node_modules/primeicons/primeicons.css' // icons
// import '../node_modules/primeflex/primeflex.css' // PrimeFlex
// import Button from 'primevue/button' // 改為auto-import
// import { store } from './store'

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

registerSW({ immediate: true })

const head = createHead()
head.use(
    SchemaOrgUnheadPlugin(
        {
            // config
            host: 'https://gn00029914.github.io/vite-app-demo/'
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
    extendRoutes: (router) => {
        router.push(
            {
                component: () => import('./pages/HomePage.vue'),
                name: 'home',
                path: '/vite-app-demo/'
            },
            {
                component: () => import('./pages/AboutPage.vue'),
                name: 'about',
                path: '/vite-app-demo/AboutPage'
            }
        )
        setupLayouts(generatedRoutes)
        return router
    }
})

NProgress.configure({
    easing: 'ease',
    speed: 1200,
    showSpinner: window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
        ? false
        : true
}).start()

createApp(App)
    .use(i18n)
    .use(head)
    .use(store)
    .use(router)
    // .component('router-link', RouterLink)
    .component('EventCounter', EventCounter)
    .use(PrimeVue, {
        unstyled: false,
        ripple: true,
        inputStyle: 'filled',
        // locale: 'zh-TW',
        pt: usePassThrough(
            Wind,
            {}
            // {
            // mergeSections:,
            // mergeProps:
            // }
        ),
        csp: { nonce: '{{ nonce }}' } // 由此處設置 nonce 不太可行, 待完全轉由 TypeScript 檢查 presets 的型別後再從後台一同編譯 nonce 為佳
    })
    .directive('badge', BadgeDirective)
    .directive('tooltip', Tooltip)
    .directive('styleclass', StyleClass)
    .directive('focustrap', FocusTrap)
    .directive('ripple', Ripple)
    .directive('animateonscroll', AnimateOnScroll)
    // .component('Button', Button)  // register Button component
    .mount('#app')

NProgress.done()

document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document
            .getElementById('theme-toggle-light-icon')
            ?.classList.remove('hidden')
        document
            .getElementById('theme-toggle-dark-icon')
            ?.classList.add('hidden')
    } else {
        document
            .getElementById('theme-toggle-dark-icon')
            ?.classList.remove('hidden')
        document
            .getElementById('theme-toggle-light-icon')
            ?.classList.add('hidden')
    }
})
