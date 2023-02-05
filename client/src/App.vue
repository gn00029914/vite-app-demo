<template>
  <layout
    class="boder-gray-200 rounded bg-white px-2 py-2.5 text-gray-900 dark:bg-gray-900 dark:text-white sm:px-4"
  >
  </layout>
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
