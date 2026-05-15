<template>
  <div class="add-members-container">
    <div class="page-header">
      <h1>Add Member</h1>
      <p class="page-sub">Fill in the details below to add a new member profile.</p>
    </div>

    <form class="add-form" @submit.prevent="handleSubmit">
      <div class="form-grid">

        <div class="field">
          <label>Full Name <span class="req">*</span></label>
          <input v-model="form.name" type="text" placeholder="e.g. Juan Dela Cruz" required />
        </div>

        <div class="field">
          <label>Role Selection <span class="req">*</span></label>
          <div class="select-wrap">
            <select v-model="form.role" required>
              <option value="" disabled>Select a role…</option>
              <option>Founder</option>
              <option>Adviser</option>
              <option>Mentor</option>
              <option>Member / Mentor</option>
              <option>President</option>
              <option>Vice President</option>
              <option>Secretary</option>
              <option>Asst. Secretary</option>
              <option>Treasurer</option>
              <option>Auditor</option>
              <option>P.I.O</option>
              <option>Member</option>
            </select>
            <span class="select-arrow">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="#6b7280" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
          </div>
        </div>

        <div class="field full">
          <label>Description</label>
          <textarea v-model="form.description" rows="3" placeholder="Short bio or description..."></textarea>
        </div>

        <div class="field">
          <label>Tech Stack / Skills</label>
          <input v-model="form.skillsRaw" type="text" placeholder="e.g. Vue, JavaScript, CSS (comma-separated)" />
          <span class="field-hint">Separate each skill with a comma</span>
        </div>

        <div class="field">
          <label>Profile Image URL</label>
          <input v-model="form.image" type="url" placeholder="https://example.com/photo.jpg" />
          <span class="field-hint">Leave blank to use a placeholder</span>
        </div>

      </div>

      <div class="form-actions">
        <button type="button" class="btn-reset" @click="resetForm">Clear</button>
        <button type="submit" class="btn-submit">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Member
        </button>
      </div>

      <transition name="toast">
        <div v-if="successMsg" class="toast">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          {{ successMsg }}
        </div>
      </transition>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { addMember } from '../stores/members.js'

const emptyForm = () => ({
  name: '',
  role: '',
  description: '',
  skillsRaw: '',
  image: ''
})

const form = reactive(emptyForm())
const successMsg = ref('')
const errorMsg = ref('')
const submitting = ref(false)

const resetForm = () => {
  Object.assign(form, emptyForm())
}

const handleSubmit = async () => {
  submitting.value = true
  errorMsg.value = ''
  const skills = form.skillsRaw
    ? form.skillsRaw.split(',').map((s) => s.trim()).filter(Boolean)
    : []
  try {
    await addMember({
      name: form.name.trim(),
      role: form.role.trim(),
      description: form.description.trim(),
      skills,
      image: form.image.trim() || null
    })
    successMsg.value = `${form.name} has been added successfully!`
    resetForm()
    setTimeout(() => (successMsg.value = ''), 3000)
  } catch (err) {
    errorMsg.value = 'Failed to add member. Please try again.'
    setTimeout(() => (errorMsg.value = ''), 3000)
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.add-members-container {
  width: 100%;
  padding: 0;
}

.page-header {
  margin-bottom: 28px;
}

.page-header h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.5px;
  margin: 0 0 6px 0;
  font-family: 'Unbounded', sans-serif;
}

.page-sub {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.add-form {
  background: #fff;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  position: relative;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field.full {
  grid-column: 1 / -1;
}

.field label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #444;
  font-family: 'Unbounded', sans-serif;
}

.req {
  color: #e53e3e;
}

.field input,
.field textarea {
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 14px;
  font-family: inherit;
  color: #1a1a1a;
  background: #fafafa;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: none;
}

.field input:focus,
.field textarea:focus {
  border-color: #333;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(0,0,0,0.06);
}

.select-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.select-wrap select {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 14px;
  font-family: inherit;
  color: #1a1a1a;
  background: #fafafa;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.select-wrap select:focus {
  border-color: #333;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(0,0,0,0.06);
}

.select-wrap select option[value=""] {
  color: #999;
}

.select-arrow {
  position: absolute;
  right: 14px;
  pointer-events: none;
  display: flex;
  align-items: center;
}

.field-hint {
  font-size: 11px;
  color: #999;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 28px;
}

.btn-reset {
  background: #f0f0f0;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  cursor: pointer;
  font-family: 'Unbounded', sans-serif;
  transition: background 0.2s;
}

.btn-reset:hover {
  background: #e0e0e0;
}

.btn-submit {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #1a1a1a;
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Unbounded', sans-serif;
  transition: background 0.2s, transform 0.2s;
}

.btn-submit svg {
  width: 16px;
  height: 16px;
}

.btn-submit:hover {
  background: #333;
  transform: translateY(-1px);
}

.toast {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 28px;
  left: 32px;
  background: #1a1a1a;
  color: #fff;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}

.toast svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .field.full {
    grid-column: 1;
  }
  .add-form {
    padding: 20px;
  }
}
</style>
