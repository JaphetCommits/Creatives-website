<template>
  <div id="app">
    <header class="nav">
      <img :src="logo" alt="Creatives logo" @click="scrollToTop" style="cursor: pointer" />

      <!-- Desktop navigation -->
      <nav class="desktop-nav">
        <a href="#about">About</a>
        <a href="#history">History</a>
        <a href="#members">Members</a>
        <a href="#achievements">Achievements</a>
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
          <a href="#about" @click.prevent="closeMenu">About</a>
          <a href="#history" @click.prevent="closeMenu">History</a>
          <a href="#members" @click.prevent="closeMenu">Members</a>
          <a href="#achievements" @click.prevent="closeMenu">Achievements</a>
        </div>
      </div>
    </header>

    <div class="page">
      <!-- Hero section - always visible -->
      <main class="hero">
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

      <!-- All sections always visible below hero -->
      <div class="sections-container">
        <About id="about" />
        <History id="history" />
        <Members id="members" />
        <section id="achievements" class="vision">
          <div class="vision-card">
            <h2>Achievements</h2>
            <p>This is the Achievements section. Content coming soon.</p>
          </div>
        </section>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import logo from './assets/Creatices lines.png'
import hero from './assets/Creatuives logo.png'
import History from './components/HistorySection.vue'
import About from './components/AboutSection.vue'
import Footer from './components/Footer.vue'
import Members from './components/MemberSection.vue'
import './App.css'

const isMenuOpen = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
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