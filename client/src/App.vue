<template>
    <layout class="boder-gray-200 light:text-gray-900 dark:text-white">
    </layout>
    <!-- <layout> </layout> -->
</template>

<script lang="ts" setup>
import layout from './Layout/LayoutIndex.vue'
import { useServerSeoMeta } from '@unhead/vue'
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
</script>
<style scoped></style>
