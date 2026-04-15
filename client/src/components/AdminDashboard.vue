<template>
  <div class="admin-dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2> <img :src="logo" alt="Creatices lines" @click="showSection('about')" style="cursor: pointer" /></h2>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-section">
          <h3 class="nav-title">MAIN</h3>
          <ul class="nav-list">
            <li>
              <a href="#" class="nav-item" :class="{ active: activeSection === 'dashboard' }" @click="setActive('dashboard')">
                <span class="nav-icon">📊</span>
                <span>DASHBOARD</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-item" :class="{ active: activeSection === 'members' }" @click="setActive('members')">
                <span class="nav-icon">👥</span>
                <span>MEMBERS</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="nav-section">
          <h3 class="nav-title">MEMBERS</h3>
          <ul class="nav-list">
            <li>
              <a href="#" class="nav-item" :class="{ active: activeSection === 'profiles' }" @click="setActive('profiles')">
                <span class="nav-icon">👤</span>
                <span>Members Profiles</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-item" :class="{ active: activeSection === 'add' }" @click="setActive('add')">
                <span class="nav-icon">➕</span>
                <span>Add member</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-item" :class="{ active: activeSection === 'delete' }" @click="setActive('delete')">
                <span class="nav-icon">🗑️</span>
                <span>Delete member</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="nav-section">
          <h3 class="nav-title">OTHERS</h3>
          <ul class="nav-list">
            <li>
              <a href="#" class="nav-item" :class="{ active: activeSection === 'application' }" @click="setActive('application')">
                <span class="nav-icon">📄</span>
                <span>Application</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-item" :class="{ active: activeSection === 'pending' }" @click="setActive('pending')">
                <span class="nav-icon">⏳</span>
                <span>Pending</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-item" :class="{ active: activeSection === 'declined' }" @click="setActive('declined')">
                <span class="nav-icon">❌</span>
                <span>Declined</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Top Header -->
      <header class="top-header">
        <button class="back-btn" @click="goHome">← Back to Home</button>
        <button class="add-members-btn">Add Members</button>
        <div class="header-actions">
          <button class="icon-btn">🔔</button>
          <button class="icon-btn">⚙️</button>
          <div class="admin-profile">
            <img src="https://via.placeholder.com/40?text=Admin" alt="Admin" />
            <span>ADMIN</span>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <div class="page-content">
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
        <div v-else-if="activeSection === 'application'" class="placeholder">
          <h2>Applications</h2>
          <p>Applications list coming soon</p>
        </div>
        <div v-else-if="activeSection === 'pending'" class="placeholder">
          <h2>Pending</h2>
          <p>Pending applications coming soon</p>
        </div>
        <div v-else-if="activeSection === 'declined'" class="placeholder">
          <h2>Declined</h2>
          <p>Declined applications coming soon</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AdminMembersProfile from './AdminMembersProfile.vue'
import logo from '../assets/Creatices lines.png'

const router = useRouter()
const activeSection = ref('profiles')

const setActive = (section) => {
  activeSection.value = section
}

const goHome = () => {
  router.push({ path: '/' })
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.admin-dashboard {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

/* Sidebar Styles */
.sidebar {
  width: 220px;
  background: #e8e8e8;
  border-right: 1px solid #d0d0d0;
  overflow-y: auto;
  padding: 20px 0;
}

.sidebar-header {
  padding: 0 20px 30px;
  border-bottom: 1px solid #d0d0d0;
}

.sidebar-header h2 {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #1a1a1a;
}

.sidebar-nav {
  margin-top: 20px;
}

.nav-section {
  margin-bottom: 25px;
  padding: 0 15px;
}

.nav-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #666;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.nav-list {
  list-style: none;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  text-decoration: none;
  color: #333;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 6px;
}

.nav-item:hover {
  background: rgba(0, 0, 0, 0.05);
}

.nav-item.active {
  background: #c0c0c0;
  color: #000;
  font-weight: 600;
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
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.icon-btn:hover {
  transform: scale(1.1);
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
}

.placeholder h2 {
  color: #333;
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

/* Responsive */
@media (max-width: 1024px) {
  .sidebar {
    width: 180px;
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
