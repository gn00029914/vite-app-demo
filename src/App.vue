<template>
  <h1>{{ title }}</h1>
  <HelloWorld>HelloWorld</HelloWorld>
  <RouterLink to="/vite-app-demo/">Home</RouterLink>
  <RouterLink to="/vite-app-demo/about">About</RouterLink>
  <!-- <RouterView></RouterView> -->
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<script lang="ts" setup>
// import { useHead } from '@vueuse/head'
import HelloWorld from './components/HelloWorld.vue'
const title = import.meta.env.VITE_APP_TITLE
console.log(import.meta)
// useHead({
//   title: 'Default title',
//   meta: [
//     {
//       name: 'description',
//       content: 'This is a DEFAULT description'
//     },
//     {
//       name: 'other-stuff',
//       content: 'This is some OTHER stuff'
//     }
//   ]
// })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
