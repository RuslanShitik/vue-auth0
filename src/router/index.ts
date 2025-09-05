import { createRouter, createWebHistory } from 'vue-router'
import { isAuthorizedGuard } from '@/router/guards.ts'

const IndexView = () => import('@/views/IndexView.vue')
const ProfileView = () => import('@/views/ProfileView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: IndexView,
    },
    {
      path: '/profile',
      component: ProfileView,
      beforeEnter: [isAuthorizedGuard],
    },
  ],
})

export default router
