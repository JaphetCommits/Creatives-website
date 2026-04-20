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
    component: AdminDashboard
  },
  {
    path: '/admin/application',
    name: 'AdminDashboardApplication',
    component: AdminDashboardApplication
  },
  {
    path: '/admin/application/create',
    name: 'AdminDashboardCreateApplication',
    component: AdminDashboardCreateApplication
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
