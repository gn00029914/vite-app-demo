<template>
    <layout class="boder-gray-200 text-gray-900 dark:text-white"> </layout>
</template>

<script lang="ts" setup>
import layout from './Layout/LayoutIndex.vue'
useSchemaOrg([
    // @todo Select Identity: https://unhead-schema-org.harlanzw.com//guide/guides/identity
    defineWebSite({
        name: 'My Awesome Website'
    }),
    defineWebPage()
])
</script>
<style lang="less" scoped></style>
