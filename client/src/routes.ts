export default [
  {
    component: () => import('./pages/HomePage.vue'),
    name: 'home',
    path: '/vite-app-demo/'
  },
  {
    component: () => import('./pages/AboutPage.vue'),
    name: 'about',
    path: '/vite-app-demo/about'
  }
]
