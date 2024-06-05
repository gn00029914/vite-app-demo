/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
