<template>
  <AdminDashboard>
    <template #content>
      <main class="dashboard-panel">
        <div class="page-header">
          <div class="page-title">
            <h1>Application</h1>
          </div>
          <div class="search-bar">
            <input
              type="search"
              placeholder="Search applications..."
              v-model="searchQuery"
            />
          </div>
        </div>

        <section class="application-table-card">

          <div class="table-scroll">
            <table class="application-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="filteredApplications.length === 0">
                  <td colspan="4" class="empty-state">No applications found</td>
                </tr>
                <tr v-for="application in filteredApplications" :key="application.id">
                  <td>{{ application.name }}</td>
                  <td>{{ application.email }}</td>
                  <td>{{ application.phone }}</td>
                  <td>
                    <span :class="['status-pill', application.status.toLowerCase()]">
                      {{ application.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </template>
  </AdminDashboard>
</template>

<script setup>
import { computed, ref } from 'vue'
import AdminDashboard from './AdminDashboard.vue'

const searchQuery = ref('')

const applications = ref([
  {
    id: 1,
    name: 'N/A',
    email: 'N/A',
    phone: 'N/A',
    status: 'N/A'
  },
])

const filteredApplications = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) {
    return applications.value
  }

  return applications.value.filter((application) => {
    return (
      application.name.toLowerCase().includes(query) ||
      application.email.toLowerCase().includes(query) ||
      application.phone.toLowerCase().includes(query) ||
      application.status.toLowerCase().includes(query)
    )
  })
})

const handleCreateApplication = () => {
  console.log('Create application clicked')
}
</script>

<style scoped>
.page-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-bottom: 28px;
  background: rgba(211, 211, 211, 0.75);
  padding: 20px;
  border-radius: 12px;
}

.page-title h1 {
  font-size: 30px;
  letter-spacing: 0.4px;
  color: #111;
}

.search-bar {
  flex: 1 1 320px;
  max-width: 400px;
}

.search-bar input {
  width: 100%;
  padding: 14px 18px;
  border-radius: 18px;
  border: 1px solid #d4d4d4;
  background: #fff;
  color: #222;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search-bar input:focus {
  border-color: #8a8dff;
  box-shadow: 0 0 0 4px rgba(138, 141, 255, 0.12);
}

.application-table-card {
  background: rgba(211, 211, 211, 0.75);
  border-radius: 28px;
  padding: 26px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
}

.table-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-bottom: 20px;
}

.table-heading h2 {
  font-size: 22px;
  color: #111;
}

.primary-button {
  padding: 12px 22px;
  border: none;
  border-radius: 16px;
  background: #4f46e5;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.primary-button:hover {
  background: #4338ca;
  transform: translateY(-1px);
}

.table-scroll {
  overflow-x: auto;
}

.application-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 680px;
}

.application-table th,
.application-table td {
  text-align: left;
  padding: 18px 16px;
  border-bottom: 1px solid #e8e8f0;
}

.application-table th {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #5a5f75;
}

.application-table td {
  font-size: 15px;
  color: #252a36;
}

.application-table tbody tr:hover {
  background: #fafaff;
}

.empty-state {
  padding: 42px 0;
  text-align: center;
  color: #7c8194;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 94px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-pill.pending {
  background: rgba(250, 204, 21, 0.16);
  color: #b45309;
}

.status-pill.approved {
  background: rgba(16, 185, 129, 0.16);
  color: #047857;
}

.status-pill.declined {
  background: rgba(239, 68, 68, 0.14);
  color: #b91c1c;
}
</style>
