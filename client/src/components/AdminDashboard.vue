<template>
  <div class="admin-dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2> <img :src="logo" alt="Creatices lines" @click="showSection('about')" style="cursor: pointer" /></h2>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-main-title">MAIN</div>
        
        <div class="nav-section">
          <button class="nav-section-toggle" :aria-expanded="expandedSections.dashboard" @click="toggleSection('dashboard')">
            <span class="section-label">DASHBOARD</span>
            <span class="toggle-icon">{{ expandedSections.dashboard ? '▼' : '▶' }}</span>
          </button>
          <transition name="nav-list">
            <ul class="nav-list" v-if="expandedSections.dashboard">
              <li>
                <a href="#" class="nav-item" :class="{ active: activeSection === 'application' }" @click.prevent="navigateSection('application')">
                  <span>Application</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-item" :class="{ active: activeSection === 'pending' }" @click.prevent="navigateSection('pending')">
                  <span>Pending</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-item" :class="{ active: activeSection === 'declined' }" @click.prevent="navigateSection('declined')">
                  <span>Declined</span>
                </a>
              </li>
            </ul>
          </transition>
        </div>

        <div class="nav-section">
          <button class="nav-section-toggle" :aria-expanded="expandedSections.members" @click="toggleSection('members')">
            <span class="section-label">MEMBERS</span>
            <span class="toggle-icon">{{ expandedSections.members ? '▼' : '▶' }}</span>
          </button>
          <transition name="nav-list">
            <ul class="nav-list" v-if="expandedSections.members">
              <li>
                <a href="#" class="nav-item" :class="{ active: activeSection === 'profiles' }" @click.prevent="navigateSection('profiles')">
                  <span>Members Profiles</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-item" :class="{ active: activeSection === 'add' }" @click.prevent="navigateSection('add')">
                  <span>Add member</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-item" :class="{ active: activeSection === 'delete' }" @click.prevent="navigateSection('delete')">
                  <span>Delete member</span>
                </a>
              </li>
            </ul>
          </transition>
        </div>

        <div class="nav-section">
          <button class="nav-section-toggle" :aria-expanded="expandedSections.others" @click="toggleSection('others')">
            <span class="section-label">OTHERS</span>
            <span class="toggle-icon">{{ expandedSections.others ? '▼' : '▶' }}</span>
          </button>
          <transition name="nav-list">
            <ul class="nav-list" v-if="expandedSections.others">
              <li>
                <a href="#" class="nav-item" :class="{ active: activeSection === 'application' }" @click.prevent="navigateSection('application')">
                  <span>Application</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-item" :class="{ active: activeSection === 'pending' }" @click.prevent="navigateSection('pending')">
                  <span>Pending</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-item" :class="{ active: activeSection === 'declined' }" @click.prevent="navigateSection('declined')">
                  <span>Declined</span>
                </a>
              </li>
            </ul>
          </transition>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Top Header -->
      <header class="top-header">
        <button class="add-members-btn" @click="handleCreateApplication">{{ activeSection === 'application' ? 'CREATE APPLICATION' : 'Add Members' }}</button>
        <button class="back-btn" @click="goHome">← Back to Home</button>
        <div class="header-actions">
          <button class="icon-btn" aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </button>
          <button class="icon-btn" aria-label="Settings">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </button>
          <div class="admin-profile">
            <img src="https://via.placeholder.com/40?text=Admin" alt="Admin" />
            <span>ADMIN</span>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <div class="page-content">
        <slot name="content">
          <AdminMembersProfile v-if="activeSection === 'profiles' || activeSection === 'members'" />
          <div v-else-if="activeSection === 'dashboard'" class="placeholder">
            <h2>Dashboard</h2>
            <p>Dashboard content coming soon</p>
          </div>
          <div v-else-if="activeSection === 'add'" class="placeholder">
            <h2>Add Member</h2>
            <p>Add member form coming soon</p>
          </div>
          <div v-else-if="activeSection === 'delete'" class="placeholder">
            <h2>Delete Member</h2>
            <p>Delete member functionality coming soon</p>
          </div>
          <AdminDashboardApplication v-else-if="activeSection === 'application'" />
          <div v-else-if="activeSection === 'pending'" class="placeholder">
            <h2>Pending</h2>
            <p>Pending applications coming soon</p>
          </div>
          <div v-else-if="activeSection === 'declined'" class="placeholder">
            <h2>Declined</h2>
            <p>Declined applications coming soon</p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AdminMembersProfile from './AdminMembersProfile.vue'
import AdminDashboardApplication from './AdminDashboardApplication.vue'
import logo from '../assets/Creatices lines.png'

const router = useRouter()
const route = useRoute()

const getSectionFromRoute = (route) => {
  if (route.name === 'AdminDashboardCreateApplication' || route.name === 'AdminDashboardApplication') {
    return 'application'
  }

  const section = route.query.section
  const validSections = ['profiles', 'pending', 'declined', 'add', 'delete', 'dashboard', 'application']
  return section && validSections.includes(section) ? section : 'profiles'
}

const activeSection = ref(getSectionFromRoute(route))
const expandedSections = ref({
  dashboard: true,
  members: true,
  others: false
})

watch(
  () => [route.name, route.query.section],
  () => {
    activeSection.value = getSectionFromRoute(route)
  }
)

const navigateSection = (section) => {
  activeSection.value = section
  router.push({ name: 'AdminDashboard', query: { section } })
}

const toggleSection = (section) => {
  Object.keys(expandedSections.value).forEach((key) => {
    expandedSections.value[key] = key === section ? !expandedSections.value[key] : false
  })
}

const goHome = () => {
  router.push({ path: '/' })
}

const handleCreateApplication = () => {
  if (activeSection.value === 'application') {
    router.push({ name: 'AdminDashboardCreateApplication' })
  }
  // For other sections, could add other logic if needed
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.admin-dashboard {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
  font-family: 'Unbounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

/* Sidebar Styles */
.sidebar {
  width: 300px;
  background: #ffffff;
  overflow-y: auto;
  padding: 20px 0;
}

.sidebar-header {
  padding: 0 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-header h2 {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #1a1a1a;
  font-family: 'Unbounded', sans-serif;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-nav {
  margin-top: 20px;
  padding: 0 15px;
}

.nav-section {
  margin-bottom: 12px;
  padding: 0;
}

.nav-main-title {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #333;
  margin: 20px 15px 20px 15px;
  text-transform: uppercase;
  font-family: 'Unbounded', sans-serif;
}

.nav-section-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  background: #d0d0d0;
  border: none;
  color: #333;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Unbounded', sans-serif;
}

.nav-section-toggle:hover {
  background: #b0b0b0;
}

.nav-section-toggle:active {
  background: #909090;
}

.toggle-icon {
  font-size: 10px;
  min-width: 12px;
  margin-left: auto;
}

.section-label {
  flex: 1;
  text-align: left;
}

.nav-list {
  list-style: none;
  padding-left: 15px;
  margin-top: 18px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  margin-left: 30px;
  text-decoration: none;
  color: #000;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1;
  /* text-transform: uppercase; */
  margin-bottom: 12px;
  font-family: 'Unbounded', sans-serif;
}

.nav-item:hover {
  background: rgba(0, 0, 0, 0.05);
  transform: translateX(2px);
}

.nav-item:hover span {
  text-decoration: underline;
}

.nav-list {
  list-style: none;
  padding-left: 15px;
  margin-top: 18px;
  overflow: hidden;
}

.nav-list-enter-active,
.nav-list-leave-active {
  transition: all 0.28s ease;
}

.nav-list-enter-from,
.nav-list-leave-to {
  max-height: 0;
  opacity: 0;
  transform: scaleY(0.96);
}

.nav-list-enter-to,
.nav-list-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: scaleY(1);
}

.toggle-icon {
  transition: transform 0.25s ease;
}

.nav-section-toggle[aria-expanded="true"] .toggle-icon,
.nav-section-toggle.open .toggle-icon {
  transform: rotate(180deg);
}

.nav-item.active {
  background: transparent;
  color: #000;
  font-weight: 600;
  border-radius: 0;
}

.nav-item.active span {
  text-decoration: underline;
}

.nav-icon {
  font-size: 16px;
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Top Header */
.top-header {
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.add-members-btn {
  background: #d0d0d0;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  color: #333;
  transition: background 0.3s ease;
  font-family: 'Unbounded', sans-serif;
}

.add-members-btn:hover {
  background: #c0c0c0;
}

.back-btn {
  background: linear-gradient(135deg, #8b7e9c 0%, #6d5e84 100%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Unbounded', sans-serif;
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 126, 156, 0.3);
}

.back-btn:active {
  transform: translateY(0);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-btn {
  background: none;
  border: none;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #333;
  transition: transform 0.2s ease, color 0.2s ease;
  padding: 0;
  border-radius: 8px;
}

.icon-btn svg {
  width: 20px;
  height: 20px;
}

.icon-btn:hover {
  transform: scale(1.1);
  color: #000;
}

.admin-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 15px;
  background: #f5f5f5;
  border-radius: 20px;
}

.admin-profile img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.admin-profile span {
  font-size: 12px;
  font-weight: 600;
  color: #333;
  font-family: 'Unbounded', sans-serif;
}

/* Page Content */
.page-content {
  flex: 1;
  overflow-y: auto;
  padding: 30px 20px;
}

.placeholder {
  background: white;
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  color: #999;
  font-family: 'Unbounded', sans-serif;
}

.placeholder h2 {
  color: #333;
  font-family: 'Unbounded', sans-serif;
  margin-bottom: 10px;
}

/* Scrollbar Styling */
.sidebar::-webkit-scrollbar,
.page-content::-webkit-scrollbar {
  width: 8px;
}

.sidebar::-webkit-scrollbar-track,
.page-content::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb,
.page-content::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.sidebar::-webkit-scrollbar-thumb:hover,
.page-content::-webkit-scrollbar-thumb:hover {
  background: #999;
}

.sidebar-header h2 img {
  height: 40px;
  max-width: 260px;
  object-fit: contain;
}

/* Responsive */
@media (max-width: 1024px) {
  .sidebar {
    width: 240px;
  }

  .page-content {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .admin-dashboard {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #d0d0d0;
    display: flex;
    overflow-x: auto;
  }

  .sidebar-header {
    padding: 0 20px;
    border-bottom: none;
    border-right: 1px solid #d0d0d0;
    min-width: fit-content;
  }

  .sidebar-nav {
    display: flex;
    margin-top: 0;
  }

  .nav-section {
    margin-bottom: 0;
    border-right: 1px solid #d0d0d0;
    padding-bottom: 0;
    white-space: nowrap;
  }

  .nav-section:last-child {
    border-right: none;
  }
}

</style>
