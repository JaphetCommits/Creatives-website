import { createRouter, createWebHashHistory } from 'vue-router'
import MainHeroSection from './components/MainHeroSection.vue'
import AdminDashboard from './components/AdminDashboard.vue'
import AdminDashboardApplication from './components/AdminDashboardApplication.vue'
import AdminDashboardCreateApplication from './components/AdminDashboardCreateApplication.vue'

const routes = [
  {
    path: '/',
    component: MainHeroSection
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { requiresAdmin: true }
  },
  {
    path: '/admin/application',
    name: 'AdminDashboardApplication',
    component: AdminDashboardApplication,
    meta: { requiresAdmin: true }
  },
  {
    path: '/admin/application/create',
    name: 'AdminDashboardCreateApplication',
    component: AdminDashboardCreateApplication,
    meta: { requiresAdmin: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  if (to.meta?.requiresAdmin) {
    const isAdmin = localStorage.getItem('cs_is_admin') === 'true'
    if (!isAdmin) {
      return { path: '/' }
    }
  }
  return true
})

export default router
