import { createRouter, createWebHashHistory } from 'vue-router'
import MainHeroSection from './components/MainHeroSection.vue'
import AdminDashboard from './components/AdminDashboard.vue'
import AdminDashboardApplication from './components/AdminDashboardApplication.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
