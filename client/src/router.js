import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import AdminDashboard from './components/AdminDashboard.vue'

const routes = [
  {
    path: '/',
    component: MainLayout
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
