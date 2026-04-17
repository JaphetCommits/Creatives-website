<template>
  <div id="app">
    <header class="nav">
      <img :src="logo" alt="Creatices lines" @click="showSection('about')" style="cursor: pointer" />

      <!-- Desktop navigation -->
      <nav class="desktop-nav">
        <a href="#about" @click.prevent="showSection('about')">About</a>
        <a href="#history" @click.prevent="showSection('history')">History</a>
        <a href="#members" @click.prevent="showSection('members')">Members</a>
        <a href="#achievements" @click.prevent="showSection('achievements')">Achievements</a>
      </nav>

      <!-- Mobile hamburger button -->
      <button class="hamburger" @click="toggleMenu" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Mobile menu overlay -->
      <div v-if="isMenuOpen" class="mobile-menu-overlay" @click.self="closeMenu">
        <div class="mobile-menu">
          <a href="#about" @click.prevent="showSection('about')">About</a>
          <a href="#history" @click.prevent="showSection('history')">History</a>
          <a href="#members" @click.prevent="showSection('members')">Members</a>
          <a href="#achievements" @click.prevent="showSection('achievements')">Achievements</a>
        </div>
      </div>
    </header>

    <div class="page">
      <transition name="fade" mode="out-in">
        <main v-if="currentSection === 'about'" key="hero" class="hero">
          <section class="hero-text">
            <h1>Creatives<br />Society</h1>
            <p>
              Panthers College of computing studies Panthers College of computing
              studies Panthers College of computing studies
            </p>
          </section>
          <section class="hero-image">
            <img :src="hero" alt="Creatives artwork" />
            <div class="hero-overlay badges">
              <span class="badge--1">Innovate</span>
              <span class="badge--2">Debug</span>
              <span class="badge--3">Develop</span>
            </div>
          </section>
        </main>
      </transition>

      <div class="sections-container">
        <transition name="fade" mode="out-in">
          <About v-if="currentSection === 'about'" key="about" id="about" />
          <History v-else-if="currentSection === 'history'" key="history" id="history" />
          <Members v-else-if="currentSection === 'members'" key="members" id="members" />
          <section v-else-if="currentSection === 'achievements'" key="achievements" id="achievements" class="vision">
            <div class="vision-card">
              <h2>Achievements</h2>
              <p>This is the Achievements section. Content coming soon.</p>
            </div>
          </section>
        </transition>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import logo from '../assets/Creatices lines.png'
import hero from '../assets/Creatuives logo.png'
import History from './HistorySection.vue'
import About from './AboutSection.vue'
import Footer from './Footer.vue'
import Members from './MemberSection.vue'
import '../App.css'

const isMenuOpen = ref(false)
const currentSection = ref('about')

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const showSection = async (section) => {
  currentSection.value = section

  await nextTick()
  if (currentSection.value === 'about') {
    scrollToTop()
  }

  closeMenu()
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style>
/* Prevent horizontal scroll globally */
html, body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

#app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: -1;
}

/* Ensure smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Additional styles for sections container */
.sections-container {
  margin-top: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  display: block;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .sections-container {
    padding: 0 1rem;
    margin-top: 1rem;
  }
  
  .hero {
    padding: 0 1rem;
  }
}
</style>
