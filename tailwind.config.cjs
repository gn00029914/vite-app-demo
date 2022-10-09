/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,vue}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')] //缺少官方支援 'flowbite/plugin' 的宣告 (.d.ts) 檔案
}
