/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // @vue/component
  const component: DefineComponent<{}, {}, any>
  export default component
}
