<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }} Creatives Society. All rights reserved.
      </div>
      <div class="powered-by" @click="showModal = true">
        Powered by Creatives Society
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click="showModal = false">
      <div class="modal" @click.stop>
        <button class="modal-close" @click="showModal = false">&times;</button>
        <h3>Our Team</h3>
        <div class="team-grid">
          <div class="team-category">
            <h4>Project Manager</h4>
            <p><em>—</em></p>
          </div>
          <div class="team-category">
            <h4>Front-End Developers</h4>
            <p>Marc Lester D. Guido</p>
            <p>Justine P. Buncag</p>
          </div>
          <div class="team-category">
            <h4>Back-End Developers</h4>
            <p><em>—</em></p>
            <p><em>—</em></p>
          </div>
          <div class="team-category">
            <h4>UI Designers</h4>
            <p><em>—</em></p>
            <p><em>—</em></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<style scoped>
.footer {
  background-color: #0f172a;
  color: #9ca3af;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 1.5rem 2rem;
}

.footer-content {
  max-width: var(--max, 1000px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  text-align: left;
}

.powered-by {
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.powered-by:hover {
  color: #ffffff;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  position: relative;
  color: #111827;
  font-family: 'Inter', sans-serif;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
}

.modal h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-family: 'Unbounded', sans-serif;
  font-size: 1.5rem;
  text-align: center;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.team-category h4 {
  font-family: 'Unbounded', sans-serif;
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  color: #111827;
}

.team-category p {
  margin: 0.25rem 0;
  font-size: 0.875rem;
  color: #4b5563;
}

.team-category em {
  color: #9ca3af;
  font-style: italic;
}

@media (max-width: 640px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  .copyright, .powered-by {
    text-align: center;
  }
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>