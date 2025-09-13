import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('@/views/Index.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('@/views/404.vue') }
  ]
})

export default router
