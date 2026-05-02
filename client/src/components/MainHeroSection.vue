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
            <span class="hero-eyebrow">
              <span class="hero-eyebrow-dot"></span>
              Panthers College of Computing Studies
            </span>
            <h1>
              Creatives<br />
              <span class="hero-grad">Society</span>
            </h1>
            <p>
              A community of student developers, designers and innovators —
              building, learning and shipping real-world digital solutions together.
            </p>
            <div class="hero-actions">
              <a href="#members" @click.prevent="showSection('members')" class="hero-cta primary">
                Meet the Team
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#history" @click.prevent="showSection('history')" class="hero-cta ghost">
                Our Story
              </a>
            </div>
            <div class="hero-stats">
              <div class="hero-stat">
                <span class="hero-stat-num">50<span class="plus">+</span></span>
                <span class="hero-stat-label">Active members</span>
              </div>
              <span class="hero-stat-sep"></span>
              <div class="hero-stat">
                <span class="hero-stat-num">20<span class="plus">+</span></span>
                <span class="hero-stat-label">Projects shipped</span>
              </div>
              <span class="hero-stat-sep"></span>
              <div class="hero-stat">
                <span class="hero-stat-num">10<span class="plus">+</span></span>
                <span class="hero-stat-label">Events hosted</span>
              </div>
            </div>
          </section>
          <section class="hero-image">
            <div class="hero-image-glow"></div>
            <div class="hero-image-frame">
              <img :src="hero" alt="Creatives artwork" />
            </div>
            <span class="float-badge float-badge--1">
              <span class="float-badge-dot"></span> Innovate
            </span>
            <span class="float-badge float-badge--2">
              <span class="float-badge-dot"></span> Debug
            </span>
            <span class="float-badge float-badge--3">
              <span class="float-badge-dot"></span> Develop
            </span>
          </section>
        </main>
      </transition>

      <div :class="['sections-container', { 'sections-container--members': currentSection === 'members' }]">
        <transition name="fade" mode="out-in">
          <About v-if="currentSection === 'about'" key="about" id="about" />
          <History v-else-if="currentSection === 'history'" key="history" id="history" />
          <Members v-else-if="currentSection === 'members'" key="members" id="members" />
          <Achievements v-else-if="currentSection === 'achievements'" key="achievements" id="achievements" />
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
import Achievements from './AchievementsSection.vue'
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

/* Additional style for section container */
.sections-container {
  margin-top: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.sections-container--members {
  margin-top: 0;
  padding: 0;
  max-width: 100%;
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
