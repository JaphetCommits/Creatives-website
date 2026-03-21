<template>
  <div class="page">
    <header class="nav">
      <img :src="logo" alt="Creatives logo" @click="currentSection = null" style="cursor: pointer" />

      <nav>
        <a href="#vision" @click.prevent="currentSection = 'vision'">Vision</a>
        <a href="#mission" @click.prevent="currentSection = 'mission'">Mission</a>
        <a href="#officers" @click.prevent="currentSection = 'officers'">Officers</a>
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
          <span class="badge--1">Innovation</span>
          <span class="badge--2">Progress</span>
          <span class="badge--3">Develop</span>
        </div>
      </section>
    </main>

    <!-- Vision section -->
    <section v-if="currentSection === 'vision'" id="vision" class="vision">
      <div class="vision-card">
        <h2>About Us</h2>
        <p>
          The Campus Developers Organization is a community of passionate students <br>
          dedicated to learning, building, and innovating through technology. Our <br>
          organization brings together aspiring programmers, designers, and tech <br>
          enthusiasts who share a common goal of developing skills and creating
          impactful <br> digital solutions.
        </p>
      </div>

      <div class="vision-card">
        <h2>Why We Exist</h2>
        <p>
          The Campus Developers Organization is a community of passionate students
          dedicated to learning, building, and innovating through technology. Our
          organization brings together aspiring programmers, designers, and tech
          enthusiasts who share a common goal of developing skills and creating
          impactful digital solutions.
        </p>
      </div>

      <div class="vision-card">
        <h2>Mission</h2>
        <p>
          Promote the growth of computing within Partners College of Computing and
          Technology.
        </p>
      </div>
    </section>

    <!-- Mission section placeholder -->
    <section v-if="currentSection === 'mission'" id="mission" class="vision">
      <div class="vision-card">
        <h2>Mission</h2>
        <p>This is the Mission section. Content coming soon.</p>
      </div>
    </section>

    <!-- Officers section placeholder -->
    <section v-if="currentSection === 'officers'" id="officers" class="vision">
      <div class="vision-card">
        <h2>Officers</h2>
        <p>This is the Officers section. Content coming soon.</p>
      </div>
    </section>

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
import './App.css'
const currentSection = ref(null)
</script>

<!-- <script setup>
import CampusDevelopers from './CampusDevelopers.vue'
</script>

<template>
  <div>
    <CampusDevelopers />
  </div>
</template> -->

<style>
/* styles remain in App.css */
</style>