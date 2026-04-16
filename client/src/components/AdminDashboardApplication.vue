<template>
  <div class="admin-dashboard-application">
    <header class="app-header">
      <div class="brand">
      </div>

      <button class="create-btn">
        <span class="create-icon">+</span>
        <span>CREATE APPLICATION</span>
      </button>

      <div class="header-actions">
        <button class="icon-btn">🔔</button>
        <button class="icon-btn">⚙️</button>
        <div class="profile-pill">
          <img src="https://via.placeholder.com/46?text=AD" alt="Admin" />
          <span>ADMIN</span>
        </div>
      </div>
    </header>

      <main class="dashboard-panel">
        <div class="dashboard-title">
          <h1>DASHBOARD</h1>
        </div>

        <div class="cards-grid">
          <article class="stat-card">
            <div class="stat-icon">📄</div>
            <div>
              <p class="stat-label">Application</p>
              <p class="stat-value">64</p>
            </div>
          </article>

          <article class="stat-card">
            <div class="stat-icon">⏱️</div>
            <div>
              <p class="stat-label">Pending</p>
              <p class="stat-value">12</p>
            </div>
          </article>

          <article class="stat-card">
            <div class="stat-icon">📦</div>
            <div>
              <p class="stat-label">Others</p>
              <p class="stat-value">8</p>
            </div>
          </article>

          <article class="stat-card">
            <div class="stat-icon">✕</div>
            <div>
              <p class="stat-label">Declined</p>
              <p class="stat-value">10</p>
            </div>
          </article>

          <article class="stat-card">
            <div class="stat-icon">👥</div>
            <div>
              <p class="stat-label">Members</p>
              <p class="stat-value">9</p>
            </div>
          </article>
        </div>
      </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'


const route = useRoute()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.admin-dashboard-application {
  min-height: 100vh;
  background: #f5f5f5;
  font-family: 'Inter', sans-serif;
  color: #222;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 36px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-size: 14px;
}

.logo {
  width: 140px;
  filter: brightness(0) saturate(100%) invert(16%) sepia(3%) saturate(0%) hue-rotate(203deg) brightness(100%) contrast(96%);
}

.create-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border: none;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.08);
  color: #111;
  font-weight: 700;
  letter-spacing: 0.6px;
  cursor: pointer;
}

.create-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.12);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon-btn {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  border: none;
  background: #111;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.profile-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08);
}

.profile-pill img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.sidebar {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-block {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.05);
}

.sidebar-label {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  text-transform: uppercase;
  color: #5d5f66;
  margin-bottom: 16px;
}

.sidebar-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 16px;
  background: #e8e8e8;
  color: #333;
  cursor: pointer;
  font-weight: 700;
}

.sidebar-item.active {
  background: #d4d4d4;
}

.sidebar-links {
  display: grid;
  gap: 10px;
  padding-top: 16px;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  color: #262626;
  text-decoration: none;
  background: rgba(245, 245, 245, 0.9);
  transition: transform 0.2s ease, background 0.2s ease;
}

.sidebar-link:hover,
.sidebar-link.active {
  background: #f0f0f0;
  transform: translateX(2px);
}

.link-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.08);
}

.dashboard-panel {
  flex: 1;
  min-height: 640px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 30px;
  padding: 32px;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.08);
  background-image:
    linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.02) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02) 76%, transparent 77%, transparent);
  background-size: 100px 100px;
}

.dashboard-title {
  margin-bottom: 28px;
}

.dashboard-title h1 {
  font-size: 32px;
  letter-spacing: 0.5px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px;
  border-radius: 24px;
  background: linear-gradient(145deg, #e1e1e1 0%, #bdbdbd 100%);
  box-shadow: 0 18px 30px rgba(15, 23, 42, 0.08);
}

.stat-icon {
  width: 54px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.75);
  color: #222;
  font-size: 24px;
}

.stat-label {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 6px;
  color: #3c3c3c;
}

.stat-value {
  font-size: 28px;
  font-weight: 800;
}
</style>
