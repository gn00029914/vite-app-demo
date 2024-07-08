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
import EventCounter from './components/EventCounter.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
// import { setupLayouts } from 'virtual:meta-layouts'
// import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import PrimeVue from 'primevue/config' // import PrimeVue
import { usePassThrough } from 'primevue/passthrough'
import Tailwind from 'primevue/passthrough/tailwind'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Wind from '@presets/wind/index' // https://tailwind.primevue.org/overview/#preset https://github.com/primefaces/primevue-tailwind/releases/tag/0.8.2 https://github.com/primefaces/primevue-examples/issues/6#issuecomment-1959753222 https://github.com/primefaces/primevue/issues/4883#issuecomment-1865040221 https://github.com/primefaces/primevue-tailwind/issues/66 https://github.com/primefaces/primevue-tailwind/issues/242
// import BadgeDirective from 'primevue/badgedirective'
// import Tooltip from 'primevue/tooltip'
// import StyleClass from 'primevue/styleclass'
// import FocusTrap from 'primevue/focustrap'
// import Ripple from 'primevue/ripple'
// import AnimateOnScroll from 'primevue/animateonscroll'
import '../node_modules/primeicons/primeicons.css' // icons
// import { size } from '@vee-validate/rules'
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
    routes,
    history: createWebHistory()
    // https://github.com/posva/unplugin-vue-router/discussions/407#discussioncomment-9662935
    // extendRoutes: (router) => {
    //     router.push({
    //         component: () => import('./pages/HomePage.vue'),
    //         path: '/vite-app-demo/'
    //     })
    //     setupLayouts(generatedRoutes)
    //     return router
    // }
})

NProgress.configure({
    easing: 'ease',
    speed: 1200,
    showSpinner: window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
        ? false
        : true
}).start()

// 取得 privevue 所需的 nonce
let _nonce
const scriptTags = document.getElementsByTagName('script')
// Convert the HTMLCollection to an array to use for...of
Array.from(scriptTags).forEach((script) => {
    if (script.nonce) {
        _nonce = script.nonce
        return
    }
})

createApp(App)
    .use(i18n)
    .use(head)
    .use(store)
    .use(router)
    // .component('router-link', RouterLink)
    .component('EventCounter', EventCounter)
    .use(PrimeVue, {
        unstyled: true,
        ripple: true,
        inputStyle: 'filled',
        // locale: 'zh-TW',
        pt: usePassThrough(Tailwind, Wind, {
            mergeSections: true,
            mergeProps: true
        }),
        csp: { nonce: _nonce } // 由此處設置 privevue 所需的 nonce
    })
    // .directive('badge', BadgeDirective)
    // .directive('tooltip', Tooltip)
    // .directive('styleclass', StyleClass)
    // .directive('focustrap', FocusTrap)
    // .directive('ripple', Ripple)
    // .directive('animateonscroll', AnimateOnScroll)
    // .component('Button', Button) // register Button component
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
