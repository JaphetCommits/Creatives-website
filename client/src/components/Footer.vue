<template>
  <footer class="footer">
    <div class="footer-inner">
      <!-- ============ MAIN FOOTER GRID ============ -->
      <div class="footer-grid">
        <!-- BRAND COLUMN -->
        <div class="footer-col footer-brand">
          <div class="brand-row">
            <img :src="logo" alt="Creatives Society" class="brand-logo" />
          </div>
          <p class="brand-tagline">
            A community of student developers, designers and innovators —
            building, learning and shipping real-world digital solutions
            together at PCCS.
          </p>
          <div class="socials">
            <a href="#" class="social" aria-label="Facebook" @click.prevent>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="#" class="social" aria-label="Instagram" @click.prevent>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" class="social" aria-label="GitHub" @click.prevent>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/></svg>
            </a>
            <a href="#" class="social" aria-label="LinkedIn" @click.prevent>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
            </a>
          </div>
        </div>

        <!-- EXPLORE COLUMN -->
        <div class="footer-col">
          <h4 class="col-title">Explore</h4>
          <ul class="link-list">
            <li><a href="#about" @click.prevent="navigate('about')">About Us</a></li>
            <li><a href="#history" @click.prevent="navigate('history')">Our History</a></li>
            <li><a href="#members" @click.prevent="navigate('members')">Members</a></li>
            <li><a href="#achievements" @click.prevent="navigate('achievements')">Achievements</a></li>
          </ul>
        </div>

        <!-- RESOURCES COLUMN -->
        <div class="footer-col">
          <h4 class="col-title">Resources</h4>
          <ul class="link-list">
            <li><a href="#" @click.prevent>Join the Society</a></li>
            <li><a href="#" @click.prevent>Events Calendar</a></li>
            <li><a href="#" @click.prevent>Project Showcase</a></li>
            <li><a href="#" @click.prevent>Code of Conduct</a></li>
          </ul>
        </div>

        <!-- CONTACT COLUMN -->
        <div class="footer-col">
          <h4 class="col-title">Get in Touch</h4>
          <ul class="contact-list">
            <li>
              <span class="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span>Panthers College of Computing Studies</span>
            </li>
            <li>
              <span class="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <a href="mailto:hello@creativessociety.org">hello@creativessociety.org</a>
            </li>
            <li>
              <span class="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
              <span>Mon – Fri · 9:00 AM – 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- ============ NEWSLETTER STRIP ============ -->
      <div class="newsletter">
        <div class="news-text">
          <h4>Stay in the loop.</h4>
          <p>Get monthly updates on events, projects and member spotlights.</p>
        </div>
        <form class="news-form" @submit.prevent="onSubscribe">
          <input
            v-model="email"
            type="email"
            placeholder="you@school.edu"
            required
          />
          <button type="submit">
            {{ subscribed ? 'Subscribed!' : 'Subscribe' }}
            <svg v-if="!subscribed" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </form>
      </div>

      <!-- ============ BOTTOM BAR ============ -->
      <div class="footer-bottom">
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} Creatives Society · All rights reserved.
        </div>
        <div class="bottom-actions">
          <button class="ghost-link" @click="showModal = true">Powered by Creatives Society</button>
          <button class="admin-btn" @click="goToAdminDashboard">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Admin Dashboard
          </button>
        </div>
      </div>
    </div>

    <!-- ============ TEAM MODAL ============ -->
    <div v-if="showModal" class="modal-overlay" @click="showModal = false">
      <div class="modal" @click.stop>
        <button class="modal-close" @click="showModal = false" aria-label="Close">&times;</button>
        <div class="modal-header">
          <span class="modal-eyebrow">Behind the build</span>
          <h3>Our Team</h3>
          <p class="modal-sub">The students who designed and built this site.</p>
        </div>
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
import { useRouter } from 'vue-router'
import logo from '../assets/Creatices lines.png'

const showModal = ref(false)
const email = ref('')
const subscribed = ref(false)
const router = useRouter()

const goToAdminDashboard = () => {
  router.push({ name: 'AdminDashboard' })
}

const navigate = (section) => {
  const target = document.getElementById(section)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }
  // Fallback: jump to top of the page using hash so MainHeroSection nav still works
  window.location.hash = `#${section}`
}

const onSubscribe = () => {
  if (!email.value) return
  subscribed.value = true
  email.value = ''
  setTimeout(() => (subscribed.value = false), 2400)
}
</script>

<style scoped>
.footer {
  position: relative;
  margin-top: 80px;
  padding: 0;
  width: 100%;
  color: #cbd5e1;
}

.footer::before {
  content: '';
  position: absolute;
  inset: 0;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  background:
    radial-gradient(circle at 15% 20%, rgba(47, 158, 131, 0.12), transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(30, 106, 168, 0.14), transparent 50%),
    linear-gradient(180deg, #0b1f3a 0%, #0f172a 100%);
  z-index: -1;
  pointer-events: none;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 40px 28px 40px;
  box-sizing: border-box;
}

/* ============ MAIN GRID ============ */
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.brand-logo {
  height: 38px;
  width: auto;
  filter: brightness(0) invert(1);
}

.brand-tagline {
  color: rgba(203, 213, 225, 0.78);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 24px 0;
  max-width: 360px;
}

.socials {
  display: flex;
  gap: 10px;
}

.social {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: #cbd5e1;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.social svg {
  width: 18px;
  height: 18px;
}

.social:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #2f9e83, #1e6aa8);
  color: #fff;
  border-color: transparent;
}

.col-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
  margin: 0 0 18px 0;
}

.link-list,
.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-list a {
  color: rgba(203, 213, 225, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease, padding-left 0.2s ease;
  display: inline-block;
}

.link-list a:hover {
  color: #fff;
  padding-left: 4px;
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.92rem;
  color: rgba(203, 213, 225, 0.85);
  line-height: 1.55;
}

.contact-list a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-list a:hover {
  color: #fff;
}

.ic {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  color: #2f9e83;
}

.ic svg {
  width: 16px;
  height: 16px;
}

/* ============ NEWSLETTER ============ */
.newsletter {
  margin: 36px 0;
  padding: 28px 32px;
  background: linear-gradient(135deg, rgba(47, 158, 131, 0.12), rgba(30, 106, 168, 0.12));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 24px;
  align-items: center;
}

.news-text h4 {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 6px 0;
}

.news-text p {
  margin: 0;
  font-size: 0.92rem;
  color: rgba(203, 213, 225, 0.8);
}

.news-form {
  display: flex;
  gap: 8px;
  background: rgba(15, 23, 42, 0.4);
  padding: 6px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.news-form input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 0.95rem;
  padding: 10px 14px;
  font-family: inherit;
}

.news-form input::placeholder {
  color: rgba(203, 213, 225, 0.5);
}

.news-form button {
  background: linear-gradient(135deg, #2f9e83 0%, #1e6aa8 100%);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 9px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;
}

.news-form button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 22px rgba(47, 158, 131, 0.35);
}

.news-form button svg {
  width: 16px;
  height: 16px;
}

/* ============ BOTTOM BAR ============ */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.copyright {
  font-size: 0.88rem;
  color: rgba(203, 213, 225, 0.65);
}

.bottom-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.ghost-link {
  background: transparent;
  border: none;
  color: rgba(203, 213, 225, 0.7);
  font-size: 0.88rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
  font-family: inherit;
}

.ghost-link:hover {
  color: #fff;
}

.admin-btn {
  background: linear-gradient(135deg, #2f9e83 0%, #1e6aa8 100%);
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.88rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
}

.admin-btn svg {
  width: 16px;
  height: 16px;
}

.admin-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(47, 158, 131, 0.35);
}

/* ============ MODAL ============ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(6px);
}

.modal {
  background: white;
  border-radius: 20px;
  padding: 36px;
  max-width: 560px;
  width: 100%;
  position: relative;
  color: #111827;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  background: rgba(15, 23, 42, 0.06);
  border: none;
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  color: #0f172a;
  transition: background 0.2s ease;
}

.modal-close:hover {
  background: rgba(15, 23, 42, 0.12);
}

.modal-header {
  text-align: center;
  margin-bottom: 24px;
}

.modal-eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2f9e83;
  font-weight: 700;
  margin-bottom: 8px;
}

.modal h3 {
  margin: 0 0 6px 0;
  font-family: 'Unbounded', sans-serif;
  font-size: 1.5rem;
  color: #0f172a;
}

.modal-sub {
  margin: 0;
  font-size: 0.92rem;
  color: #64748b;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.team-category {
  background: rgba(15, 23, 42, 0.04);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(15, 23, 42, 0.06);
}

.team-category h4 {
  font-family: 'Unbounded', sans-serif;
  margin: 0 0 8px 0;
  font-size: 0.88rem;
  color: #0f172a;
}

.team-category p {
  margin: 4px 0;
  font-size: 0.88rem;
  color: #475569;
}

.team-category em {
  color: #9ca3af;
  font-style: italic;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
  .newsletter {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .news-text h4 {
    text-align: center;
  }
}

@media (max-width: 600px) {
  .footer-inner {
    padding: 48px 20px 24px 20px;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .newsletter {
    padding: 22px;
  }
  .news-form {
    flex-direction: column;
    background: transparent;
    border: none;
    padding: 0;
    gap: 10px;
  }
  .news-form input {
    background: rgba(15, 23, 42, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 12px 14px;
  }
  .news-form button {
    justify-content: center;
    padding: 12px 20px;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  .bottom-actions {
    justify-content: center;
  }
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
