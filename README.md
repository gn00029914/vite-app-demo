# vite-app-demo

[![Deploy](https://github.com/gn00029914/vite-app-demo/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/gn00029914/vite-app-demo/actions/workflows/deploy.yml)

This demo is designed to kickstart my development journey using Vue 3, NestJS, TypeScript, PM2, Vue Router, Pinia, Vitest, and Tailwind CSS within the Vite ecosystem. The demo leverages Vue 3 `<script setup>` Single File Components (SFCs), check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm vd
```

### Type-Check, Compile and Minify for Production

```sh
pnpm vb
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm vt
```

## References

- https://pnpm.io/installation
- https://lobotuerto.com/notes/build-a-vue3-typescript-dev-environment-with-vite
