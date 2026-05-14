<template>
  <div class="members-profile-container">
    <div class="profile-header">
      <div class="header-left">
        <h1>Members Profile</h1>
        <span class="member-count">{{ members.length }} member{{ members.length !== 1 ? 's' : '' }}</span>
      </div>
      <button class="add-btn" @click="navigateSection && navigateSection('add')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Add Members
      </button>
    </div>

    <div v-if="members.length === 0" class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      <p>No members yet. Use <strong>Add member</strong> to get started.</p>
    </div>

    <div v-else class="members-grid">
      <div class="member-card" v-for="member in members" :key="member.id">
        <div class="card-header">
          <img
            :src="member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=d9dade&color=1a1a1a&size=120`"
            :alt="member.name"
            class="member-image"
          />
          <div class="member-info">
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
          </div>
        </div>

        <div class="card-content">
          <p v-if="member.description" class="member-description">{{ member.description }}</p>

          <div v-if="member.skills && member.skills.length" class="skills-section">
            <h4>Tech Stack</h4>
            <div class="skills-container">
              <span v-for="skill in member.skills" :key="skill" class="skill-badge">{{ skill }}</span>
            </div>
          </div>
        </div>

        <button class="delete-btn" @click="confirmDelete(member)" aria-label="Remove member">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        </button>
      </div>
    </div>

    <div v-if="pendingDelete" class="confirm-overlay" @click.self="pendingDelete = null">
      <div class="confirm-modal">
        <p>Remove <strong>{{ pendingDelete.name }}</strong> from the members list?</p>
        <div class="confirm-actions">
          <button class="btn-cancel" @click="pendingDelete = null">Cancel</button>
          <button class="btn-confirm" @click="doDelete">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { membersStore, deleteMember } from '../stores/members.js'

const navigateSection = inject('navigateSection', null)

const members = computed(() => membersStore.list)
const pendingDelete = ref(null)

const confirmDelete = (member) => {
  pendingDelete.value = member
}

const doDelete = () => {
  if (pendingDelete.value) {
    deleteMember(pendingDelete.value.id)
    pendingDelete.value = null
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.members-profile-container {
  width: 100%;
  padding: 0;
  position: relative;
}

.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 28px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.profile-header h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.5px;
  font-family: 'Unbounded', sans-serif;
  margin: 0;
}

.member-count {
  background: #e8e8e8;
  color: #555;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
  font-family: 'Unbounded', sans-serif;
}

.add-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #1a1a1a;
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Unbounded', sans-serif;
  transition: background 0.2s, transform 0.2s;
  white-space: nowrap;
}

.add-btn svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.add-btn:hover {
  background: #333;
  transform: translateY(-1px);
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 80px 20px;
  background: #fff;
  border-radius: 20px;
  color: #999;
  text-align: center;
}

.empty-state svg {
  width: 52px;
  height: 52px;
  opacity: 0.35;
}

.empty-state p {
  font-size: 14px;
  color: #888;
}

.empty-state strong {
  color: #444;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(240px, 1fr));
  gap: 20px;
}

.member-card {
  background: linear-gradient(180deg, #d9dade 0%, #5d5f66 100%);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.member-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 16px;
}

.member-image {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.4);
  object-fit: cover;
  flex-shrink: 0;
}

.member-info {
  flex: 1;
  min-width: 0;
}

.member-name {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.member-role {
  font-size: 12px;
  color: #374151;
  font-weight: 500;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.member-description {
  font-size: 13px;
  line-height: 1.6;
  color: #475569;
}

.skills-section h4 {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #374151;
  margin-bottom: 8px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-badge {
  background: rgba(255, 255, 255, 0.55);
  color: #1f2937;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.delete-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #374151;
  transition: background 0.2s, color 0.2s;
}

.delete-btn svg {
  width: 14px;
  height: 14px;
}

.delete-btn:hover {
  background: rgba(220, 38, 38, 0.15);
  color: #dc2626;
}

.confirm-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  backdrop-filter: blur(4px);
}

.confirm-modal {
  background: #fff;
  border-radius: 16px;
  padding: 28px 32px;
  max-width: 360px;
  width: 90%;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.confirm-modal p {
  font-size: 15px;
  color: #1a1a1a;
  margin-bottom: 22px;
  line-height: 1.6;
}

.confirm-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn-cancel {
  padding: 10px 24px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Unbounded', sans-serif;
  transition: background 0.2s;
}

.btn-cancel:hover {
  background: #eee;
}

.btn-confirm {
  padding: 10px 24px;
  border-radius: 10px;
  border: none;
  background: #dc2626;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Unbounded', sans-serif;
  transition: background 0.2s;
}

.btn-confirm:hover {
  background: #b91c1c;
}

@media (max-width: 900px) {
  .members-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .members-grid {
    grid-template-columns: 1fr;
  }
}
</style>
