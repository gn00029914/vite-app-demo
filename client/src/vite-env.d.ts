declare module '*.svg' {
  import Vue, { VueConstructor } from 'vue'
  const content: VueConstructor<Vue>
  export default content
}

/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />
