import { createRouter, createWebHistory } from 'vue-router'

import homeRoutes from '@/modules/home/router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...homeRoutes,
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ]
})

export default router
