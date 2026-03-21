<template>
  <div class="page">
    <header class="nav">
      <img :src="logo" alt="Creatives logo" @click="currentSection = null" style="cursor: pointer" />

      <nav>
        <a href="#history" @click.prevent="currentSection = 'history'">History</a>
        <a href="#mission" @click.prevent="currentSection = 'mission'">Mission</a>
        <a href="#officers" @click.prevent="currentSection = 'officers'">Members</a>
        <a href="#achievements" @click.prevent="currentSection = 'achievements'">Achievements</a>
      </nav>
    </header>

    <!-- Hero section – shown only when no section is active -->
    <main v-if="!currentSection" class="hero">
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

    <!-- History component -->
    <History v-if="currentSection === 'history'" />

    <!-- Mission section placeholder -->
    <section v-if="currentSection === 'mission'" id="mission" class="vision">
      <div class="vision-card">
        <h2>Mission</h2>
        <p>This is the Mission section. Content coming soon.</p>
      </div>
    </section>

    <!-- Officers component -->
    <Officers v-if="currentSection === 'officers'" />

    <!-- Achievements section placeholder -->
    <section v-if="currentSection === 'achievements'" id="achievements" class="vision">
      <div class="vision-card">
        <h2>Achievements</h2>
        <p>This is the Achievements section. Content coming soon.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import logo from './assets/Creatices lines.png'
import hero from './assets/Creatuives logo.png'
import Officers from './components/Officers.vue'
import History from './components/History.vue'
import './App.css'

const currentSection = ref(null)
</script>

<style>
/* styles remain in App.css */
</style>