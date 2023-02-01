<template>
  <div>
    <nav class="px-1 py-2.5">
      <a href="#" class="text-gray-900 hover:underline dark:text-white"
        >Navbar</a
      >
      <button
        id="theme-toggle"
        type="button"
        class="mx-2 animate-pulse rounded-lg p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        role="button"
        aria-label="darkMode"
        @click="darkMode"
      >
        <svg
          id="theme-toggle-dark-icon"
          class="hidden h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path>
        </svg>
        <svg
          id="theme-toggle-light-icon"
          class="hidden h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <flowbite-themable :theme="theme">
        <dropdown text="Click me">
          <list-group>
            <list-group-item
              class="bg-primary-200 text-primary-700"
              :hover="hover"
              >Item #1</list-group-item
            >
            <list-group-item class="bg-primary-200 text-primary-700"
              >Item #2</list-group-item
            >
            <list-group-item class="bg-primary-200 text-primary-700"
              >Item #3</list-group-item
            >
          </list-group>
        </dropdown>
      </flowbite-themable>
    </nav>
  </div>
</template>

<script setup lang="ts">
const theme = 'red' // 'blue', 'green', 'red', 'pink', 'purple'
// const placement = 'bottom'
const hover = false
document.addEventListener('DOMContentLoaded', () => {
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document
      .getElementById('theme-toggle-light-icon')
      ?.classList.remove('hidden')
    document.getElementById('theme-toggle-dark-icon')?.classList.add('hidden')
  } else {
    document
      .getElementById('theme-toggle-dark-icon')
      ?.classList.remove('hidden')
    document.getElementById('theme-toggle-light-icon')?.classList.add('hidden')
  }
})

const darkMode = () => {
  if (document.documentElement.classList.contains('dark')) {
    document
      .getElementById('theme-toggle-dark-icon')
      ?.classList.remove('hidden')
    document.getElementById('theme-toggle-light-icon')?.classList.add('hidden')
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    // document.documentElement.animate({ easing: ['ease-in'] }, 5000);
    // localStorage.theme = 'light'
  } else {
    document
      .getElementById('theme-toggle-light-icon')
      ?.classList.remove('hidden')
    document.getElementById('theme-toggle-dark-icon')?.classList.add('hidden')
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
    // document.documentElement.animate({ easing: ['ease-in'] }, 5000);
    // localStorage.theme = 'dark'
  }
}
</script>

<style lang="less" scoped>
.header {
  border-bottom: 1px solid #ccc;
}
</style>
