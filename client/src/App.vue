<template>
    <layout class="boder-gray-200 light:text-gray-900 dark:text-white">
    </layout>
    <!-- <layout> </layout> -->
</template>

<script lang="ts" setup>
import layout from './Layout/LayoutIndex.vue'
import { useServerSeoMeta } from '@unhead/vue'
import { usePrimeVue } from 'primevue/config'
useSchemaOrg([
    // @todo Select Identity: http://unhead.unjs.io/schema-org/guides/identity
    defineWebSite({
        name: 'My Awesome Website'
    }),
    defineWebPage()
])
useServerSeoMeta({
    title: 'My Cool App title',
    description: 'My Cool App description',
    ogDescription: 'My Cool App ogDescription',
    ogTitle: 'My Cool App ogTitle',
    ogImage: '/vite-app-demo/android-chrome-512x512.png',
    twitterCard: 'summary_large_image'
})
document.addEventListener('load', () => {
    // 待 privevue 的 presets 完全支援 TypeScript，可移除此 EventListener (https://github.com/primefaces/primevue-tailwind/issues/66)
    const scriptTags = document.getElementsByTagName('script')
    // Convert the HTMLCollection to an array to use for...of
    Array.from(scriptTags).forEach((script) => {
        if (script.nonce) {
            usePrimeVue().config.csp?.nonce?.replace(/.*/g, script.nonce)
            return
        }
    })
})
</script>
<style scoped></style>
