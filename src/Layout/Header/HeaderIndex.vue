<template>
  <div>
    <nav
      class="boder-gray-200 sm:px-4 rounded bg-white px-2 py-2.5 dark:bg-gray-900"
    >
      <a href="#" class="text-gray-900 hover:underline dark:text-white"
        >Navbar</a
      >
      <!-- <button class="text-white px-2.5 py-1.5 mx-10 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md"
                @click="lightMode">普通模式
            </button> -->
      <!-- <button class="text-white px-2.5 py-1.5 mx-10 bg-blue-500 shadow-lg shadow-blue-500/50 rounded-md"
                @click="darkMode">暗黑模式開關
            </button> -->
      <button
        id="theme-toggle"
        type="button"
        class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        @click="darkMode"
      >
        <svg
          id="theme-toggle-dark-icon"
          class="h-5 w-5"
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
    </nav>
  </div>
</template>

<script setup lang="ts">
// It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
  document.getElementById('theme-toggle-light-icon')?.classList.add('hidden')
  document.getElementById('theme-toggle-dark-icon')?.classList.remove('hidden')
  // localStorage.theme = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  document.getElementById('theme-toggle-dark-icon')?.classList.add('hidden')
  document.getElementById('theme-toggle-light-icon')?.classList.remove('hidden')
  // localStorage.theme = 'light'
}

const darkMode = () => {
  // themeToggleDarkIcon?.classList.toggle('hidden');
  // themeToggleLightIcon?.classList.toggle('hidden');
  //这个条件用于判断当前系统应用模式是否开启了“暗”模式（win10在   个性化-颜色-选择默认应用模式  中修改）
  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  // if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
  if (localStorage.theme === 'dark') {
    document.getElementById('theme-toggle-light-icon')?.classList.add('hidden')
    document
      .getElementById('theme-toggle-dark-icon')
      ?.classList.remove('hidden')
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
    localStorage.theme = 'light'
  } else {
    document.getElementById('theme-toggle-dark-icon')?.classList.add('hidden')
    document
      .getElementById('theme-toggle-light-icon')
      ?.classList.remove('hidden')
    document.documentElement.classList.remove('dark')
    // document.documentElement.classList.add('light')
    localStorage.theme = 'dark'
  }

  // localStorage.theme = 'light'

  // localStorage.theme = 'dark'

  // localStorage.removeItem('theme')
}
</script>

<style lang="less" scoped>
.header {
  border-bottom: 1px solid #ccc;
}
</style>
