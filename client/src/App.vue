<template>
  <div class="page">
    <header class="nav">
      <img :src="logo" alt="Creatives logo" @click="setSection(null)" style="cursor: pointer" />

      <nav>
        <a href="#about" @click.prevent="setSection('about')">About</a>
        <a href="#history" @click.prevent="setSection('history')">History</a>
        <a href="#members" @click.prevent="setSection('members')">Members</a>
        <a href="#achievements" @click.prevent="setSection('achievements')">Achievements</a>
      </nav>
    </header>

    <Transition name="fade" mode="out-in">
      <!-- Hero section -->
      <main v-if="!currentSection" key="hero" class="hero">
        <section class="hero-text">
          <h1>
            Creatives<br />
            Society
          </h1>
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

      <!-- About component -->
      <About v-else-if="currentSection === 'about'" key="about" />

      <!-- History component -->
      <History v-else-if="currentSection === 'history'" key="history" />

      <!-- Achievements section placeholder -->
      <section v-else-if="currentSection === 'achievements'" key="achievements" id="achievements" class="vision">
        <div class="vision-card">
          <h2>Achievements</h2>
          <p>This is the Achievements section. Content coming soon.</p>
        </div>
      </section>
    </Transition>

    <!-- Footer -->
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
import './App.css'

const currentSection = ref(null)

const setSection = (section) => {
  currentSection.value = section
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
/* styles remain in App.css */
</style>